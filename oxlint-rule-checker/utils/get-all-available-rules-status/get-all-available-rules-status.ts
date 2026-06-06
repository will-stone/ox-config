import { execSync } from 'node:child_process'
import * as v from 'valibot'

const Schema = v.array(
  v.object({
    category: v.string(),
    default: v.boolean(),
    docs_url: v.string(),
    fix: v.string(),
    scope: v.string(),
    type_aware: v.boolean(),
    value: v.string(),
  }),
)

export type AllAvailableRulesStatus = v.InferInput<typeof Schema>

export function getAllAvailableRulesStatus(): AllAvailableRulesStatus {
  const unparsed = JSON.parse(execSync(`pnpm exec oxlint --rules --format json`).toString())

  return v.parse(Schema, unparsed)
}
