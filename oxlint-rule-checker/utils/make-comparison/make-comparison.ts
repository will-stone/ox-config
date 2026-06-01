import type { DummyRule } from "oxlint"

import { difference } from "es-toolkit/array"

import type { AllAvailableRulesStatus } from "../get-all-available-rules-status/get-all-available-rules-status.ts"

export function makeComparison(
  activeRules: [string, DummyRule | undefined][],
  availableRules: string[],
  allAvailableRulesStatus: AllAvailableRulesStatus,
): string {
  const activeRulesNames = activeRules.map(([name]) => name)
  const unknownRulesInUse = difference(activeRulesNames, availableRules)
  const unsupportedRules = difference(availableRules, activeRulesNames)

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

  const errorRulesThatCouldBeWarns = []

  for (const [activeRule, level] of activeRules) {
    let activeRuleName = activeRule
    let activeRuleScope = "eslint"

    if (activeRule.includes("/")) {
      const [scope, value] = activeRule.split("/")
      activeRuleScope = scope
      activeRuleName = value
    }

    const detail = allAvailableRulesStatus.find(
      (ruleDetail) => ruleDetail.scope === activeRuleScope && ruleDetail.value === activeRuleName,
    )

    if (
      detail?.fix === "fixable_fix" &&
      (Array.isArray(level)
        ? level[0] !== "warn" && level[0] !== "off"
        : level !== "warn" && level !== "off")
    ) {
      errorRulesThatCouldBeWarns.push(activeRule)
    }
  }

  if (errorRulesThatCouldBeWarns.length) {
    const sectionsLength = sections.push([
      "🛠️ Rules currently set to error that could be warn due to safe auto-fix:",
    ])

    for (const rule of errorRulesThatCouldBeWarns) {
      sections[sectionsLength - 1].push(rule)
    }
  }

  if (!unknownRulesInUse.length && !unsupportedRules.length && !errorRulesThatCouldBeWarns.length) {
    return "✅ All rules covered"
  }

  return sections.map((lines) => lines.join("\n")).join("\n\n")
}
