export function isNumber (obj: any): obj is number {
  return typeof(obj) === 'number' && Number.isFinite(obj)
}
