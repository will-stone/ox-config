const nanoStaged = {
  "*": "oxfmt --write --no-error-on-unmatched-pattern",
  "*.{js,jsx,ts,tsx,cjs,mjs}": "oxlint --fix",
}

export default nanoStaged
