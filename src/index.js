import React from 'react'
import WaveBase from './wave'


const defaults = {
  height: 20,
  amplitude: 20,
  speed: 0.15,
  points: 3,
}

const Wave = ({ options, ...rest }) =>
  <WaveBase options={{ ...defaults, ...options }} {...rest} />

export default Wave
