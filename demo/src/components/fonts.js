import { globalCss } from 'stitches'

const useFontStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Trap',
      src: "url('fonts/trap/Trap-Light.woff2') format('woff2')",
      fontWeight: 200,
      fontStyle: 'normal',
      fontDisplay: 'swap'
    },
    {
      fontFamily: 'Trap',
      src: "url('fonts/trap/Trap-Regular.woff2') format('woff2')",
      fontWeight: 300,
      fontStyle: 'normal',
      fontDisplay: 'swap'
    },
    {
      fontFamily: 'Trap',
      src: "url('fonts/trap/Trap-Medium.woff2') format('woff2')",
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'swap'
    },
    {
      fontFamily: 'Trap',
      src: "url('fonts/trap/Trap-SemiBold.woff2') format('woff2')",
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'swap'
    },
    {
      fontFamily: 'Trap',
      src: "url('fonts/trap/Trap-Bold.woff2') format('woff2')",
      fontWeight: 600,
      fontStyle: 'normal',
      fontDisplay: 'swap'
    },
    {
      fontFamily: 'Trap',
      src: "url('fonts/trap/Trap-ExtraBold.woff2') format('woff2')",
      fontWeight: 700,
      fontStyle: 'normal',
      fontDisplay: 'swap'
    },
    {
      fontFamily: 'Trap',
      src: "url('fonts/trap/Trap-Black.woff2') format('woff2')",
      fontWeight: 800,
      fontStyle: 'normal',
      fontDisplay: 'swap'
    }
  ]
})

const Fonts = ({ children }) => {
  useFontStyles()
  return <>{children}</>
}

export default Fonts
