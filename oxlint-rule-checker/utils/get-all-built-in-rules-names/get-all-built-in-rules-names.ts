import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

import type oxlintConfig from "../../../packages/oxlint/src/index.ts"

// Temporary directory for the files needed to test against.
const tempDir = path.join(import.meta.dirname, ".tmp")
// An oxlint config with all the available rules.
const allRulesPath = path.join(tempDir, "all-rules.json")
// An empty config so oxlint doesn't use the local one which skews the output of
// the all rules file.
const dummyOxlintConfigPath = path.join(tempDir, "dummy-oxlint.config.ts")

// These plugins don't need flags to be enabled.
export const alwaysOnPlugins = new Set(["eslint", "oxc", "typescript", "unicorn"])

export async function getAllBuiltInRulesNames(
  ourOxlintConfig: ReturnType<typeof oxlintConfig>,
): Promise<string[]> {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true })
  }

  fs.mkdirSync(tempDir)

  fs.writeFileSync(
    dummyOxlintConfigPath,
    'import { defineConfig } from "oxlint"; export default defineConfig({});',
  )

  const pluginsFlags = (ourOxlintConfig?.plugins || [])
    .filter((plugin) => !alwaysOnPlugins.has(plugin))
    .map((plugin) => `--${plugin}-plugin`)
    .join(" ")

  execSync(
    `pnpm exec oxlint -D all -D nursery --print-config ${pluginsFlags} --config ${dummyOxlintConfigPath} > ${allRulesPath}`,
    { stdio: "inherit" },
  )

  const { default: allOxlintConfig } = await import(allRulesPath, { with: { type: "json" } })

  const allOxlintRules = Object.keys(allOxlintConfig.rules)

  fs.rmSync(tempDir, { recursive: true })

  return allOxlintRules
}
