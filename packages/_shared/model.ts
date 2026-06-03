import type { DummyRule, ExternalPluginEntry, OxlintConfig, OxlintOverride } from "oxlint"

export type Plugin = {
  jsPlugins: ExternalPluginEntry[]
  overrides: OxlintOverride[]
  plugins: NonNullable<OxlintConfig["plugins"]>
  rules: Record<string, DummyRule>
  settings: Record<string, unknown>
}

export type Options = {
  plugins: Plugin[]
}
