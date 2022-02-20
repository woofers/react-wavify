import Wave from 'react-wavify'
import Pause from 'components/pause'
import { useState } from 'react'
import { styled, globalCss } from 'stitches'

const primary = '#bf8855'
const primaryHover = '#bf8855e6'
const secondary = '#fadc96'
const blue = '#5e9ef1'

const useGlobal = globalCss({
  '@import': [
    `url('https://fonts.googleapis.com/css?family=Quicksecondary:400,700')`
  ],
  '::selection': {
    background: '#fff9cc'
  },
  a: {
    textDecoration: 'none'
  },
  'p:primaryHover, *:primaryHover': {
    color: primaryHover
  }
})

const Text = styled('p', {
  fontFamily: `'Quicksand', sans-serif`,
  fontWeight: 700,
  fontSize: '5.5em',
  marginTop: 0,
  marginBottom: 0,
  color: primary,
  wordWrap: 'none'
})

const Full = styled('div', {
  background: blue,
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 1
})

const WaveDiv = styled('div', {
  background: secondary,
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
  a: {
    fontSize: '0.5em'
  },
  '@xsm': {
    a: {
      fontSize: '0.75em'
    }
  },
  '@sm': {
    marginTop: '5.5em',
    marginBottom: '2.5em',
    a: {
      fontSize: '16px'
    }
  }
})

const App = () => {
  const [isPaused, setPause] = useState()
  const togglePaused = () => setPause(!isPaused)
  useGlobal()
  return (
    <Full>
      <WaveDiv>
        <Center>
          <a href="https://github.com/woofers/react-wavify">
            <Text>react-wavify</Text>
          </a>
        </Center>
        <PauseWrapper>
          <Pause color={primary} onClick={togglePaused} />
        </PauseWrapper>
        <Wave
          paused={isPaused}
          fill={blue}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.2,
            points: 4
          }}
        />
      </WaveDiv>
    </Full>
  )
}

export default App
