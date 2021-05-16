import { processLicense } from '../processors/process-license'
import { processVersion } from '../processors/process-version'
import { Store } from '../store'

export function buildHeaderVariables(store: Store) {
  const title = `${store.pluginName}.js`
  const { author } = store.packageJson
  return {
    ...store.builderConfig,
    title,
    author,
    ...processLicense(store.files.general.license),
    ...processVersion(store.files.en.changelog),
  }
}
