import { omitBy } from 'lodash'
import { serializeObject } from '../functions/serialize-object'
import { processType, Param as RawParam, Locale } from './process-type'
import { Param } from './process-plugin-params'

type RawStruct = { [key: string]: { [key: string]: RawParam } }
export type Struct = { [key: string]: Param[] }
export function processPluginParamStructs (structs: RawStruct, locales: Locale[]) {
  return Object.keys(structs).reduce((prev, name) => {
    return Object.keys(structs[name]).reduce((prev, paramName) => {
      const param = structs[name][paramName]
      const type = processType(param.type, locales)
      return locales.reduce((prev, locale) => {
        const paramDefault = param[`default:${locale}` as `default:${Locale}`] || param.default
        return {
          ...prev,
          [locale]: {
            ...(prev[locale] || {}),
            [name]: [
              ...(prev[locale] ? prev[locale][name] : []),
              omitBy({
                param: paramName,
                desc: param[`desc:${locale}` as `desc:${Locale}`],
                ...type[locale],
                default: serializeObject(paramDefault),
              }, (value) => value == null),
            ],
          },
        }
      }, prev)
    }, prev)
  }, {} as { [K in Locale]?: Struct })
}
