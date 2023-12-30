import Root from 'components/root'
import type { Metadata, Viewport } from 'next'

const name = 'Jaxson Van Doorn'
const ogImage = '/meta-image.png'

const title = 'react-wavify'
const author = name
const description = 'Animated wave component for React'
const alt = 'Cover image for React Wavify'

export const viewport = {
  width: 'device-width',
  viewportFit: 'cover',
  initialScale: 1,
  themeColor: '#fadc96'
} satisfies Viewport

export const metadata = {
  title,
  description,
  creator: name,
  publisher: name,
  icons: {
    icon: [{ url: '/react-wavify/favicon.ico' }],
    shortcut: ['/react-wavify/favicon.ico'],
    apple: [
        ...([32, 48, 72, 144, 192, 256, 384, 512].map(size => ({ url: `/react-wavify/icons/mask-${size}x${size}.png`, sizes: `${size}x${size}`, type: 'image/png' })))
    ],
    other: []
  },
  manifest: '/react-wavify/manifest.webmanifest',
  metadataBase: process.env.NODE_ENV === "production" ? new URL('https://jaxs.onl/react-wavify') : new URL('http://localhost:3000/react-wavify'),
  twitter: {
    card: 'summary_large_image',
    title,
    description: description,
    creator: '@jaxsonvandoorn',
    images: {
      url: ogImage,
      alt
    }
  },
  openGraph: {
    title: name,
    description,
    //type: 'article',
    images: [{
      type: 'image/png',
      url: ogImage,
      alt,
      width: 1200,
      height: 630,
    }]
  },
} satisfies Metadata

const Page: React.FC<Nothing> = () => {
  return (
    <>
      <Root />
    </>
  )
}

export default Page
