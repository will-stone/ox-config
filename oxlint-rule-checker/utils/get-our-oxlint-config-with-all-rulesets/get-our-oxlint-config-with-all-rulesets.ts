import { oxlintConfig } from '../../../src/index.ts'

export function getOurOxlintConfigWithAllPluginsOn(): ReturnType<typeof oxlintConfig> {
  return oxlintConfig({ react: true, tailwind: true })
}
