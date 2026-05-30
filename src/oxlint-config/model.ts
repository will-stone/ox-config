import type { OxlintConfig, OxlintOverride } from "oxlint"

export type Options = {
  // Enable or tweak plugins.
  react?: boolean
  tailwindcss?: boolean | { config?: string }
  vitest?: boolean

  // Add custom rules:
  jsPlugins?: NonNullable<OxlintConfig["jsPlugins"]>
  overrides?: OxlintOverride[]
}

export const defaultOptions = {}

export const defaultPlugins = {
  react: false,
  tailwindcss: false,
  vitest: false,
}

export const defaultOptionsAll: Required<Options> = {
  ...defaultPlugins,
  jsPlugins: [],
  overrides: [],
}
