import reactRuleset from '../../../packages/oxlint-ruleset-react/src/index.ts'
import tailwindRuleset from '../../../packages/oxlint-ruleset-tailwind/src/index.ts'
import oxlintConfig from '../../../packages/oxlint/src/index.ts'

export function getOurOxlintConfigWithAllPluginsOn(): ReturnType<typeof oxlintConfig> {
  return oxlintConfig({ rulesets: [reactRuleset(), tailwindRuleset()] })
}
