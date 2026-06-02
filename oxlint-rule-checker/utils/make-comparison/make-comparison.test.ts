import { expect, test } from "vitest"

import { makeComparison } from "./make-comparison.ts"

test("should show all rules as covered", () => {
  expect(
    makeComparison(
      [
        ["a", "error"],
        ["b", "error"],
      ],
      ["a", "b"],
      [],
    ),
  ).toBe("✅ All rules covered")
})

test("should show unknown rules present", () => {
  expect(
    makeComparison(
      [
        ["a", "error"],
        ["b", "error"],
        ["c", "error"],
      ],
      ["b"],
      [],
    ),
  ).toBe("⁉️ Unknown rules in use:\na\nc")
})

test("should show unsupported rules available", () => {
  expect(makeComparison([["a", "error"]], ["a", "b", "c"], [])).toBe("🆕 Unsupported rules:\nb\nc")
})

test("should show unknown rules present and unsupported rules available", () => {
  expect(
    makeComparison(
      [
        ["a", "error"],
        ["c", "error"],
      ],
      ["a", "b"],
      [],
    ),
  ).toBe("⁉️ Unknown rules in use:\nc\n\n🆕 Unsupported rules:\nb")
})
