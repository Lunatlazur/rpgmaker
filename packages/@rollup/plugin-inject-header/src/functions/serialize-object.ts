import { isObject } from './is-object'
import { isNumber } from './is-number'

export type Serializable = string | number | null | Serializable[] | { [key:string]: Serializable }

export function serializeObject (obj: Serializable): string | null {
  if (obj != null) {
    if (isObject<{ [key:string]: Serializable }>(obj) ) {
      return JSON.stringify(Object.keys(obj).reduce((prev, key) => {
        return { ...prev, [key]: serializeObject(obj[key]) }
      }, {} as { [key: string]: string }))
    } else if (Array.isArray(obj)) {
      return JSON.stringify(obj.map((item) => {
        return serializeObject(item)
      }))
    } else if (isNumber(obj)) {
      return obj.toString()
    } else {
      return obj
    }
  } else {
    return null
  }
}
