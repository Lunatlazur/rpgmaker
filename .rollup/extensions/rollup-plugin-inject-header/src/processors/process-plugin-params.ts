import { omitBy } from 'lodash'
import { serializeObject } from '../functions/serialize-object'
import { processType, Param as RawParam, Locale } from './process-type'

export type Param = {
  param: string
  desc?: string
  default?: string
} & ReturnType<typeof processType>[Locale]
export function processPluginParams (params: RawParam[], locales: Locale[]) {
  return params.reduce((prev, param) => {
    const type = processType(param.type, locales)
    return locales.reduce((prev, locale) => {
      const paramDefault = param[`default:${locale}` as `default:${Locale}`] || param.default
      return {
        ...prev,
        [locale]: [
          ...(prev[locale] || []),
          omitBy({
            param: param[`param:${locale}` as `param:${Locale}`],
            desc: param[`desc:${locale}` as `desc:${Locale}`],
            ...type[locale],
            default: serializeObject(paramDefault),
          }, (value) => value == null),
        ],
      }
    }, prev)
  }, {}  as {[K in Locale]?: Param[] })
}
