import { uglify } from 'rollup-plugin-uglify'
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
const json = require('./package.json')

const getPath = path => path.substring(0, path.lastIndexOf('/'))
const dependencies = [
  ...Object.keys(json.dependencies),
  ...Object.keys(json.peerDependencies)
]

const config = mode => {
  const isDev = mode !== 'production'
  const name = `${json.name}${isDev ? '.dev' : ''}`
  return {
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled'
      }),
      replace({ '__isDev__': isDev }),
      ...(!isDev ? [uglify()] : [])
    ],
    input: json.src,
    external: dependencies,
    output: {
      format: 'umd',
      file: `${getPath(json.main)}/${name}.js`,
      name: json.name,
      globals: {
        react: 'React',
        'prop-types': 'PropTypes'
      }
    }
  }
}


export default [
  config('development'),
  config('production')
]
