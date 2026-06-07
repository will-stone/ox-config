import { expect, test, vi } from 'vitest'

import reactRuleset from '../../../packages/oxlint-ruleset-react/src/index.ts'
import tailwindRuleset from '../../../packages/oxlint-ruleset-tailwind/src/index.ts'
import * as OxlintConfig from '../../../packages/oxlint/src/index.ts'
import { getOurOxlintConfigWithAllPluginsOn } from './get-our-oxlint-config-with-all-rulesets.ts'

test('should turn on all plugins', () => {
  const oxlintConfigSpy = vi
    .spyOn(OxlintConfig, 'default')
    .mockReturnValue(null as unknown as ReturnType<typeof OxlintConfig.default>)

  getOurOxlintConfigWithAllPluginsOn()

  expect(oxlintConfigSpy).toHaveBeenCalledWith({
    rulesets: [reactRuleset(), tailwindRuleset()],
  })
})
