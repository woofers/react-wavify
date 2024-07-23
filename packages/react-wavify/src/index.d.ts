import React from 'react'

type WaveOptions = {
  height?: number
  amplitude?: number
  speed?: number
  points?: number
}

type BaseProps = Omit<
  React.SVGProps<SVGPathElement>,
  'ref' | 'height' | 'width' | 'points'
>

type WaveProps = BaseProps &
  WaveOptions & {
    paused?: boolean
    fill?: string
    options?: WaveOptions
    ref?: string
    svgId?: string
    svgPathId?: string
  }

declare const Wave: React.FC<WaveProps>

export = Wave
