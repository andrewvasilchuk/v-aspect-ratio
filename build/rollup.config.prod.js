import path from 'path'
import flatten from 'lodash.flatten'
import typescript from '@rollup/plugin-typescript'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'

import basePlugins from './base/plugins/index'

const FILES = [
  {
    name: 'v-aspect-ratio',
    path: path.join(__dirname, '../src/index.ts'),
  },
  {
    name: 'v-aspect-ratio.ssr',
    path: path.join(__dirname, '../src/index.ssr.ts'),
  },
]
const DIST_DIR = 'dist'
const name = 'VAspectRatio'
const external = ['vue']
const globals = {
  vue: 'Vue',
}
const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  typescript({
    tsconfig: './tsconfig.prod.json',
  }),
].concat(basePlugins)

/** @type {import('rollup').RollupOptions} */
export default flatten(
  FILES.map(file => [
    {
      input: file.path,
      external,
      output: [
        {
          file: `${DIST_DIR}/${file.name}.js`,
          format: 'umd',
          exports: 'named',
          globals,
          name,
        },
        {
          file: `${DIST_DIR}/${file.name}.common.js`,
          exports: 'named',
          format: 'cjs',
        },
        {
          file: `${DIST_DIR}/${file.name}.esm.js`,
          format: 'esm',
        },
      ],
      plugins: [].concat(plugins),
    },
    {
      input: file.path,
      external,
      output: {
        file: `${DIST_DIR}/${file.name}.min.js`,
        format: 'umd',
        exports: 'named',
        globals,
        name,
      },
      plugins: [terser({ output: { comments: false } })].concat(plugins),
    },
  ])
)
