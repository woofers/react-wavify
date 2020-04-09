import React, { Props, Component, SVGProps, RefObject} from 'react'

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
  static defaultProps: {
    paused: boolean
    fill: string
  }
  container: RefObject<HTMLDivElement>
  defaults: WaveOptions
  options: WaveOptions
  lastUpdate: any
  elapsed: number
  step: number
  frameId: number
  constructor(props: WaveProps)
  calculateWavePoints(): {
    x: number
    y: number
  }[]
  buildPath(points: Array<Point>): string
  width: () => number
  height: () => number
  redraw(): void
  draw(): void
  update(): void
  resume(): void
  componentDidUpdate(prevProps: WaveProps): void
  componentDidMount(): void
  componentWillUnmount(): void
  render(): JSX.Element
}

export default Wave
