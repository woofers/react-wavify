import './global.css'
//import { Quicksand } from 'next/font/google'

/*
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--fonts-title',
  preload: true,
  display: 'swap'
})
  */
 //className={quicksand.variable}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head />
    <body>
      <div id="__next">
        <div >{children}</div>
      </div>
    </body>
  </html>
)

export default RootLayout
