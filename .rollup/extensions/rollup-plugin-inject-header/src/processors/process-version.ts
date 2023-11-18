import compare from 'semver-compare'

export function processVersion (changelog: string) {
  const versionPattern = /\d+\.\d+\.\d+ \d{4}-\d{2}-\d{2}/g
  const versions = changelog.match(versionPattern).map((matched) => {
    const [version, date] = matched.split(' ')
    return { version, date }
  }).sort((a, b) => compare(a.version, b.version))
  const [first] = versions
  const [latest] = versions.slice(-1)
  return {
    releasedYear: first ? (new Date(first.date)).getFullYear().toString() : '',
    latestVersion: latest ? latest.version : '',
    lastUpdatedAt: latest ? latest.date : '',
  }
}
