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

export type WaveProps = BaseProps &
  WaveOptions & {
    paused?: boolean
    fill?: string
    options?: WaveOptions
    ref?: string | unknown
    svgId?: string
    svgPathId?: string
  }
