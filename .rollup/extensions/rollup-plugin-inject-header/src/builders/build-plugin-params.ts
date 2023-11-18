import { Param as PluginParam } from '../processors/process-plugin-params'

export function buildPluginParams(params: PluginParam[]) {
  return params.flatMap((param) => [
    '',
    ...(Object.keys(param) as Array<keyof PluginParam>).flatMap((name) => {
      return `@${name} ${param[name]}`.split('\n')
    }),
  ])
}
