import path from 'path'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import cleanup from 'rollup-plugin-cleanup'

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
    preventAssignment: true,
  }),
  typescript({
    tsconfig: './tsconfig.prod.json',
  }),
].concat(basePlugins)

export default FILES.map((file) => [
  defineConfig({
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
    plugins: plugins.concat(cleanup({ comments: 'none', extensions: ['.ts'] })),
  }),
  defineConfig({
    input: file.path,
    external,
    output: {
      file: `${DIST_DIR}/${file.name}.min.js`,
      format: 'esm',
    },
    plugins: [
      getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
        plugins: [['@babel/plugin-transform-modules-umd', { globals }]],
        moduleId: name,
      }),
      terser({ format: { comments: false } }),
    ].concat(plugins),
  }),
]).flat()
