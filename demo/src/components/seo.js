import React from 'react'
import Head from 'next/head'

const name = 'Jaxson Van Doorn'
const ogImage = 'https://jaxs.onl/react-wavify/meta-image.png'
const siteMetadata = {
  title: 'react-wavify',
  author: name,
  description: 'Animated wave component for React'
}

const SEO = ({ description, lang, meta, title, noIndex }) => {
  const metaDescription = description || siteMetadata.description
  const tab = title || siteMetadata.title
  const data = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: tab,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: ogImage,
    },
    {
      name: 'twitter:image',
      content: ogImage,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: name,
    },
    {
      name: `twitter:title`,
      content: tab,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta)
  return (
    <Head>
      <title>
        {tab !== siteMetadata.title ? `${tab} | ${siteMetadata.title}` : tab}
      </title>
      {data.map(({ name, property, content }) => (
        <meta
          key={name ?? property}
          name={name}
          property={property}
          content={content}
        />
      ))}
      <link
        rel="manifest"
        href="/react-wavify/manifest.webmanifest"
        crossOrigin="anonymous"
      />
      <link rel="apple-touch-icon" sizes="32x32" href="/react-wavify/icons/mask-32x32.png" />
      <link rel="apple-touch-icon" sizes="48x48" href="/react-wavify/icons/mask-48x48.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/react-wavify/icons/mask-72x72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/react-wavify/icons/mask-96x96.png" />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/react-wavify/icons/mask-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/react-wavify/icons/mask-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/react-wavify/icons/mask-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/react-wavify/icons/mask-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/react-wavify/icons/mask-512x512.png"
      />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Head>
  )
}

SEO.defaultProps = {
  meta: [],
  description: '',
  title: '',
  noIndex: false,
}

export default SEO
