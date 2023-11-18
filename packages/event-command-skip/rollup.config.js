import path from 'path'
import pluginNodeResolve from "@rollup/plugin-node-resolve"
import pluginCommonjs from "@rollup/plugin-commonjs"
import pluginTypescript from "@rollup/plugin-typescript"
import { babel as pluginBabel } from "@rollup/plugin-babel"
import { dependencies, devDependencies } from "./package.json"
import { injectHeader } from '../../.rollup/extensions/rollup-plugin-inject-header'

const settings = ({ fname }) => {
    return {
        input: fname,
        output: [
            {
                file: '../../build/Lunatlazur_EventCommandSkip.js',
                format: 'iife',
            },
        ],
        external: [
            ...Object.keys(dependencies || {}),
            ...Object.keys(devDependencies || {}),
        ],
        plugins: [
            pluginTypescript(),
            pluginCommonjs({
                extensions: [".js", ".ts"],
            }),
            pluginBabel({
                babelHelpers: "bundled",
                babelrc: true,
            }),
            pluginNodeResolve({
                browser: true,
            }),
            injectHeader({
                packageDir: __dirname,
                configDir: path.join(__dirname, '..', '..', 'config'),
            }),
        ],
    }
}

export default settings({ fname: 'src/Lunatlazur_EventCommandSkip.ts' })
