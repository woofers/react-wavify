import { ThemeProvider } from "components/theme-provider";
import Meta from "components/meta";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Meta />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
