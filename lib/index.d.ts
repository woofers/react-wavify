import React, { Props, Component, SVGProps } from 'react'

interface WaveOptions {
  height?: number
  amplitude?: number
  speed?: number
  points?: number
  [key: string]: number
}

interface WaveProps extends Props<WaveProps>, SVGProps<SVGPathElement> {
  paused?: boolean
  fill?: string
  options?: WaveOptions
  ref?: string
}

interface WaveState {
  path: string
}

interface Point {
  x: number
  y: number
}

declare class Wave extends Component<WaveProps, WaveState> {
}

export default Wave
