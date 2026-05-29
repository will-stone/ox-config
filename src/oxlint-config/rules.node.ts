import type { DummyRule } from "oxlint"

const rulesNode: Record<string, DummyRule> = {
  "node/callback-return": "error",
  "node/global-require": "error",
  "node/handle-callback-err": "error",
  "node/no-exports-assign": "error",
  "node/no-new-require": "error",
  "node/no-path-concat": "error",
  "node/no-process-env": "off",
}

export { rulesNode }
