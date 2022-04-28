import common from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const plugins = [common(), resolve()]

export default plugins
