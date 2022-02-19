import Wave from 'react-wavify'
import Pause from 'components/pause'
import { useState } from 'react'
import { styled, globalCss } from 'stitches'

const sand = '#FADC96'
const water = '#5E9EF1'
const brown = alpha => `rgba(191, 136, 85, ${alpha})`
const splash = brown(1)
const hover = brown(0.9)

const useGlobal = globalCss({
  '::selection' :{
    background: '#FFF9CC'
  },
  'a': {
    textDecoration: 'none'
  },
  'p:hover, *:hover': {
    color: hover
  }
})


const Text = styled('p', {
  fontFamily: `'Quicksand', sans-serif`,
  fontWeight: 700,
  fontSize: '5.5em',
  marginTop: 0,
  marginBottom: 0,
  color: splash,
  wordWrap: 'none'
})

const Full = styled('div', {
  background: water,
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 1
})

const WaveDiv = styled('div', {
  background: sand,
  width: '100%',
  height: '400px',
  position: 'absolute',
  zDndex: -1
/*
  @media screen and (max-width: 550px) {
    height: 300px;
  }
*/
})

const PauseWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

const margin = `
  margin-top: 3.5em;
  margin-bottom: 1.6em;
`

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '5.5em',
  marginBottom: '2.5em'
/*
  @media screen and (max-width: 550px) {
    ${margin}
    a {
      font-size: 0.75em;
    }
  }
  @media screen and (max-width: 405px) {
    ${margin}
    a {
      font-size: 0.5em;
    }
  }
*/
})

const App = () => {
  const [isPaused, setPause] = useState(false)
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
          <Pause color={splash} onClick={togglePaused} />
        </PauseWrapper>
        <Wave paused={isPaused}
              fill={water}
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
