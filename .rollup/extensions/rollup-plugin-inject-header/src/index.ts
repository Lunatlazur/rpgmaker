import * as path from 'path'
import { RenderedChunk } from 'rollup'
import { getStore } from './store'
import { buildHeaderVariables } from './builders/build-header-variables'
import { buildHeaderTop } from './builders/build-header-top'
import { buildHeaderBody } from './builders/build-header-body'

type Options = {
  packageDir: string
  configDir: string
}
export function injectHeader(options: Options) {
  return {
    name: 'injectHeader',
    async renderChunk(code: string, chunk: RenderedChunk) {
      if (chunk.facadeModuleId) {
        const store = await getStore(options.packageDir, options.configDir)
        store.pluginName = path.basename(chunk.facadeModuleId, '.ts')
        const variables = buildHeaderVariables(store)
        const header = buildHeaderTop(store.headerTemplate, variables)
        const body = ['en', 'ja'].map((locale: 'en' | 'ja') => buildHeaderBody(store, locale)).join('')
        const rendered = header + body + code
        return rendered
      } else {
        return code
      }
    },
  }
}
