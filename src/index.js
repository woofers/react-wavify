import React from 'react'
import WaveBase from './wave'

const PropTypes = __isDev__ ? require('prop-types') : {}

const defaults = {
  height: 20,
  amplitude: 20,
  speed: 0.15,
  points: 3,
}

const Wave = ({ options, ...rest }) =>
  <WaveBase {...defaults} {...options} {...rest} />

Wave.defaultProps = {
  paused: false,
  fill: '#fff'
}

if (__isDev__) {
  Wave.displayName = 'Wave'

  Wave.propTypes = {
    paused: PropTypes.bool,
    fill: PropTypes.string,
    options: PropTypes.object
  }
}


export default Wave
