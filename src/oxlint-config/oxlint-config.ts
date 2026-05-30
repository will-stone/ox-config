import type { OxlintConfig } from "oxlint"

import { mapValues } from "es-toolkit/object"
import globals from "globals"

import { configPerfectionist } from "./config.perfectionist.ts"
import { configReact } from "./config.react.ts"
import { configTailwindcss } from "./config.tailwindcss.ts"
import { configVitest } from "./config.vitest.ts"
import { defaultOptions, defaultOptionsAll } from "./model.ts"
import { rulesEslint } from "./rules.eslint.ts"
import { rulesImport } from "./rules.import.ts"
import { rulesJsdoc } from "./rules.jsdoc.ts"
import { rulesNode } from "./rules.node.ts"
import { rulesOxc } from "./rules.oxc.ts"
import { rulesPromise } from "./rules.promise.ts"
import { rulesTypescript } from "./rules.typescript.ts"
import { rulesUnicorn } from "./rules.unicorn.ts"

// oxlint-disable-next-line typescript/explicit-module-boundary-types -- If this is typed as returning OxlintConfig then consumers believe all keys are optional whereas by not typing it then consumers know, for example, that "jsPlugins" is always available. As we're returning the `defineConfig` from Oxlint, the type is guaranteed to be correct. What we need is "satisfies for return types": https://github.com/microsoft/TypeScript/issues/59577
export function oxlintConfig(options = defaultOptions) {
  const parsedOptions = { ...defaultOptionsAll, ...options }

  const perfectionist = configPerfectionist(parsedOptions)
  const react = configReact(parsedOptions)
  const tailwindcss = configTailwindcss(parsedOptions)
  const vitest = configVitest(parsedOptions)

  return {
    categories: {
      // Oxlint groups rules by category but we set all rules explicitly.
      // However the "correctness" category is on by default. As a minor release
      // could introduce new correctness rules, this category needs to be turned off.
      correctness: "off",
    },
    env: {
      browser: true,
      builtin: true,
      es2026: true,
      node: true,
    },
    globals: {
      ...mapValues(globals.browser, (v) => (v ? "writable" : "readonly")),
      ...mapValues(globals.es2019, (v) => (v ? "writable" : "readonly")),
      ...mapValues(globals.node, (v) => (v ? "writable" : "readonly")),
    },
    ignorePatterns: [
      "**/node_modules",
      "**/dist",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",
      "**/bun.lockb",
      "**/output",
      "**/coverage",
      "**/temp",
      "**/.vitepress/cache",
      "**/.nuxt",
      "**/.next",
      "**/.vercel",
      "**/.changeset",
      "**/.idea",
      "**/.cache",
      "**/.output",
      "**/.vite-inspect",
      "**/CHANGELOG*.md",
      "**/*.min.*",
      "**/LICENSE*",
      "**/__snapshots__",
      "**/auto-import?(s).d.ts",
      "**/components.d.ts",
      "**/mockServiceWorker.js",
      "**/dist/",
      "**/.DS_Store",
      "**/.vscode",
      "**/.swc",
      "**/tsconfig.vitest-temp.json",
      "dependency-check-report.html",
    ],
    jsPlugins: [
      ...perfectionist.jsPlugins,
      ...react.jsPlugins,
      ...tailwindcss.jsPlugins,
      ...parsedOptions.jsPlugins,
    ],
    options: {
      reportUnusedDisableDirectives: "error",
      respectEslintDisableDirectives: true,
      typeAware: true,
      typeCheck: true,
    },
    overrides: [...react.overrides, ...vitest.overrides, ...parsedOptions.overrides],
    plugins: [
      "eslint",
      "import",
      "jsdoc",
      "node",
      "oxc",
      "promise",
      "typescript",
      "unicorn",
      ...react.plugins,
      ...vitest.plugins,
    ],
    rules: {
      ...rulesEslint,
      ...rulesImport,
      ...rulesJsdoc,
      ...rulesNode,
      ...rulesOxc,
      ...perfectionist.rules,
      ...rulesPromise,
      ...react.rules,
      ...tailwindcss.rules,
      ...rulesTypescript,
      ...rulesUnicorn,
    },
    settings: {
      ...tailwindcss.settings,
    },
  } satisfies OxlintConfig
}
