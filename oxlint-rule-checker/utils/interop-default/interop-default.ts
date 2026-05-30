type Awaitable<T> = T | Promise<T>

/**
 * Dynamic import of an ESM default export is available on a key called
 * "default". Whereas dynamic import of a CJS default exports is returned
 * directly. Therefore this component is needed to standardise between the two,
 * always returning the default directly, as this is always the required part
 * in an ESLint plugin.
 *
 * @param module - A dynamic import.
 * @example
 *
 * // Without this utility:
 *
 * // export default foo
 * const { default } = await import('module-name')
 * // module.exports = foo
 * const foo = await import('module-name')
 *
 * // With this utility:
 *
 * // export default foo
 * const foo = await interopDefault(import('module-name'))
 * // module.exports = foo
 * const foo = await interopDefault(import('module-name'))
 */
export async function interopDefault<T>(
  module: Awaitable<T>,
): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await module

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (resolved as any).default || resolved
}
