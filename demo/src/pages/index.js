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
  top: 'calc($$height - $$gap)'
})

const BodyContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$blue'
})

const BodyText = styled('div', {
  color: '$darkBlue',
  fontFamily: '$title',
  fontSize: '20px'
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

const Center = styled('div', {
  zIndex: 4,
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mixBlendMode: 'color-burn'
})

const Link = styled('a', {
  textDecoration: 'none',
  color: '$primary',
  '&:hover': {
    color: '$primaryHover'
  }
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
            <Link href="https://github.com/woofers/react-wavify">
              react-wavify
            </Link>
          </Text>
        </HeaderWrapper>
        <Pause onClick={togglePaused} paused={isPaused} />
      </Center>
      <BodyWrapper>
        <Wave
          style={{ display: 'block' }}
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
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
          <BodyText>A simple React component which creates an animated wave.</BodyText>
        </BodyContainer>
      </BodyWrapper>
    </Wrapper>
  )
}

export default App
