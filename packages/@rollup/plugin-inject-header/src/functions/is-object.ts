export function isObject<T> (obj: unknown): obj is T {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object'
}
