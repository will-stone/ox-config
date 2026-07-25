import { expect, test, vi } from 'vitest'

import * as OxlintConfig from '../../../src/oxlint/oxlint.ts'
import { getOurOxlintConfigWithAllPluginsOn } from './get-our-oxlint-config-with-all-rulesets.ts'

test('should turn on all plugins', () => {
  const oxlintConfigSpy = vi
    .spyOn(OxlintConfig, 'oxlintConfig')
    .mockReturnValue(null as unknown as ReturnType<typeof OxlintConfig.oxlintConfig>)

  getOurOxlintConfigWithAllPluginsOn()

  expect(oxlintConfigSpy).toHaveBeenCalledWith({
    react: true,
    tailwind: true,
  })
})
