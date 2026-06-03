import type { OxlintOverride } from "oxlint"

export const vitestOverrides: OxlintOverride = {
  files: ["**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}"],
  rules: {
    // We often spy-on and test the output of console.
    "no-console": "off",
    // Use either each or for.
    "vitest/consistent-each-for": "off",
    "vitest/consistent-test-filename": "error",
    "vitest/consistent-test-it": "warn",
    "vitest/consistent-vitest-vi": "warn",
    // Slowest rule by far (according to oxlint --debug=timings).
    // Most people know a test must expect something.
    "vitest/expect-expect": "off",
    "vitest/hoisted-apis-on-top": "error",
    // Expect as much as you like. Is there any benefit to limiting this?
    "vitest/max-expects": "off",
    "vitest/max-nested-describe": "error",
    "vitest/no-alias-methods": "warn",
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
    "vitest/no-standalone-expect": ["error", { additionalTestBlockFunctions: ["test.extend"] }],
    "vitest/no-test-prefixes": "warn",
    "vitest/no-test-return-statement": "error",
    "vitest/no-unneeded-async-expect-function": "warn",
    "vitest/padding-around-after-all-blocks": "warn",
    "vitest/prefer-called-exactly-once-with": "error",
    "vitest/prefer-called-once": "warn",
    "vitest/prefer-called-times": "off",
    "vitest/prefer-called-with": "off",
    "vitest/prefer-comparison-matcher": "warn",
    "vitest/prefer-describe-function-title": "warn",
    "vitest/prefer-each": "error",
    "vitest/prefer-equality-matcher": "error",
    // Every test must have an expect, this is covered by expect-expect
    // rule. Knowing how many assertions isn't particularly useful.
    "vitest/prefer-expect-assertions": "off",
    "vitest/prefer-expect-resolves": "warn",
    "vitest/prefer-expect-type-of": "warn",
    "vitest/prefer-hooks-in-order": "error",
    "vitest/prefer-hooks-on-top": "error",
    "vitest/prefer-import-in-mock": "warn",
    "vitest/prefer-importing-vitest-globals": "warn",
    "vitest/prefer-lowercase-title": "warn",
    "vitest/prefer-mock-promise-shorthand": "error",
    "vitest/prefer-mock-return-shorthand": "warn",
    "vitest/prefer-snapshot-hint": "error",
    "vitest/prefer-spy-on": "error",
    "vitest/prefer-strict-boolean-matchers": "warn",
    "vitest/prefer-strict-equal": "warn",
    "vitest/prefer-to-be": "warn",
    // This could be dangerous as you may actually want to ensure that
    // something is exactly `false`, and not something that equates to that
    // if run through Boolean().
    "vitest/prefer-to-be-falsy": "off",
    "vitest/prefer-to-be-object": "warn",
    // This could be dangerous as you may actually want to ensure that
    // something is exactly `true`, and not something that equates to that
    // if run through Boolean().
    "vitest/prefer-to-be-truthy": "off",
    "vitest/prefer-to-contain": "warn",
    "vitest/prefer-to-have-been-called-times": "warn",
    "vitest/prefer-to-have-length": "warn",
    "vitest/prefer-todo": "warn",
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
}
