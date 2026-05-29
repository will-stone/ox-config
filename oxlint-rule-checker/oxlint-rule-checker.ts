// oxlint-disable no-console

import { getAllActiveRules } from "./utils/get-all-active-rules/get-all-active-rules.ts"
import { getAllBuiltInRules } from "./utils/get-all-built-in-rules/get-all-built-in-rules.ts"
import { getAllJsPluginsRules } from "./utils/get-all-js-plugin-rules/get-all-js-plugin-rules.ts"
import { getOurOxlintConfigWithAllPluginsOn } from "./utils/get-our-oxlint-config-with-all-plugins-on/get-our-oxlint-config-with-all-plugins-on.ts"
import { makeComparison } from "./utils/make-comparison/make-comparison.ts"

const ourOxlintConfig = getOurOxlintConfigWithAllPluginsOn()

const allActiveRules = getAllActiveRules(ourOxlintConfig)

const allBuiltInRules = await getAllBuiltInRules(ourOxlintConfig)
const allJsPluginsRules = await getAllJsPluginsRules(ourOxlintConfig)
const allAvailableRules = [...allBuiltInRules, ...allJsPluginsRules]

console.log(makeComparison(allActiveRules, allAvailableRules))
