import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
const dependencies = Object.keys(require('./package.json').dependencies)

const config = {
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      uglify()
    ],
    input: 'src/wave.js',
    external: dependencies,
    output: {
      format: 'cjs',
      file: 'dist/react-wavify.min.js',
      name: 'react-wavify'
    }
}
export default config
