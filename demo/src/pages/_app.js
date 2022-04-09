import { ThemeProvider } from 'components/theme-provider'
import Global from 'components/global'
import Fonts from 'components/fonts'
import Meta from 'components/meta'
import SEO from 'components/seo'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Global />
    <Fonts />
    <Meta />
    <SEO />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
