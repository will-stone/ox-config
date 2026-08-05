import type { OxlintConfig } from 'oxlint'

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

  /**
   * Add, remove, or otherwise reconfigure rules for specific files or groups of files.
   */
  overrides?: NonNullable<OxlintConfig['overrides']>
}

type NonNullableProps<T> = Required<{ [K in keyof T]: NonNullable<T[K]> }>

export type FullOxlintConfig = NonNullableProps<Omit<OxlintConfig, 'extends'>>

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
