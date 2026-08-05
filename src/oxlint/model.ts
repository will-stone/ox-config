import type { OxlintConfig as OriginalOxlintConfig } from 'oxlint'

export type Options = {
  react?: boolean
  tailwind?:
    | {
        /**
         * Path to the Tailwind CSS configuration file (v3).
         */
        config: string
      }
    | {
        /**
         * Path to the Tailwind CSS stylesheet (v4).
         */
        stylesheet: string
      }
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
