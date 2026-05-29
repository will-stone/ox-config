import type { DummyRule, ExternalPluginEntry } from "oxlint"

import type { Options } from "./model.ts"

type Config = {
  jsPlugins: ExternalPluginEntry[]
  rules: Record<string, DummyRule>
  settings: Record<string, unknown>
}

function configTailwindcss(options: Options): Config {
  if (!options.tailwindcss) return { jsPlugins: [], rules: {}, settings: {} }

  const settings = options.tailwindcss === true ? {} : options.tailwindcss

  return {
    jsPlugins: ["eslint-plugin-better-tailwindcss"],
    rules: {
      // Only supports Tailwind v4.
      "better-tailwindcss/enforce-canonical-classes": "off",
      "better-tailwindcss/enforce-consistent-class-order": "error",
      "better-tailwindcss/enforce-consistent-important-position": "error",
      // We don't currently line wrap as it adds template literals everywhere.
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "better-tailwindcss/enforce-consistent-variable-syntax": "error",
      // Only supports Tailwind v4.
      "better-tailwindcss/enforce-consistent-variant-order": "off",
      // This is for supporting RTL languages.
      "better-tailwindcss/enforce-logical-properties": "off",
      "better-tailwindcss/enforce-shorthand-classes": "error",
      // Only supports Tailwind v4.
      "better-tailwindcss/no-conflicting-classes": "off",
      // Only supports Tailwind v4.
      "better-tailwindcss/no-deprecated-classes": "off",
      "better-tailwindcss/no-duplicate-classes": "error",
      "better-tailwindcss/no-restricted-classes": [
        "error",
        {
          restrict: [
            {
              message: "No arbitrary values: $1",
              // Matches arbitrary values except those using --css-variables, calc, or data
              // selectors as these are usually dynamic values.
              pattern: "(\\[(?!--)(?!calc)(?!data-)([^\\[\\]]*?)\\](?!:))",
            },
            { message: "No child variants", pattern: "^\\*+:.*" },
            { message: "No important modifier", pattern: "^.*!$" },
          ],
        },
      ],
      "better-tailwindcss/no-unknown-classes": "error",
      "better-tailwindcss/no-unnecessary-whitespace": "error",
    },
    settings: {
      "better-tailwindcss": {
        cwd: settings.cwd,
      },
    },
  }
}

export { configTailwindcss }
