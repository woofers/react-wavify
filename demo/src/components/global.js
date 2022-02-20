import { globalCss } from 'stitches'

const useGlobalStyles = globalCss({
  '@import': [
    `url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap')`
  ],
  '::selection': {
    background: '$selection'
  }
})

const Global = ({ children }) => {
  useGlobalStyles()
  return <>{children}</>
}

export default Global
