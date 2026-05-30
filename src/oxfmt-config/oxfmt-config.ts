import type { OxfmtConfig } from "oxfmt"

const oxfmtConfig = (): OxfmtConfig => ({
  /**
   * Wraps prose if it exceeds the print width.
   * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference.html#prosewrap
   *
   * - This improves the reading experience of markdown files in the editor.
   */
  proseWrap: "always",
  /**
   * Only add semicolons at the beginning of lines that may introduce ASI failures.
   * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference.html#semi
   *
   * - Helps keep git diff noise lower.
   * - Less to type. If you're not typing them but letting the formatter add
   *   them, then you probably don't need them.
   * - Semicolons allow for multiple statements on one line which could impact readability.
   */
  semi: false,
  /**
   * Sort import statements.
   * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference.html#sortimports
   */
  sortImports: {
    groups: [
      // Always put side effects first as it is usually required to load these
      // before anything else. Note that `sortImports.sortSideEffects` is not
      // enabled which means that side effects can be moved around in their
      // group; in case the order of side effects matters.
      ["side_effect", "side_effect_style"],
      // Same as Perfectionist defaults: https://perfectionist.dev/rules/sort-imports#groups
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
})

export { oxfmtConfig }
