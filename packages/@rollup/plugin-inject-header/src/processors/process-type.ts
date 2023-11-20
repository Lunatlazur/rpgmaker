import { isObject } from '../functions/is-object'
import { Serializable } from '../functions/serialize-object'

type SimpleParamType = 'string'
  | `struct<${string}>`
  | 'note'
  | 'variable'
  | 'switch'
  | 'actor'
  | 'class'
  | 'skill'
  | 'item'
  | 'weapon'
  | 'armor'
  | 'enemy'
  | 'troop'
  | 'state'
  | 'animation'
  | 'tileset'
  | 'common_event'

type ArrayParamType<T extends string> = `${T}[]`

type OptionNameForLocale = `option:${Locale}`

type LocaleOrientedListParamOption = {
  [K in OptionNameForLocale]?: string
} & {
  value: string
}

export type ListParamOption = {
  option: string
  value: string
}

type SelectParamType = {
  select: LocaleOrientedListParamOption[]
}

type SelectArrayParamType = {
  [K in ArrayParamType<'select'>]: LocaleOrientedListParamOption[]
}

type ComboParamType = {
  combo: LocaleOrientedListParamOption[]
}

type ComboArrayParamType = {
  [K in ArrayParamType<'combo'>]: LocaleOrientedListParamOption[]
}

type NumberParamOption = {
  min?: number
  max?: number
  decimals?: number
}

type NumberParamType = {
  number: NumberParamOption
}

type NumberArrayParamType = {
  [K in ArrayParamType<'number'>]: NumberParamOption
}

type FileParamOption = {
  dir?: string
}

type FileParamType = {
  file: FileParamOption
}

type FileArrayParamType = {
  [K in ArrayParamType<'file'>]: FileParamOption
}

type LocaleOrientedBooleanParamOption = {
  [K in `on:${Locale}`]?: string
} & {
  [K in `off:${Locale}`]?: string
}

type BooleanParamType = {
  boolean: LocaleOrientedBooleanParamOption
}

type BooleanArrayParamType = {
  [K in ArrayParamType<'boolean'>]: LocaleOrientedBooleanParamOption
}

type BooleanParamOption = {
  on?: string
  off?: string
}

type ComplexParamType = SelectParamType
  | SelectArrayParamType
  | ComboParamType
  | ComboArrayParamType
  | NumberParamType
  | NumberArrayParamType
  | BooleanParamType
  | BooleanArrayParamType
  | FileParamType
  | FileArrayParamType

type ListTypeName =  keyof SelectParamType
  | keyof SelectArrayParamType
  | keyof ComboParamType
  | keyof ComboArrayParamType

type BooleanTypeName = keyof BooleanParamType
  | keyof BooleanArrayParamType

type NumberTypeName = keyof NumberParamType
  | keyof NumberArrayParamType

type FileTypeName = keyof FileParamType
  | keyof FileArrayParamType

type ParamType = SimpleParamType
  | ArrayParamType<SimpleParamType>
  | ComplexParamType

export type Locale = 'ja' | 'en'

type ParamNameForLocale = `param:${Locale}`
type ParamDescForLocale = `desc:${Locale}`
type ParamDefaultForLocale = `default:${Locale}`

export type Param = {
  [K in ParamNameForLocale | ParamDescForLocale]?: string
} & {
  [K in 'default' | ParamDefaultForLocale]?: Serializable
} & {
  type: ParamType
}

function processListType (type: ListTypeName, options: LocaleOrientedListParamOption[], locales: Locale[]) {
  return options.reduce((prev, option) => {
    return locales.reduce((prev, locale) => {
      return {
        ...prev,
        [locale]: {
          type,
          options: [
            ...(prev[locale] ? prev[locale].options : []),
            {
              option: option[`option:${locale}` as `option:${Locale}`],
              value: option.value,
            },
          ],
        },
      }
    }, prev)
  }, {} as {[K in Locale]?: { type: ListTypeName, options: ListParamOption[] } })
}

function processBooleanType (type: BooleanTypeName, value: LocaleOrientedBooleanParamOption, locales: Locale[]) {
  return locales.reduce((prev, locale) => {
    return {
      ...prev,
      [locale]: {
        type,
        on: value[`on:${locale}` as `on:${Locale}`],
        off: value[`off:${locale}` as `off:${Locale}`],
      },
    }
  }, {} as {[K in Locale]?: { type: BooleanTypeName, on: string, off: string } })
}

export type FileType =  { type: FileTypeName } & FileParamOption
export type NumberType = { type: NumberTypeName } & NumberParamOption
export type ListType =  { type: ListTypeName, options: ListParamOption[] }
export type BooleanType = { type: BooleanTypeName } & BooleanParamOption
export function processType (obj: ParamType, locales: Locale[]) {
  if (isObject<ComplexParamType>(obj) ) {
    if ('select' in obj || 'select[]' in obj || 'combo' in obj || 'combo[]' in obj) {
      const [[type, value]] = Object.entries(obj) as Array<[ListTypeName, LocaleOrientedListParamOption[]]>
      return processListType(type, value, locales)
    } else if ('boolean' in obj || 'boolean[]' in obj) {
      const [[type, value]] = Object.entries(obj) as Array<[BooleanTypeName, LocaleOrientedBooleanParamOption]>
      return processBooleanType(type, value, locales)
    } else if ('file' in obj || 'file[]' in obj || 'number' in obj || 'number[]' in obj) {
      const [[type, value]] = Object.entries(obj) as Array<[FileTypeName, FileParamOption]>
        | Array<[NumberTypeName, NumberParamOption]>
      return locales.reduce((prev, locale) => {
        return {
          ...prev,
          [locale]: {
            type,
            ...value,
          },
        }
      }, {} as {[K in Locale]?: FileType | NumberType })
    }
  } else {
    return locales.reduce((prev, locale) => {
      return { ...prev, [locale]: { type: obj } }
    }, {} as {[K in Locale]?: { type: SimpleParamType | ArrayParamType<SimpleParamType> } })
  }
}
