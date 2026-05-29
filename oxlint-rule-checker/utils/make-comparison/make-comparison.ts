import { difference } from "es-toolkit/array"

function makeComparison(activeRules: string[], availableRules: string[]): string {
  const unknownRulesInUse = difference(activeRules, availableRules)
  const unsupportedRules = difference(availableRules, activeRules)

  if (!unknownRulesInUse.length && !unsupportedRules.length) {
    return "✅ All rules covered"
  }

  // oxlint-disable-next-line prefer-const
  let sections: string[][] = []

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

export { makeComparison }
