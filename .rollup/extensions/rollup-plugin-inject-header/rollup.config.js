import pluginNodeResolve from "@rollup/plugin-node-resolve"
import pluginCommonjs from "@rollup/plugin-commonjs"
import pluginTypescript from "@rollup/plugin-typescript"
import { babel as pluginBabel } from "@rollup/plugin-babel"
import { dependencies, devDependencies } from "./package.json"

const settings = ({ fname }) => {
  return {
    input: fname,
    output: [
      {
        file: '../rollup-plugin-inject-header.js',
        format: 'es',
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
    ],
  };
};

export default settings({ fname: 'src/index.ts' })
