import path from 'path'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import replace from '@rollup/plugin-replace'

import plugins from './base/plugins/index'

const DEMO_DIR = path.join(__dirname, '../demo')

/** @type {import('rollup').RollupOptions} */
export default {
  input: path.join(DEMO_DIR, 'index.js'),
  output: {
    file: path.join(DEMO_DIR, 'demo.js'),
    format: 'iife',
    name: 'demo',
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    serve({
      open: true,
      contentBase: DEMO_DIR,
      port: 8080,
    }),
    livereload({
      verbose: true,
      watch: DEMO_DIR,
    }),
  ].concat(plugins),
}
