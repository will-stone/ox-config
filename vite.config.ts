import { defineConfig } from "vite-plus"

export default defineConfig({
  // Can't use local configs here yet as VP tries to use it's own binaries over
  // the installed versions of oxfmt and oxlint. Can't use vite-plus/lint|fmt
  // because they don't use the latest versions so end up missing out on rules.
  // See: https://github.com/voidzero-dev/vite-plus/issues/1482
  // fmt: oxfmtConfig(),
  // lint: oxlintConfig(),
  pack: {
    dts: {
      tsgo: true,
    },
    exports: true,
  },
  staged: {
    "*": "oxfmt --write --no-error-on-unmatched-pattern",
    "*.{js,jsx,ts,tsx,cjs,mjs}": "oxlint --fix",
  },
})
