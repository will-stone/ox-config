import type { OxlintConfig as OriginalOxlintConfig } from 'oxlint'

export type Options = {
  react?: boolean
  tailwind?: boolean
}

type NonNullableProps<T> = Required<{ [K in keyof T]: NonNullable<T[K]> }>

export type FullOxlintConfig = NonNullableProps<Omit<OriginalOxlintConfig, 'extends'>>

export const emptyOxlintConfig: FullOxlintConfig = {
  categories: {},
  env: {},
  globals: {},
  ignorePatterns: [],
  jsPlugins: [],
  options: {},
  overrides: [],
  plugins: [],
  rules: {},
  settings: {},
}
