// oxlint-disable no-console

import { getAllActiveRules } from "./utils/get-all-active-rules/get-all-active-rules.ts"
import { getAllAvailableRulesStatus } from "./utils/get-all-available-rules-status/get-all-available-rules-status.ts"
import { getAllBuiltInRulesNames } from "./utils/get-all-built-in-rules-names/get-all-built-in-rules-names.ts"
import { getAllJsPluginsRules } from "./utils/get-all-js-plugin-rules/get-all-js-plugin-rules.ts"
import { getOurOxlintConfigWithAllPluginsOn } from "./utils/get-our-oxlint-config-with-all-plugins-on/get-our-oxlint-config-with-all-plugins-on.ts"
import { makeComparison } from "./utils/make-comparison/make-comparison.ts"

const ourOxlintConfig = getOurOxlintConfigWithAllPluginsOn()

const allActiveRules = getAllActiveRules(ourOxlintConfig)

const allBuiltInRules = await getAllBuiltInRulesNames(ourOxlintConfig)
const allJsPluginsRules = await getAllJsPluginsRules(ourOxlintConfig)
const allAvailableRulesNames = [...allBuiltInRules, ...allJsPluginsRules]

const allAvailableRulesStatus = getAllAvailableRulesStatus()

console.log(makeComparison(allActiveRules, allAvailableRulesNames, allAvailableRulesStatus))
