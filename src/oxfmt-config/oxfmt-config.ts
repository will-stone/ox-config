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
})

export { oxfmtConfig }
