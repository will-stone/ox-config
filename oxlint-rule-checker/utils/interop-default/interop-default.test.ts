import { expect, expectTypeOf, test } from "vitest"

import { interopDefault } from "./interop-default.js"

test("should return default", async () => {
  const module_ = {
    default: () => null,
    x: 123,
  }

  const interop = await interopDefault(module_)

  expectTypeOf(interop).toBeFunction()
  expect(interop).toBe(module_.default)
  // @ts-expect-error -- this utility is not concerned with named exports.
  expect(interop.x).toBeUndefined()
})

test("should return export", async () => {
  const module_ = () => null

  const interop = await interopDefault(module_)

  expectTypeOf(interop).toBeFunction()
  expect(interop).toBe(module_)
  // @ts-expect-error -- this utility is not concerned with named exports.
  expect(interop.x).toBeUndefined()
})
