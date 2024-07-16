'use client'

import React from 'react'
import { styled } from 'stitches'
import Wave from 'components/wave'

const BodyWrapper = styled('div', {
  position: 'relative'
})

const BodyContainer = styled('div', {
  top: '-80px',
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px'
})

const Text = styled('span', {
  fontFamily: '$title',
  fontWeight: 700,
  fontSize: '5.5em',
  marginTop: 0,
  marginBottom: 0,
  letterSpacing: '-3px'
})

const Fullscreen = styled('div', {
  background: '$blue',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 1
})

const WaveWrapper = styled('div', {
  background: '$secondary',
  width: '100%',
  position: 'absolute',
  zIndex: -1,
  height: '300px',
  '@sm': {
    height: '400px'
  }
})

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3.5em',
  marginBottom: '1.6em',
  '@sm': {
    marginTop: '5.5em',
    marginBottom: '2.5em'
  }
})

const Link = styled('a', {
  textDecoration: 'none',
  fontSize: '0.5em',
  color: '$primary',
  '&:hover': {
    color: '$primaryHover'
  },
  '@xsm': {
    fontSize: '0.75em'
  },
  '@sm': {
    fontSize: '16px'
  }
})

const App: React.FC<Nothing> = () => (
  <Fullscreen className="fixed top-0 bottom-0 left-0 right-0 opacity-100 bg-[var(--color-blue)]">
    <WaveWrapper className="w-full absolute bg-[var(--color-secondary)] [z-index:-1] h-[300px] xs:h-[400px]">
      <Center className="flex justify-center mt-[56px] mb-[25.6px] xs:mt-[88px] xs:mb-[40px]">
        <Link href="https://github.com/woofers/react-wavify" className="no-underline text-[8px] text-[var(--color-primary)] hover:text-[var(--color-primaryHover)] xs:text-base xxs:text-xs">
          <Text className="font-bold mt-0 mb-0 text-[88px] [font-family:var(--fonts-title)] [letter-spacing:-0.3px]">react-wavify</Text>
        </Link>
      </Center>
      <Wave />
      <BodyWrapper className="relative">
        <BodyContainer className="absolute w-full flex justify-center items-center text-xl top-[-80px]" />
      </BodyWrapper>
    </WaveWrapper>
  </Fullscreen>
)

export default App
