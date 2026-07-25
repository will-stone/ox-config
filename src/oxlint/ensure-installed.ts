import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export function ensureInstalled<PkgName extends string>(pkg: PkgName): PkgName {
  try {
    require.resolve(pkg)
    return pkg
  } catch (error) {
    throw new Error(`${pkg} not installed`, { cause: error })
  }
}
