import reactPlugin from '../../../packages/oxlint-plugin-react/src/index.ts'
import oxlintConfig from '../../../packages/oxlint/src/index.ts'

export function getOurOxlintConfigWithAllPluginsOn(): ReturnType<typeof oxlintConfig> {
  return oxlintConfig({ plugins: [reactPlugin()] })
}
