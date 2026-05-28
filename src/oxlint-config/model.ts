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

export type { Options }
