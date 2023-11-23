---
to: packages/<%= name %>/rollup.config.js
---
import settings from '@~/configs-rollup'
import packageJson from './package.json' assert { type: 'json' }

export default settings({
  url: import.meta.url,
  target: 'rmmv',
  name: packageJson.name,
  organization: packageJson.organization,
})
