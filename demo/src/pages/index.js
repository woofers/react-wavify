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

const PauseWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

const margin = {
  marginTop: '3.5em',
  marginBottom: '1.6em'
}

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

const App = () => {
  const [isPaused, setPause] = useState()
  const togglePaused = () => setPause(!isPaused)
  return (
    <Fullscreen>
      <WaveWrapper>
        <Center>
          <Link href="https://github.com/woofers/react-wavify">
            <Text>react-wavify</Text>
          </Link>
        </Center>
        <PauseWrapper>
          <Pause onClick={togglePaused} paused={isPaused} />
        </PauseWrapper>
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
        <BodyWrapper>
          <BodyContainer></BodyContainer>
        </BodyWrapper>
      </WaveWrapper>
    </Fullscreen>
  )
}

export default App
