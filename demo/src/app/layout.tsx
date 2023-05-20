import Providers from './providers'
import StitchesRegistry from './registry'

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head/>
    <body>
      <div id="__next">
        <StitchesRegistry>
          <Providers>{children}</Providers>
        </StitchesRegistry>
      </div>
    </body>
  </html>
)

export default RootLayout
