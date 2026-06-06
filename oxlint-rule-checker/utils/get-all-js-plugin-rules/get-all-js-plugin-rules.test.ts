import { uniq } from 'es-toolkit/array'
import { expect, test } from 'vitest'

import type oxlintConfig from '../../../packages/oxlint/src/index.ts'

import { getAllJsPluginsRules } from './get-all-js-plugin-rules.ts'

test('should contain rules from all used JS plugins', async () => {
  const allJsPluginsRules = await getAllJsPluginsRules({
    jsPlugins: [
      'eslint-plugin-react-x',
      { name: 'perfectionist', specifier: 'eslint-plugin-perfectionist' },
    ],
  } as unknown as ReturnType<typeof oxlintConfig>)

  const allPlugins = uniq(
    allJsPluginsRules.filter((rule) => rule.includes('/')).map((rule) => rule.split('/')[0]),
  )

  expect(allPlugins).toStrictEqual(['react-x', 'perfectionist'])
})
