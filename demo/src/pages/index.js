import { useState } from 'react'
import { styled } from 'stitches'
import Wave from 'react-wavify'
import Pause from 'components/pause'

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

const BodyText = styled('div', {
  color: '$darkBlue',
  fontFamily: '$title'
})

const HeaderWrapper = styled('div', {
  pt: '56px',
  pb: '25.6px',
  '@sm': {
    pt: '80px',
    pb: '28px'
  }
})

const Text = styled('span', {
  fontFamily: '$title',
  fontWeight: 700,
  fontSize: '44px',
  marginTop: 0,
  marginBottom: 0,
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

const WaveWrapper = styled('div', {
  background: '$secondary',
  width: '100%'
})

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  pb: '8px'
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
    <WaveWrapper>
      <Center>
        <HeaderWrapper>
          <Link href="https://github.com/woofers/react-wavify">
            <Text>react-wavify</Text>
          </Link>
        </HeaderWrapper>
        <Pause onClick={togglePaused} paused={isPaused} />
      </Center>
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
      <BodyWrapper>
        <BodyContainer><BodyText>A simple React component which creates an animated wave.</BodyText></BodyContainer>
      </BodyWrapper>
    </WaveWrapper>
  )
}

export default App
