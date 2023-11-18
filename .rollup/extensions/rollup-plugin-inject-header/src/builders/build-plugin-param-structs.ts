import { Param as PluginParam } from '../processors/process-plugin-params'
import { Struct as PluginParamStruct } from '../processors/process-plugin-param-structs'
import { ListType, ListParamOption } from '../processors/process-type'

export function buildPluginParamStructs(struct: PluginParamStruct) {
  return Object.keys(struct).map((name) => {
    return {
      name,
      struct: struct[name].flatMap((param) => [
        '',
        ...(Object.keys(param) as Array<keyof PluginParam | keyof ListType>).flatMap((paramKey) => {
          if (paramKey === 'options') {
            return (param as ListType)[paramKey].flatMap((option) => [
              '',
              ...(Object.keys(option) as Array<keyof ListParamOption>).flatMap((optionKey) => {
                return `@${optionKey} ${option[optionKey]}`.split('\n')
              }),
            ])
          }
          return `@${paramKey} ${param[paramKey]}`.split('\n')
        }),
      ]).slice(1),
    }
  })
}
