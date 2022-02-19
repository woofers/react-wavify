import React from 'react'
import Head from 'next/head'

const GoogleFonts = ({ children, fonts }) => {
  const href = `https://fonts.googleapis.com/css2?family=${fonts.join(
    '&family='
  )}&display=swap`
  return (
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="true"
      />
      <link href={href} rel="stylesheet" />
      {children}
    </Head>
  )
}

export default GoogleFonts
