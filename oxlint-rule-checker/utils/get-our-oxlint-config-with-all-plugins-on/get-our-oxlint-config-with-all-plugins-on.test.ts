import { expect, test, vi } from "vitest"

import * as OxlintConfig from "../../../src/index.ts"
import { getOurOxlintConfigWithAllPluginsOn } from "./get-our-oxlint-config-with-all-plugins-on.ts"

test("should turn on all plugins", () => {
  const oxlintConfigSpy = vi
    .spyOn(OxlintConfig, "oxlintConfig")
    .mockReturnValue(null as unknown as ReturnType<typeof OxlintConfig.oxlintConfig>)

  getOurOxlintConfigWithAllPluginsOn()

  expect(oxlintConfigSpy).toHaveBeenCalledWith({
    nextjs: true,
    react: true,
    storybook: true,
    tailwindcss: true,
    vitest: true,
  })
})
