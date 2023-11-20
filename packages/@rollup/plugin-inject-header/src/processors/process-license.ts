const mdAnchorPattern = /\[([^\]]+)\]\(([^\)]+)\)/

export function processLicense (licenseText: string) {
  const [license] = licenseText.split('\n')
  const [_, licenseName, licenseUrl] = license.match(mdAnchorPattern) || [null, '', '']
  return {
    licenseName,
    licenseUrl,
  }
}
