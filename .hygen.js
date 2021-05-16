const dayjs = require('dayjs')
const fs = require('fs')

const store = {
  metadata: undefined,
}

const metadata = (() => {
  if (store.metadata) {
    return store.metadata
  }
  const json = fs.readFileSync(`${__dirname}/package.json`)
  store.metadata = JSON.parse(json)
  return store.metadata
})

module.exports = {
  templates: `${__dirname}/.hygen`,
  helpers: {
    today: () => dayjs().format('YYYY-MM-DD'),
    year: (date) => dayjs(date, 'YYYY-MM-DD').year(),
    metadata,
    author: (lang) => metadata()[`author:${lang}`] || metadata().author,
    namespace: () => metadata().rmmvPluginConfig.namespace,
  },
}
