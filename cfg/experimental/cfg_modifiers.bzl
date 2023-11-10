# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

load(":common.bzl", "get_tagged_modifier")
load(":set_cfg_constructor.bzl", "MODIFIER_METADATA_KEY")
load(
    ":types.bzl",
    "Modifier",  # @unused This is used in type annotation
    "ModifierTargetLocation",
    "TaggedModifier",  # @unused This is used in type annotation
)

def cfg_modifiers(modifiers: dict[str, Modifier]) -> dict[str, dict[str, TaggedModifier]]:
    tagged_modifiers = {}
    for constraint_setting, modifier in modifiers.items():
        tagged_modifiers[constraint_setting] = get_tagged_modifier(constraint_setting, modifier, ModifierTargetLocation())
    return {MODIFIER_METADATA_KEY: tagged_modifiers}