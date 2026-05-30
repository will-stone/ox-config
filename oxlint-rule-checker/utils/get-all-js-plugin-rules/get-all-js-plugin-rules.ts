import type { oxlintConfig } from "../../../src/index.ts"

import { interopDefault } from "../interop-default/interop-default.ts"

export async function getAllJsPluginsRules(
  ourOxlintConfig: ReturnType<typeof oxlintConfig>,
): Promise<string[]> {
  const allJsPluginsRules: string[] = []

  for await (const jsPlugin of ourOxlintConfig.jsPlugins || []) {
    const jsPluginIsString = typeof jsPlugin === "string"

    const packageName = jsPluginIsString ? jsPlugin : jsPlugin.specifier

    const pluginName = jsPluginIsString ? packageName.split("eslint-plugin-")[1] : jsPlugin.name

    const package_ = await interopDefault(import(packageName))

    allJsPluginsRules.push(
      ...Object.keys(package_.rules).map((ruleName) => `${pluginName}/${ruleName}`),
    )
  }

  return allJsPluginsRules
}
