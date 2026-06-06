import type { DummyRule, ExternalPluginEntry, OxlintConfig, OxlintOverride } from 'oxlint'

import { mapValues } from 'es-toolkit/object'
import globals from 'globals'
import { defineConfig } from 'oxlint'

import type { Ruleset } from '../../_shared/model.ts'

import { vitestOverrides } from './overrides.vitest.ts'
import { rulesEslint } from './rules.eslint.ts'
import { rulesImport } from './rules.import.ts'
import { rulesJsdoc } from './rules.jsdoc.ts'
import { rulesNode } from './rules.node.ts'
import { rulesOxc } from './rules.oxc.ts'
import { rulesPerfectionist } from './rules.perfectionist.ts'
import { rulesPromise } from './rules.promise.ts'
import { rulesTypescript } from './rules.typescript.ts'
import { rulesUnicorn } from './rules.unicorn.ts'

type Options = {
  rulesets: Ruleset[]
}

// oxlint-disable-next-line typescript/explicit-module-boundary-types -- returning defineConfig so let TS infer the return type which is narrower than OxlintConfig.
export default function oxlintConfig(options?: Options) {
  const jsPlugins: ExternalPluginEntry[] = []
  const overrides: OxlintOverride[] = []
  const plugins: NonNullable<OxlintConfig['plugins']> = []
  const rules: Record<string, DummyRule> = {}
  const settings: Record<string, unknown> = {}

  for (const ruleset of options?.rulesets || []) {
    jsPlugins.push(...ruleset.jsPlugins)
    overrides.push(...ruleset.overrides)
    plugins.push(...ruleset.plugins)
    Object.assign(rules, ruleset.rules)
    Object.assign(settings, ruleset.settings)
  }

  return defineConfig({
    categories: {
      // Oxlint groups rules by category but we set all rules explicitly.
      // However the "correctness" category is on by default. As a minor release
      // could introduce new correctness rules, this category needs to be turned off.
      correctness: 'off',
    },
    env: {
      browser: true,
      builtin: true,
      es2026: true,
      node: true,
    },
    globals: {
      ...mapValues(globals.browser, (v) => (v ? 'writable' : 'readonly')),
      ...mapValues(globals.es2019, (v) => (v ? 'writable' : 'readonly')),
      ...mapValues(globals.node, (v) => (v ? 'writable' : 'readonly')),
    },
    ignorePatterns: [
      '**/node_modules',
      '**/dist',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/bun.lockb',
      '**/output',
      '**/coverage',
      '**/temp',
      '**/.vitepress/cache',
      '**/.nuxt',
      '**/.next',
      '**/.vercel',
      '**/.changeset',
      '**/.idea',
      '**/.cache',
      '**/.output',
      '**/.vite-inspect',
      '**/CHANGELOG*.md',
      '**/*.min.*',
      '**/LICENSE*',
      '**/__snapshots__',
      '**/auto-import?(s).d.ts',
      '**/components.d.ts',
      '**/mockServiceWorker.js',
      '**/dist/',
      '**/.DS_Store',
      '**/.vscode',
      '**/.swc',
      '**/tsconfig.vitest-temp.json',
      'dependency-check-report.html',
    ],
    jsPlugins: ['eslint-plugin-perfectionist', ...jsPlugins],
    options: {
      reportUnusedDisableDirectives: 'error',
      respectEslintDisableDirectives: true,
    },
    overrides: [vitestOverrides, ...overrides],
    plugins: [
      'eslint',
      'import',
      'jsdoc',
      'node',
      'oxc',
      'promise',
      'typescript',
      'unicorn',
      'vitest',
      ...plugins,
    ],
    rules: {
      ...rulesEslint,
      ...rulesImport,
      ...rulesJsdoc,
      ...rulesNode,
      ...rulesOxc,
      ...rulesPerfectionist,
      ...rulesPromise,
      ...rulesTypescript,
      ...rulesUnicorn,
      ...rules,
    },
    settings,
  })
}
