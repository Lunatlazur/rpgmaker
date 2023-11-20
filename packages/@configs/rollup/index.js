import path from 'path'
import { fileURLToPath } from 'url'
import pluginNodeResolve from "@rollup/plugin-node-resolve"
import pluginCommonjs from "@rollup/plugin-commonjs"
import pluginTypescript from "@rollup/plugin-typescript"
import { babel as pluginBabel } from "@rollup/plugin-babel"
import { pluginInjectHeader } from '@rollup/plugin-inject-header'

function settings({ url, target, name, dependencies, devDependencies }) {
  const packageDir = path.dirname(fileURLToPath(url))
  const configDir = path.join(packageDir,  '..', '..', 'config')
  return {
    input: `./src/${name}.ts`,
    output: [{
      file: `../../build/${target}/${name}.js`,
      format: 'iife',
    }],
    external: [
      ...Object.keys(dependencies || {}),
      ...Object.keys(devDependencies || {}),
    ],
    plugins: [
      pluginNodeResolve({
        browser: true,
      }),
      pluginTypescript(),
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        babelrc: true,
      }),
      pluginInjectHeader({ packageDir, configDir }),
    ],
    strictDeprecations: true,
  }
}

export default settings
