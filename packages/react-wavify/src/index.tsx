import React from 'react'
import WaveBase from './wave'
import { WaveProps } from './types'

declare global {
  var __isDev__: boolean
}

const Wave: React.FC<WaveProps> = ({ options, ...rest }) => (
  <WaveBase
    {...Object.assign(
      {
        fill: '#fff',
        paused: false,
        height: 20,
        amplitude: 20,
        speed: 0.15,
        points: 3
      },
      options,
      rest as typeof rest & { ref?: any }
    )}
  />
)

if (__isDev__) {
  Wave.displayName = 'Wave'
}

export default Wave
