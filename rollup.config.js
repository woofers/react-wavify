import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      uglify()
    ],
    input: 'src/wave.js',
    external: ['react'],
    output: {
    format: 'umd',
    name: 'react-wavify',
    globals: {
      react: "React"
    }
  }
}
export default config
