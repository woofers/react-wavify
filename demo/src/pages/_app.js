import { ThemeProvider } from 'components/theme-provider'
import Global from 'components/global'
import Meta from 'components/meta'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Global />
    <Meta />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
