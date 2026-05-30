import type { DummyRule } from "oxlint"

import { difference } from "es-toolkit/array"

export function makeComparison(
  activeRules: [string, DummyRule | undefined][],
  availableRules: string[],
): string {
  const activeRulesNames = activeRules.map(([name]) => name)
  const unknownRulesInUse = difference(activeRulesNames, availableRules)
  const unsupportedRules = difference(availableRules, activeRulesNames)

  if (!unknownRulesInUse.length && !unsupportedRules.length) {
    return "✅ All rules covered"
  }

  const sections: string[][] = []

  if (unknownRulesInUse.length) {
    sections.push(["⁉️ Unknown rules in use:"])

    for (const ruleName of unknownRulesInUse) {
      sections[0].push(ruleName)
    }
  }

  if (unsupportedRules.length) {
    const sectionsLength = sections.push(["🆕 Unsupported rules:"])

    for (const ruleName of unsupportedRules) {
      sections[sectionsLength - 1].push(ruleName)
    }
  }

  return sections.map((lines) => lines.join("\n")).join("\n\n")
}
