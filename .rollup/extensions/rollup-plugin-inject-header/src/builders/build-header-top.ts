///  <reference path="../../typings/commenting.d.ts" />
import commenting from 'commenting'
import ejs from 'ejs'

const { Style } = commenting

export function buildHeaderTop(headerTemplate: string, variables: { [key: string]: string }) {
  const horizontalRule = '='.repeat(77)
  const style = new Style('//', `//${horizontalRule}`, `//${horizontalRule}`)
  return commenting(ejs.render(headerTemplate, variables).trim(), { style, keepIndent: true })
}
