import type { oxlintConfig } from "../../../src/index.ts"

function getAllActiveRules(ourOxlintConfig: ReturnType<typeof oxlintConfig>): string[] {
  const activeRootRules = Object.keys(ourOxlintConfig.rules)

  const activeOverridesRules = ourOxlintConfig.overrides.flatMap(({ rules }) =>
    Object.keys(rules || {}),
  )

  return [...activeRootRules, ...activeOverridesRules]
}

export { getAllActiveRules }
