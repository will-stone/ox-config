import type { FullOxlintConfig } from './model.ts'

import { emptyOxlintConfig } from './model.ts'

export const nodeConfig = (): FullOxlintConfig => {
  return {
    ...emptyOxlintConfig,
    rules: {
      'node/callback-return': 'error',
      'node/global-require': 'error',
      'node/handle-callback-err': 'error',
      'node/no-exports-assign': 'warn',
      'node/no-mixed-requires': 'error',
      'node/no-new-require': 'error',
      'node/no-path-concat': 'error',
      'node/no-process-env': 'off',
      'node/no-sync': 'off',
      'node/no-top-level-await': 'off',
    },
  }
}
