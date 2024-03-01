/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::cell::RefCell;
use std::fmt;
use std::ops::DerefMut;
use std::sync::Arc;

use buck2_common::legacy_configs::dice::LegacyBuckConfigOnDice;
use buck2_common::legacy_configs::view::LegacyBuckConfigView;
use buck2_common::legacy_configs::LegacyBuckConfig;
use hashbrown::raw::RawTable;
use starlark::collections::Hashed;
use starlark::environment::Module;
use starlark::values::FrozenStringValue;
use starlark::values::StringValue;

struct BuckConfigEntry {
    section: Hashed<String>,
    key: Hashed<String>,
    value: Option<FrozenStringValue>,
}

/// Provides access to the buckconfigs required by starlark functions (read_config, read_root_config).
pub trait BuckConfigsViewForStarlark {
    fn read_current_cell_config(
        &self,
        section: &str,
        key: &str,
    ) -> anyhow::Result<Option<Arc<str>>>;

    fn read_root_cell_config(&self, section: &str, key: &str) -> anyhow::Result<Option<Arc<str>>>;
}

struct BuckConfigsInner<'a> {
    configs_view: &'a (dyn BuckConfigsViewForStarlark + 'a),
    /// Hash map by `(section, key)` pair, so we do one table lookup per request.
    /// So we hash the `key` even if the section does not exist,
    /// but this is practically not an issue, because keys usually come with cached hash.
    current_cell_cache: RawTable<BuckConfigEntry>,
    root_cell_cache: RawTable<BuckConfigEntry>,
}

/// Version of cell buckconfig optimized for fast query from `read_config` Starlark function.
pub(crate) struct LegacyBuckConfigsForStarlark<'a> {
    module: &'a Module,
    inner: RefCell<BuckConfigsInner<'a>>,
}

impl<'a> fmt::Debug for LegacyBuckConfigsForStarlark<'a> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("LegacyBuckConfigForStarlark")
            .finish_non_exhaustive()
    }
}

impl<'a> LegacyBuckConfigsForStarlark<'a> {
    // `section` or `key` 32 bit hashes are well swizzled,
    // but concatenation of them into 64 bit integer is not.
    // This function tries to fix that.
    fn mix_hashes(a: u32, b: u32) -> u64 {
        fn murmur3_mix64(mut x: u64) -> u64 {
            x ^= x >> 33;
            x = x.wrapping_mul(0xff51afd7ed558ccd);
            x ^= x >> 33;
            x = x.wrapping_mul(0xc4ceb9fe1a85ec53);
            x ^= x >> 33;
            x
        }

        murmur3_mix64(((a as u64) << 32) | (b as u64))
    }

    /// Constructor.
    pub(crate) fn new(
        module: &'a Module,
        configs_view: &'a (dyn BuckConfigsViewForStarlark + 'a),
    ) -> LegacyBuckConfigsForStarlark<'a> {
        LegacyBuckConfigsForStarlark {
            module,
            inner: RefCell::new(BuckConfigsInner {
                configs_view,
                current_cell_cache: RawTable::new(),
                root_cell_cache: RawTable::new(),
            }),
        }
    }

    fn get_impl(
        &self,
        section: Hashed<&str>,
        key: Hashed<&str>,
        from_root_cell: bool,
    ) -> anyhow::Result<Option<FrozenStringValue>> {
        let hash = Self::mix_hashes(section.hash().get(), key.hash().get());

        let mut inner = self.inner.borrow_mut();
        let BuckConfigsInner {
            ref configs_view,
            ref mut current_cell_cache,
            ref mut root_cell_cache,
        } = inner.deref_mut();

        let cache = if from_root_cell {
            root_cell_cache
        } else {
            current_cell_cache
        };
        if let Some(e) = cache.get(hash, |e| {
            e.section.key() == section.key() && e.key.as_str() == *key.key()
        }) {
            return Ok(e.value);
        }

        let value = if from_root_cell {
            configs_view.read_root_cell_config(section.key(), key.key())?
        } else {
            configs_view.read_current_cell_config(section.key(), key.key())?
        }
        .map(|v| self.module.frozen_heap().alloc_str(&v));

        cache.insert(
            hash,
            BuckConfigEntry {
                section: Hashed::new_unchecked(section.hash(), (*section.key()).to_owned()),
                key: Hashed::new_unchecked(key.hash(), (*key.key()).to_owned()),
                value,
            },
            |e| Self::mix_hashes(e.section.hash().get(), e.key.hash().get()),
        );

        Ok(value)
    }

    /// Find the buckconfig entry.
    pub(crate) fn current_cell_get(
        &self,
        section: StringValue,
        key: StringValue,
    ) -> anyhow::Result<Option<FrozenStringValue>> {
        // Note here we reuse the hashes of `section` and `key`,
        // if `read_config` is called repeatedly with the same constant arguments:
        // `StringValue` caches the hashes.
        self.get_impl(section.get_hashed_str(), key.get_hashed_str(), false)
    }

    pub(crate) fn root_cell_get(
        &self,
        section: StringValue,
        key: StringValue,
    ) -> anyhow::Result<Option<FrozenStringValue>> {
        // Note here we reuse the hashes of `section` and `key`,
        // if `read_config` is called repeatedly with the same constant arguments:
        // `StringValue` caches the hashes.
        self.get_impl(section.get_hashed_str(), key.get_hashed_str(), true)
    }
}

pub(crate) struct ConfigsOnDiceViewForStarlark<'a, 'd> {
    buckconfig: LegacyBuckConfigOnDice<'a, 'd>,
    root_buckconfig: LegacyBuckConfigOnDice<'a, 'd>,
}

impl<'a, 'd> ConfigsOnDiceViewForStarlark<'a, 'd> {
    pub(crate) fn new(
        buckconfig: LegacyBuckConfigOnDice<'a, 'd>,
        root_buckconfig: LegacyBuckConfigOnDice<'a, 'd>,
    ) -> Self {
        Self {
            buckconfig,
            root_buckconfig,
        }
    }
}

impl BuckConfigsViewForStarlark for ConfigsOnDiceViewForStarlark<'_, '_> {
    fn read_current_cell_config(
        &self,
        section: &str,
        key: &str,
    ) -> anyhow::Result<Option<Arc<str>>> {
        LegacyBuckConfigView::get(&self.buckconfig, section, key)
    }

    fn read_root_cell_config(&self, section: &str, key: &str) -> anyhow::Result<Option<Arc<str>>> {
        LegacyBuckConfigView::get(&self.root_buckconfig, section, key)
    }
}

pub struct LegacyConfigsViewForStarlark {
    current_cell_config: LegacyBuckConfig,
    root_cell_config: LegacyBuckConfig,
}

impl LegacyConfigsViewForStarlark {
    pub(crate) fn new(buckconfig: LegacyBuckConfig, root_buckconfig: LegacyBuckConfig) -> Self {
        Self {
            current_cell_config: buckconfig,
            root_cell_config: root_buckconfig,
        }
    }
}

impl BuckConfigsViewForStarlark for LegacyConfigsViewForStarlark {
    fn read_current_cell_config(
        &self,
        section: &str,
        key: &str,
    ) -> anyhow::Result<Option<Arc<str>>> {
        Ok(self
            .current_cell_config
            .get(section, key)
            .map(|v| v.to_owned().into()))
    }

    fn read_root_cell_config(&self, section: &str, key: &str) -> anyhow::Result<Option<Arc<str>>> {
        Ok(self
            .root_cell_config
            .get(section, key)
            .map(|v| v.to_owned().into()))
    }
}
