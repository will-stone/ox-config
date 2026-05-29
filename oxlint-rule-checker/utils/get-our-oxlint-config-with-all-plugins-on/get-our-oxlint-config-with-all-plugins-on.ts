import { mapValues } from "es-toolkit/object"

import { oxlintConfig } from "../../../src/index.ts"
import { defaultPlugins } from "../../../src/oxlint-config/model.ts"

function getOurOxlintConfigWithAllPluginsOn(): ReturnType<typeof oxlintConfig> {
  return oxlintConfig(mapValues(defaultPlugins, () => true))
}

export { getOurOxlintConfigWithAllPluginsOn }
