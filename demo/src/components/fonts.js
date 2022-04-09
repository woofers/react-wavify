import { globalCss } from 'stitches'

/*
  This Font Software is licensed under the SIL Open Font License, Version 1.1.
*/


const useFontStyles = globalCss({
  '@font-face': [
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Thin.woff2') format('woff2')"
    , fontWeight: 100,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Thin'Italic'.woff2') format('woff2')"
    , fontWeight: 100,
    fontStyle: 'italic',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-ExtraLight.woff2') format('woff2')"
    , fontWeight: 200,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},

{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-ExtraLight'Italic'.woff2') format('woff2')"
    , fontWeight: 200,
    fontStyle: 'italic',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Light.woff2') format('woff2')"
    , fontWeight: 300,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Light'Italic'.woff2') format('woff2')"
    , fontWeight: 300,
    fontStyle: 'italic',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Regular.woff2') format('woff2')"
    , fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-'Italic'.woff2') format('woff2')"
    , fontWeight: 400,
    fontStyle: 'italic',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Medium.woff2') format('woff2')"
    , fontWeight: 500,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},

{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Medium'Italic'.woff2') format('woff2')"
    , fontWeight: 500,
    fontStyle: 'italic',
    fontDisplay: 'swap',
},

{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-SemiBold.woff2') format('woff2')"
    , fontWeight: 600,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},

{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-SemiBold'Italic'.woff2') format('woff2')"
    , fontWeight: 600,
    fontStyle: 'italic',
    fontDisplay: 'swap',
},

{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Bold.woff2') format('woff2')"
    , fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},

{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Bold'Italic'.woff2') format('woff2')"
    , fontWeight: 700,
    fontStyle: 'italic',
    fontDisplay: 'swap',
},

{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-ExtraBold.woff2') format('woff2')"
    , fontWeight: 800,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},

{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-ExtraBold'Italic'.woff2') format('woff2')"
    , fontWeight: 800,
    fontStyle: 'italic',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Black.woff2') format('woff2')"
    , fontWeight: 900,
    fontStyle: 'normal',
    fontDisplay: 'swap',
},
{
    fontFamily: 'AlbertSans',
    src: "url('fonts/albertsans/AlbertSans-Black'Italic'.woff2') format('woff2')"
    , fontWeight: 900,
    fontStyle: 'italic',
    fontDisplay: 'swap',
}]
})

const Fonts = ({ children }) => {
  useFontStyles()
  return <>{children}</>
}

export default Fonts
