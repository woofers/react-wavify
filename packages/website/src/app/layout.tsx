import './global.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--fonts-title',
  preload: true,
  display: 'swap'
})

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head />
    <body>
      <div id="__next">
        <div className={quicksand.variable}>{children}</div>
      </div>
    </body>
  </html>
)

export default RootLayout
