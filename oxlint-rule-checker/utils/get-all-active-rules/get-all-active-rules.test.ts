import { expect, test } from "vitest"

import type * as OxlintConfig from "../../../packages/oxlint/src/index.ts"

import { getAllActiveRules } from "./get-all-active-rules.ts"

test("should return all root and overrides rules", () => {
  expect(
    getAllActiveRules({
      overrides: [
        {
          rules: { "override-rule": "error" },
        },
      ],
      rules: { "root-rule": "off" },
    } as unknown as ReturnType<typeof OxlintConfig.oxlintConfig>),
  ).toStrictEqual([
    ["root-rule", "off"],
    ["override-rule", "error"],
  ])
})
