import pluginNodeResolve from '@rollup/plugin-node-resolve'
import pluginCommonjs from '@rollup/plugin-commonjs'
import pluginTypescript from '@rollup/plugin-typescript'
import { babel as pluginBabel } from '@rollup/plugin-babel'
import packageJson from './package.json' assert  { type: 'json' }

const { dependencies } = packageJson
const settings = ({ fname }) => {
    return {
        input: fname,
        output: [
            {
                file: './index.js',
                format: 'es',
            },
        ],
        external: Object.keys(dependencies || {}),
        plugins: [
            pluginTypescript(),
            pluginCommonjs({
                extensions: ['.js', '.ts'],
            }),
            pluginBabel({
                babelHelpers: 'bundled',
                babelrc: true,
            }),
            pluginNodeResolve({
                browser: true,
            }),
        ],
    }
}

export default settings({ fname: 'src/index.ts' })
