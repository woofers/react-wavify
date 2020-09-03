import React from 'react'
import WaveBase from './wave'
import PropTypes from 'prop-types'

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

Wave.propTypes = {
  paused: PropTypes.bool,
  fill: PropTypes.string,
  options: PropTypes.object
}

export default Wave
