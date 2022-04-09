import { globalCss } from 'stitches'

const useGlobalStyles = globalCss({
  '@import': [
    `url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap')`
  ],
  '*, *::before, *::after': { boxSizing: 'border-box' },
  '*': { margin: 0, padding: 0 },
  'html, body': {
    height: '100%'
  },
  'body': {
    lineHeight: 1.5,
   '-webkit-font-smoothing': 'antialiased',
    background: '$blue'
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%'
  },
  'input, button, textarea, select': {
    font: 'inherit'
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word'
  },
  '#root, #__next': {
    isolation: 'isolate'
  },
  '::selection': {
    background: '$selection'
  }
})

const Global = ({ children }) => {
  useGlobalStyles()
  return <>{children}</>
}

export default Global
