import type { Ruleset } from '../../_shared/model.ts'

const tailwindRuleset = (): Ruleset => ({
  jsPlugins: [{ name: 'tailwind', specifier: 'eslint-plugin-better-tailwindcss' }],
  overrides: [],
  plugins: [],
  rules: {
    // All off for now until I can go through them...
    'tailwind/enforce-canonical-classes': 'off',
    'tailwind/enforce-consistent-class-order': 'off',
    'tailwind/enforce-consistent-important-position': 'off',
    'tailwind/enforce-consistent-line-wrapping': 'off',
    'tailwind/enforce-consistent-variable-syntax': 'off',
    'tailwind/enforce-consistent-variant-order': 'off',
    'tailwind/enforce-logical-properties': 'off',
    'tailwind/enforce-shorthand-classes': 'off',
    'tailwind/no-conflicting-classes': 'off',
    'tailwind/no-deprecated-classes': 'off',
    'tailwind/no-duplicate-classes': 'off',
    'tailwind/no-restricted-classes': 'off',
    'tailwind/no-unknown-classes': 'off',
    'tailwind/no-unnecessary-whitespace': 'off',
  },
  settings: {},
})

export default tailwindRuleset
