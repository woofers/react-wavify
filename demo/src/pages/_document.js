import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en" className="no-js">
        <Head>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `document.documentElement.className = 'js'`
            }}
          ></script>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
