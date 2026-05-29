import { expect, test } from "vitest"

import { makeComparison } from "./make-comparison.ts"

test("should show all rules as covered", () => {
  const rules = ["a", "b"]
  expect(makeComparison(rules, rules)).toBe("✅ All rules covered")
})

test("should show unknown rules present", () => {
  const activeRules = ["a", "b", "c"]
  const availableRules = ["b"]
  expect(makeComparison(activeRules, availableRules)).toBe("⁉️ Unknown rules in use:\na\nc")
})

test("should show unsupported rules available", () => {
  const activeRules = ["a"]
  const availableRules = ["a", "b", "c"]
  expect(makeComparison(activeRules, availableRules)).toBe("🆕 Unsupported rules:\nb\nc")
})

test("should show unknown rules present and unsupported rules available", () => {
  const activeRules = ["a", "c"]
  const availableRules = ["a", "b"]
  expect(makeComparison(activeRules, availableRules)).toBe(
    "⁉️ Unknown rules in use:\nc\n\n🆕 Unsupported rules:\nb",
  )
})
