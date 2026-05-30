import type { OxlintConfig, OxlintOverride } from "oxlint"

import type { Options } from "./model.ts"

type Config = {
  overrides: OxlintOverride[]
  plugins: NonNullable<OxlintConfig["plugins"]>
}

export function configVitest(options: Options): Config {
  if (!options.vitest) return { overrides: [], plugins: [] }

  return {
    overrides: [
      {
        // @ts-expect-error -- this is here but undocumented: https://github.com/oxc-project/oxc/issues/15932#issuecomment-4471925336
        excludeFiles: ["**/*.jest.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}"],
        files: ["**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}"],
        rules: {
          // We often spy-on and test the output of console.
          "no-console": "off",
          // Use either each or for.
          "vitest/consistent-each-for": "off",
          "vitest/consistent-test-filename": "error",
          "vitest/consistent-test-it": "error",
          "vitest/consistent-vitest-vi": "error",
          // Slowest rule by far (according to oxlint --debug=timings).
          // Most people know a test must expect something.
          "vitest/expect-expect": "off",
          "vitest/hoisted-apis-on-top": "error",
          // Expect as much as you like. Is there any benefit to limiting this?
          "vitest/max-expects": "off",
          "vitest/max-nested-describe": "error",
          "vitest/no-alias-methods": "error",
          "vitest/no-commented-out-tests": "error",
          "vitest/no-conditional-expect": "error",
          "vitest/no-conditional-in-test": "error",
          "vitest/no-conditional-tests": "error",
          "vitest/no-disabled-tests": "error",
          "vitest/no-duplicate-hooks": "error",
          "vitest/no-focused-tests": "error",
          // The lifecycle hooks, like `beforeEach`, can be useful. We could move
          // to setup and teardown functions, but this style would need to be
          // discussed by the team first.
          "vitest/no-hooks": "off",
          "vitest/no-identical-title": "error",
          "vitest/no-import-node-test": "error",
          "vitest/no-importing-vitest-globals": "off",
          "vitest/no-interpolation-in-snapshots": "error",
          "vitest/no-large-snapshots": "error",
          "vitest/no-mocks-import": "error",
          "vitest/no-restricted-matchers": "off",
          "vitest/no-restricted-vi-methods": "off",
          "vitest/no-standalone-expect": [
            "error",
            { additionalTestBlockFunctions: ["test.extend"] },
          ],
          "vitest/no-test-prefixes": "error",
          "vitest/no-test-return-statement": "error",
          "vitest/no-unneeded-async-expect-function": "error",
          "vitest/padding-around-after-all-blocks": "error",
          "vitest/prefer-called-exactly-once-with": "error",
          "vitest/prefer-called-once": "error",
          "vitest/prefer-called-times": "off",
          "vitest/prefer-called-with": "off",
          "vitest/prefer-comparison-matcher": "error",
          "vitest/prefer-describe-function-title": "error",
          "vitest/prefer-each": "error",
          "vitest/prefer-equality-matcher": "error",
          // Every test must have an expect, this is covered by expect-expect
          // rule. Knowing how many assertions isn't particularly useful.
          "vitest/prefer-expect-assertions": "off",
          "vitest/prefer-expect-resolves": "error",
          "vitest/prefer-expect-type-of": "error",
          "vitest/prefer-hooks-in-order": "error",
          "vitest/prefer-hooks-on-top": "error",
          "vitest/prefer-import-in-mock": "error",
          "vitest/prefer-importing-vitest-globals": "error",
          "vitest/prefer-lowercase-title": "error",
          "vitest/prefer-mock-promise-shorthand": "error",
          "vitest/prefer-mock-return-shorthand": "error",
          "vitest/prefer-snapshot-hint": "error",
          "vitest/prefer-spy-on": "error",
          "vitest/prefer-strict-boolean-matchers": "error",
          "vitest/prefer-strict-equal": "error",
          "vitest/prefer-to-be": "error",
          // This could be dangerous as you may actually want to ensure that
          // something is exactly `false`, and not something that equates to that
          // if run through Boolean().
          "vitest/prefer-to-be-falsy": "off",
          "vitest/prefer-to-be-object": "error",
          // This could be dangerous as you may actually want to ensure that
          // something is exactly `true`, and not something that equates to that
          // if run through Boolean().
          "vitest/prefer-to-be-truthy": "off",
          "vitest/prefer-to-contain": "error",
          "vitest/prefer-to-have-been-called-times": "error",
          "vitest/prefer-to-have-length": "error",
          "vitest/prefer-todo": "error",
          "vitest/require-awaited-expect-poll": "error",
          "vitest/require-hook": "error",
          "vitest/require-local-test-context-for-concurrent-snapshots": "error",
          // Typing mocked functions isn't always necessary and can add testing
          // overhead. Let's turn this on if we see fit.
          "vitest/require-mock-type-parameters": "off",
          "vitest/require-test-timeout": "off",
          "vitest/require-to-throw-message": "error",
          // No need to nest everything in useless describe blocks.
          "vitest/require-top-level-describe": "off",
          "vitest/valid-describe-callback": "error",
          "vitest/valid-expect": "error",
          "vitest/valid-expect-in-promise": "error",
          "vitest/valid-title": ["error", { ignoreTypeOfDescribeName: true }],
          "vitest/warn-todo": "off",
        },
      },
    ],
    plugins: ["vitest"],
  }
}
