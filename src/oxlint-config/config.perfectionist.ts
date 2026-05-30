import type { DummyRule, ExternalPluginEntry } from "oxlint"

import type { Options } from "./model.ts"

const sortOrder = [
  // Tailwind t-shirt size object.
  {
    customGroups: [
      { elementNamePattern: "^xs$", groupName: "xs" },
      // "default" is our name for the default breakpoint which, because we
      // design mobile first, is the same as what UX refer to as "sm" or "mobile".
      { elementNamePattern: "^default$", groupName: "default" },
      { elementNamePattern: "^sm$", groupName: "sm" },
      { elementNamePattern: "^md$", groupName: "md" },
      { elementNamePattern: "^lg$", groupName: "lg" },
      { elementNamePattern: "^xl$", groupName: "xl" },
      { elementNamePattern: "^2xl$", groupName: "2xl" },
      { elementNamePattern: "^xxl$", groupName: "xxl" },
      { elementNamePattern: "^3xl$", groupName: "3xl" },
      { elementNamePattern: "^xxxl$", groupName: "xxxl" },
    ],
    groups: ["xs", "default", "sm", "md", "lg", "xl", "2xl", "xxl", "3xl", "xxxl"],
    useConfigurationIf: {
      allNamesMatchPattern: "^xs|default|sm|md|lg|xl|2xl|xxl|3xl|xxxl$",
    },
  },
  // Flux standard actions.
  {
    customGroups: [
      { elementNamePattern: "^type$", groupName: "type" },
      { elementNamePattern: "^payload$", groupName: "payload" },
      { elementNamePattern: "^error$", groupName: "error" },
      { elementNamePattern: "^meta$", groupName: "meta" },
    ],
    groups: ["type", "payload", "error", "meta"],
    useConfigurationIf: {
      allNamesMatchPattern: "^type|payload|meta|error$",
    },
  },
  // Fallback for everything else.
  {
    partitionByNewLine: true,
    type: "natural",
  },
] as const

type Config = {
  jsPlugins: ExternalPluginEntry[]
  rules: Record<string, DummyRule>
}

export function configPerfectionist(_options: Options): Config {
  return {
    jsPlugins: ["eslint-plugin-perfectionist"],
    rules: {
      "perfectionist/sort-array-includes": "off",
      // Useless rule as it must be configured to run on certain conditions;
      // we don't currently have any arrays we'd like sorted.
      "perfectionist/sort-arrays": "off",
      "perfectionist/sort-classes": "off",
      "perfectionist/sort-decorators": "off",
      "perfectionist/sort-enums": "off",
      "perfectionist/sort-export-attributes": ["error", { type: "natural" }],
      "perfectionist/sort-exports": ["error", { type: "natural" }],
      "perfectionist/sort-heritage-clauses": "off",
      "perfectionist/sort-import-attributes": ["error", { type: "natural" }],
      // This is covered by oxfmt.sortImports
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-interfaces": "off",
      "perfectionist/sort-intersection-types": "off",
      "perfectionist/sort-jsx-props": "off",
      "perfectionist/sort-maps": "off",
      "perfectionist/sort-modules": "off",
      "perfectionist/sort-named-exports": ["error", { type: "natural" }],
      "perfectionist/sort-named-imports": ["error", { type: "natural" }],
      "perfectionist/sort-object-types": ["error", ...sortOrder],
      "perfectionist/sort-objects": ["error", ...sortOrder],
      "perfectionist/sort-sets": "off",
      "perfectionist/sort-switch-case": "off",
      "perfectionist/sort-union-types": "off",
      "perfectionist/sort-variable-declarations": "off",
    },
  }
}
