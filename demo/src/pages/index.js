import { useState } from 'react'
import { styled } from 'stitches'
import Wave from 'react-wavify'
import Pause from 'components/pause'

const Wrapper = styled('div', {
  $$gap: '84px',
  $$height: '324px',
  '@xsm': {
    $$gap: '90px',
    $$height: '356px'
  },
  '@sm': {
    $$height: '412px',
    $$gap: '58px'
  }
})

const BodyWrapper = styled('div', {
  position: 'absolute',
  zIndex: 3,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  top: 'calc($$height - $$gap)',
  minHeight: 'calc(100vh - $$height)'
})

const BodyContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$blue'
})

const TextContainer = styled('div', {
  maxWidth: '600px',
  margin: '0 20px'
})

const MiniNav = styled('nav', {
  display: 'flex',
  gap: '0 8px',
  pb: '12px'
})

const BodyBold = styled('div', {
  color: '$darkBlue',
  fontFamily: '$body',
  fontSize: '20px',
  fontWeight: 600
})

const BodyText = styled('div', {
  color: '$darkBlue',
  fontFamily: '$body',
  fontSize: '20px',
})

const HeaderWrapper = styled('div', {
  pt: '56px',
  pb: '25.6px',
  '@sm': {
    pt: '76px',
    pb: '30px'
  }
})

const Text = styled('span', {
  fontFamily: '$title',
  whiteSpace: 'nowrap',
  fontWeight: 700,
  fontSize: '44px',
  my: 0,
  letterSpacing: '-1.5px',
  '@xsm': {
    fontSize: '66px',
    letterSpacing: '-2.25px'
  },
  '@sm': {
    fontSize: '88px',
    letterSpacing: '-3px'
  }
})

const Background = styled('div', {
  zIndex: 0,
  position: 'fixed',
  top: 0,
  width: '100%',
  height: 'calc($$height)',
  background: '$secondary'
})

const Center = styled('header', {
  zIndex: 3,
  position: 'fixed',
  top: 0,
  width: '100%',
  height: 'calc($$height)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const LinkHeader = styled('a', {
  textDecoration: 'none',
  color: '$primary',
  transition: 'color 0.15s ease-out',
  '&:hover': {
    color: '$primaryHover'
  }
})

const PlainLink = styled('a', {
  textDecoration: 'none',
  color: '$current',
  '&:hover': {
    color: '$current'
  }
})

const Link = styled('a', {
  textDecoration: 'none',
  color: '#1e2a5b',
  transition: 'color 0.15s ease-out',
  '&:hover': {
    color: '$current'
  }
})

const Footer = styled('footer', {
  zIndex: 5,
  opacity: 0.5,
  position: 'absolute',
  bottom:  'calc(12px + env(safe-area-inset-left, 0px))',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const App = () => {
  const [isPaused, setPause] = useState()
  const togglePaused = () => setPause(!isPaused)
  return (
    <Wrapper>
      <Background />
      <Center>
        <HeaderWrapper>
          <Text>
            <LinkHeader href="https://github.com/woofers/react-wavify">
              react-wavify
            </LinkHeader>
          </Text>
        </HeaderWrapper>
        <Pause onClick={togglePaused} paused={isPaused} />
      </Center>
      <BodyWrapper>
        <Wave
          paused={isPaused}
          fill="var(--colors-blue)"
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.2,
            points: 4
          }}
        />
        <BodyContainer>
          <TextContainer>
            <MiniNav>
              <BodyBold>NPM 134k+ Downloads</BodyBold>
              <BodyBold aria-hidden>|</BodyBold>
              <BodyBold>GitHub 200+ Stars</BodyBold>
            </MiniNav>
            <BodyText>A simple React component which creates an animated wave.</BodyText>
            <BodyText>This component is heavily adapted from <Link href="https://github.com/grimor">Mikołaj Stolarski</Link>{"'"}s awesome <Link href="https://codepen.io/grimor/pen/qbXLdN">Codepen</Link>
          {' '}and is functionally similar to <Link href="https://github.com/peacepostman">Benjamin Grauwin</Link>{"'"}s <Link href="https://github.com/peacepostman/wavify">Wavify</Link> plug-in.</BodyText>
          </TextContainer>
        </BodyContainer>
      </BodyWrapper>
      <Footer>
        <BodyText>made by <PlainLink href="https://jaxs.onl">jaxson</PlainLink></BodyText>
      </Footer>
    </Wrapper>
  )
}

export default App
