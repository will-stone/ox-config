import type { OxlintConfig } from 'oxlint'

import type { FullOxlintConfig, Options } from './model.ts'

import { baseConfig } from './config.base.ts'
import { importConfig } from './config.import.ts'
import { jsdocConfig } from './config.jsdoc.ts'
import { nodeConfig } from './config.node.ts'
import { oxcConfig } from './config.oxc.ts'
import { perfectionistConfig } from './config.perfectionist.ts'
import { promiseConfig } from './config.promise.ts'
import { reactConfig } from './config.react.ts'
import { tailwindConfig } from './config.tailwind.ts'
import { typescriptConfig } from './config.typescript.ts'
import { unicornConfig } from './config.unicorn.ts'
import { vitestConfig } from './config.vitest.ts'

const configs = [
  baseConfig,
  importConfig,
  jsdocConfig,
  nodeConfig,
  oxcConfig,
  perfectionistConfig,
  promiseConfig,
  typescriptConfig,
  vitestConfig,
  unicornConfig,

  reactConfig,
  tailwindConfig,
]

export function oxlintConfig(options?: Options): OxlintConfig {
  const categories: FullOxlintConfig['categories'] = {}
  const env: FullOxlintConfig['env'] = {}
  const jsPlugins: FullOxlintConfig['jsPlugins'] = []
  const overrides: FullOxlintConfig['overrides'] = []
  const plugins: FullOxlintConfig['plugins'] = []
  const rules: FullOxlintConfig['rules'] = {}
  const settings: FullOxlintConfig['settings'] = {}

  for (const configFn of configs) {
    const config = configFn(options)
    Object.assign(categories, config.categories)
    Object.assign(env, config.env)
    jsPlugins.push(...config.jsPlugins)
    overrides.push(...config.overrides)
    plugins.push(...config.plugins)
    Object.assign(rules, config.rules)
    Object.assign(settings, config.settings)
  }

  return {
    categories,
    env,
    globals: {},
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
    overrides: [...overrides, ...(options?.overrides || [])],
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
    rules,
    settings,
  }
}
