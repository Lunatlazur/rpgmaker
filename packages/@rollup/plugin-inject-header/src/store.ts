import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'
import yaml from 'js-yaml'
import { Param as PluginParam } from './processors/process-plugin-params'
import { Struct as PluginParamStruct } from './processors/process-plugin-param-structs'
import { processPluginParams } from './processors/process-plugin-params'
import { processPluginParamStructs } from './processors/process-plugin-param-structs'
import { Locale, Param as RawPluginParam } from './processors/process-type'

type LocaleOrientedPathName = `${LocaleOrientedFileKey}:${Locale}`
export type PathName = FileKey | LocaleOrientedPathName
export type FileKey = 'license'
export type LocaleOrientedFileKey = 'changelog' | 'usage' | 'readme'
export type Files = { [K in FileKey]: string }
export type LocaleOrientedFiles = { [K in LocaleOrientedFileKey]: string }
export type UnresolvedFiles = { [K in FileKey]?: string }
export type UnresolvedLocaleOrientedFiles = { [K in LocaleOrientedFileKey]?: string }

export type Store = {
  files: {
    general: Files
    ja: LocaleOrientedFiles
    en: LocaleOrientedFiles
  }
  pluginName: string
  headerTemplate: string
  packageJson: {
    [key: string]: string
  }
  builderConfig: {
    [key: string]: string
  }
  pluginParams: {
    ja?: PluginParam[]
    en?: PluginParam[]
  }
  pluginParamStructs: {
    ja?: PluginParamStruct
    en?: PluginParamStruct
  }
}

const readFile = promisify<string, string, string>(fs.readFile.bind(fs))

const paths: {
  [K in PathName]: string
} = {
  license: 'LICENSE.md',
  'changelog:en': 'CHANGELOG.en.md',
  'changelog:ja': 'CHANGELOG.md',
  'usage:en': 'USAGE.en.md',
  'usage:ja': 'USAGE.md',
  'readme:en': 'README.en.md',
  'readme:ja': 'README.md',
}

type PluginMeta = {
  locales: Locale[]
  params: RawPluginParam[]
  structs: { [key: string]: { [key: string]: RawPluginParam } }
}
function loadYAML (pluginMeta: string) {
  return yaml.load(pluginMeta) as PluginMeta
}

function isFilesKey(key: PathName): key is FileKey {
  return !key.includes(':')
}

export async function getStore(packageDir: string, configDir: string) {
  const store: Store = {
    files: {
      general: null,
      ja: null,
      en: null,
    },
    pluginName: null,
    packageJson: null,
    headerTemplate: null,
    builderConfig: null,
    pluginParams: {
      ja: null,
      en: null,
    },
    pluginParamStructs: {
      ja: null,
      en: null,
    },
  }
  const files: {
    general: UnresolvedFiles,
    en: UnresolvedLocaleOrientedFiles,
    ja: UnresolvedLocaleOrientedFiles,
  } = {
    general: {},
    en: {},
    ja: {},
  }
  await Promise.all<void>([
    ...(Object.keys(paths) as PathName[]).map(async (key) => {
      const file = await readFile(path.join(packageDir, paths[key]), 'utf-8').catch(() => {
        return ''
      })
      if (isFilesKey(key)) {
        files.general[key] = file.replace(/\r\n/gm, '\n')
      }
      else {
        const [name, locale] = key.split(':') as [LocaleOrientedFileKey, Locale]
        files[locale][name] = file.replace(/\r\n/gm, '\n')
      }
    }),
    (async () => {
      store.headerTemplate = await readFile(path.join(configDir, 'templates', 'header.txt.ejs'), 'utf-8')
    })(),
    (async () => {
      const builderConfig = await readFile(path.join(configDir, 'builderconfig.json'), 'utf-8')
      store.builderConfig = JSON.parse(builderConfig || '{}')
    })(),
    (async () => {
      const pluginMeta = await readFile(path.join(packageDir, 'src', 'plugin-meta.yml'), 'utf-8').catch((): null => {
        return null
      })
      const { params, structs, locales } = loadYAML(pluginMeta) || {}
      store.pluginParams = processPluginParams(params || [], locales)
      store.pluginParamStructs = processPluginParamStructs(structs || {}, locales)
    })(),
    (async () => {
      const packageJson = await readFile(path.join(packageDir, 'package.json'), 'utf-8')
      store.packageJson = JSON.parse(packageJson)
    })(),
  ])
  store.files = files as {
    general: Files
    en: LocaleOrientedFiles
    ja: LocaleOrientedFiles
  }
  return store
}
