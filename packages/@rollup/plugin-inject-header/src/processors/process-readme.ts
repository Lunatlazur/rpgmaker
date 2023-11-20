export function processReadme (readmeText: string) {
  const [_, readme] = readmeText.split(/^---$/m)
  return readme.trim().replace('､', '、').replace('｡', '。').replace(/(?:\\|[ ]{2})$/gm, '')
}
