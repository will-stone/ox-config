import type { DummyRule } from "oxlint"

import type { oxlintConfig } from "../../../src/index.ts"

export function getAllActiveRules(
  ourOxlintConfig: ReturnType<typeof oxlintConfig>,
): [string, DummyRule | undefined][] {
  const activeRootRules = Object.entries(ourOxlintConfig.rules)

  const activeOverridesRules = ourOxlintConfig.overrides.flatMap(({ rules }) =>
    Object.entries(rules || {}),
  )

  return [...activeRootRules, ...activeOverridesRules]
}
