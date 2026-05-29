import type { OxlintConfig, OxlintOverride } from "oxlint"

type Options = {
  // Enable or tweak plugins.
  react?: boolean
  tailwindcss?: boolean | { cwd?: string }
  vitest?: boolean

  // Add custom rules:
  jsPlugins?: NonNullable<OxlintConfig["jsPlugins"]>
  overrides?: OxlintOverride[]
}

const defaultOptions = {}

const defaultPlugins = {
  react: false,
  tailwindcss: false,
  vitest: false,
}

const defaultOptionsAll: Required<Options> = {
  ...defaultPlugins,
  jsPlugins: [],
  overrides: [],
}

export type { Options }
export { defaultOptions, defaultOptionsAll, defaultPlugins }
