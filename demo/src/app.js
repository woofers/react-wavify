/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import Wave from 'react-wavify'
import Pause from './pause'
import { useState } from 'react'

const App = () => {
  const sand = '#FADC96'
  const water = '#5E9EF1'
  const brown = alpha => `rgba(191, 136, 85, ${alpha})`
  const splash = brown(1)
  const hover = brown(0.9)
  const [isPaused, setPause] = useState(false)
  const togglePaused = () => setPause(!isPaused)

  const global = css`
    @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');
    ::selection {
      background: #FFF9CC;
    }

    a {
      text-decoration: none;
    }

    p:hover, *:hover {
      color: ${hover};
    }
  `

  const text = css`
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 5.5em;
    margin-bottom: 0.4em;
    color: ${splash};
    word-wrap: none;
    @media screen and (max-width: 550px) {
      font-size: 3.5em;
    }
  `

  const full = css`
    background: ${water};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
  `

  const wave = css`
    background: ${sand};
    width: 100%;
    height: 400px;
    position: absolute;
    z-index: -1;
    @media screen and (max-width: 550px) {
      height: 300px;
    }
  `

  const pause = css`
    display: flex;
    justify-content: center;
  `

  const center = css`
    display: flex;
    justify-content: center;
  `

  return (
    <div css={full}>
      <Global styles={global} />
      <div css={wave}>
        <div css={center}>
          <a href="https://github.com/woofers/react-wavify">
            <p css={text}>react-wavify</p>
          </a>
        </div>
        <div css={pause}>
          <Pause color={splash} onClick={togglePaused} />
        </div>
        <Wave paused={isPaused}
              fill={water}
              options={{
                height: 20,
                amplitude: 20,
                speed: 0.2,
                points: 4
              }}
        />
      </div>
    </div>
  )
}

export default App
