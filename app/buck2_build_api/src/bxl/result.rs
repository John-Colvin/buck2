/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::fmt::Display;

use allocative::Allocative;
use buck2_artifact::deferred::id::DeferredId;
use buck2_core::fs::buck_out_path::BuckOutPath;
use indexmap::IndexSet;

use crate::artifact_groups::ArtifactGroup;
use crate::bxl::build_result::BxlBuildResult;
use crate::deferred::types::DeferredLookup;
use crate::deferred::types::DeferredTable;

/// The result of evaluating a bxl function
#[derive(Allocative)]
pub enum BxlResult {
    /// represents that the bxl function has no built results
    None {
        output_loc: BuckOutPath,
        error_loc: BuckOutPath,
    },
    /// a bxl that deals with builds
    BuildsArtifacts {
        output_loc: BuckOutPath,
        error_loc: BuckOutPath,
        built: Vec<BxlBuildResult>,
        artifacts: Vec<ArtifactGroup>,
        deferred: DeferredTable,
    },
}

impl BxlResult {
    pub fn new(
        output_loc: BuckOutPath,
        error_loc: BuckOutPath,
        ensured_artifacts: IndexSet<ArtifactGroup>,
        deferred: DeferredTable,
    ) -> Self {
        if ensured_artifacts.is_empty() {
            Self::None {
                output_loc,
                error_loc,
            }
        } else {
            Self::BuildsArtifacts {
                output_loc,
                error_loc,
                built: vec![],
                artifacts: ensured_artifacts.into_iter().collect(),
                deferred,
            }
        }
    }

    /// looks up an 'Deferred' given the id
    pub fn lookup_deferred(&self, id: DeferredId) -> anyhow::Result<DeferredLookup<'_>> {
        match self {
            BxlResult::None { .. } => Err(anyhow::anyhow!("Bxl never attempted to build anything")),
            BxlResult::BuildsArtifacts { deferred, .. } => deferred.lookup_deferred(id),
        }
    }

    pub fn get_output_loc(&self) -> &BuckOutPath {
        match self {
            BxlResult::None { output_loc, .. } => output_loc,
            BxlResult::BuildsArtifacts { output_loc, .. } => output_loc,
        }
    }

    pub fn get_error_loc(&self) -> &BuckOutPath {
        match self {
            BxlResult::None { error_loc, .. } => error_loc,
            BxlResult::BuildsArtifacts { error_loc, .. } => error_loc,
        }
    }

    pub fn get_artifacts_opt(&self) -> Option<&Vec<ArtifactGroup>> {
        match self {
            BxlResult::None { .. } => None,
            BxlResult::BuildsArtifacts { artifacts, .. } => Some(artifacts),
        }
    }

    pub fn get_build_result_opt(&self) -> Option<&Vec<BxlBuildResult>> {
        match self {
            BxlResult::None { .. } => None,
            BxlResult::BuildsArtifacts { built, .. } => Some(built),
        }
    }

    pub fn add_build_results(&mut self, results: Vec<BxlBuildResult>) {
        match self {
            BxlResult::None { .. } => (),
            BxlResult::BuildsArtifacts { ref mut built, .. } => {
                built.extend(results);
            }
        }
    }
}

impl Display for BxlResult {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            BxlResult::None { .. } => write!(f, "BxlResult::None"),
            BxlResult::BuildsArtifacts { built, .. } => {
                write!(f, "BxlResult::Builds Artifacts {}", built.len())
            }
        }
    }
}
