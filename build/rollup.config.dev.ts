import path from 'path'
import typescript from '@rollup/plugin-typescript'
// @ts-expect-error
import serve from 'rollup-plugin-serve'
// @ts-expect-error
import livereload from 'rollup-plugin-livereload'
import replace from '@rollup/plugin-replace'

// @ts-expect-error
import plugins from './base/plugins/index.ts'

const DEMO_DIR = path.join(__dirname, '../demo')

export default {
  input: path.join(DEMO_DIR, 'index.ts'),
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
    typescript(),
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
