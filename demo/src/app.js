/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { Component } from "react"
import Wave from "react-wavify"

class App extends Component {
  render () {
    const sand = '#FADC96'
    const water = '#5E9EF1'
    const splash = '#BF8855'

    const global = css`
      @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');
      ::selection {
        background: #FFF9CC;
      }
    `

    const text = css`
      font-family: 'Quicksand', sans-serif;
      text-align: center;
      font-weight: 700;
      font-size: 5.5em;
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

    return (
      <div css={full}>
        <Global styles={global} />
        <div css={wave}>
          <p css={text}>react-wavify</p>
          <Wave fill={water}
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
}

export default App
