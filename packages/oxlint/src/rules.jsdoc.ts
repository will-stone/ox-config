import type { DummyRule } from 'oxlint'

export const rulesJsdoc: Record<string, DummyRule> = {
  'jsdoc/check-access': 'off',
  'jsdoc/check-property-names': 'off',
  'jsdoc/check-tag-names': ['error', { definedTags: ['jest-environment'], typed: false }],
  'jsdoc/empty-tags': 'error',
  'jsdoc/implements-on-classes': 'off',
  'jsdoc/no-defaults': 'error',
  // TODO Should we be documenting everything?
  'jsdoc/require-param': 'off',
  'jsdoc/require-param-description': 'error',
  'jsdoc/require-param-name': 'error',
  'jsdoc/require-param-type': 'off',
  'jsdoc/require-property': 'off',
  'jsdoc/require-property-description': 'off',
  'jsdoc/require-property-name': 'off',
  'jsdoc/require-property-type': 'off',
  'jsdoc/require-returns': 'off',
  'jsdoc/require-returns-description': 'error',
  'jsdoc/require-returns-type': 'off',
  'jsdoc/require-throws-description': 'error',
  'jsdoc/require-throws-type': 'off',
  'jsdoc/require-yields': 'error',
  'jsdoc/require-yields-description': 'error',
  'jsdoc/require-yields-type': 'error',
}
