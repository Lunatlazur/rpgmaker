import packageJson from './package.json' assert { type: 'json' }
import settings from '@configs/rollup'

const { dependencies, devDependencies } = packageJson

export default settings({
  url: import.meta.url,
  target: 'rmmv',
  name: 'Lunatlazur_ActorNameWindow',
  dependencies,
  devDependencies,
})
