///  <reference path="../../typings/commenting.d.ts" />
import commenting from 'commenting'
import { Store } from '../store'
import { Locale } from '../processors/process-type'
import { buildPluginParams } from './build-plugin-params'
import { buildPluginParamStructs } from './build-plugin-param-structs'
import { processReadme } from '../processors/process-readme'

const { Style } = commenting

export function buildHeaderBody(store: Store, locale: Locale) {
  const description = store.packageJson[locale === 'en' ? 'description' : `description:${locale || 'ja'}` ]
  const author = store.packageJson[locale === 'en' ? 'author' : `author:${locale || 'ja'}` ]
  const { changelog, usage } = store.files[locale || 'ja']
  const style = new Style(' *', `/*:${locale === 'en' ? '' : locale}`, ' */')
  const params = buildPluginParams(store.pluginParams[locale])
  const structs = buildPluginParamStructs(store.pluginParamStructs[locale] || {})
  const [help, ...rest] = processReadme(store.files[locale].readme).split('\n')
  return [
    commenting([
      `@plugindesc ${description}`,
      `@author ${author}`,
      `@help ${help}`,
      ...rest,
      '',
      ...usage.split('\n'),
      '',
      ...changelog.split('\n'),
      ...params,
    ], { style, keepIndent: true }),
    ...structs.map(({ name, struct }) => commenting(struct, {
      style: new Style(' *', `/*~struct~${name}:${locale}`, ' */'),
      keepIndent: true,
    })),
  ].join('')
}
