import { uniq } from "es-toolkit/array"
import { expect, test } from "vitest"

import type { oxlintConfig } from "../../../src/index.ts"

import { alwaysOnPlugins, getAllBuiltInRules } from "./get-all-built-in-rules.ts"

const allAvailableBuiltInRules = await getAllBuiltInRules({
  plugins: ["import", "promise"],
} as unknown as ReturnType<typeof oxlintConfig>)

test("should contain rules from all used Oxlint plugins", () => {
  const containsEslintRules = allAvailableBuiltInRules.some((rule) => !rule.includes("/"))

  expect(containsEslintRules).toBe(true)

  const onlyEslintPlugin = new Set(["eslint"])

  const allPlugins = uniq(
    allAvailableBuiltInRules.filter((rule) => rule.includes("/")).map((rule) => rule.split("/")[0]),
  )

  // The eslint rules don't use a a prefix.
  const allPluginsMinusEslint = alwaysOnPlugins.difference(onlyEslintPlugin)

  expect(allPlugins).toStrictEqual([...allPluginsMinusEslint, "import", "promise"].toSorted())
})
