import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
const json = require('./package.json')
const dependencies = [
  ...Object.keys(json.dependencies),
  ...Object.keys(json.peerDependencies)
]

const config = {
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify()
  ],
  input: json.src,
  external: dependencies,
  output: {
    format: 'umd',
    file: json.main,
    name: json.name,
    globals: {
      react: "React"
    }
  }
}
export default config
