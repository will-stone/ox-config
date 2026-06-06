import type { DummyRule } from 'oxlint'

export const rulesPromise: Record<string, DummyRule> = {
  'promise/always-return': 'error',
  'promise/avoid-new': 'error',
  'promise/catch-or-return': 'error',
  'promise/no-callback-in-promise': 'error',
  'promise/no-multiple-resolved': 'error',
  'promise/no-nesting': 'error',
  'promise/no-new-statics': 'warn',
  'promise/no-promise-in-callback': 'error',
  'promise/no-return-in-finally': 'error',
  'promise/no-return-wrap': 'error',
  'promise/param-names': 'error',
  'promise/prefer-await-to-callbacks': 'error',
  'promise/prefer-await-to-then': 'error',
  'promise/prefer-catch': 'error',
  'promise/spec-only': 'error',
  'promise/valid-params': 'error',
}
