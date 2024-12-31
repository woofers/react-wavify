import React, { useEffect } from 'react'
import WaveBase from './wave'
import { WaveProps } from './types'

declare global {
  var __isDev__: boolean
}

const normalizeProps = ({ options, ...rest }: WaveProps) => Object.assign(
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
)

const Wave: React.FC<WaveProps> = (props) => <WaveBase {...normalizeProps(props)} />

type Point = {
  x: number;
  y: number;
}

const _buildPath = (points: Point[], width: number, height: number) => {
  let svg = `M ${points[0].x} ${points[0].y}`
  const initial = {
    x: (points[1].x - points[0].x) / 2,
    y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y)
  }
  const cubic = (a: Point, b: Point) => ` C ${a.x} ${a.y} ${a.x} ${a.y} ${b.x} ${b.y}`
  svg += cubic(initial, points[1])
  let point = initial
  for (let i = 1; i < points.length - 1; i++) {
    point = {
      x: points[i].x - point.x + points[i].x,
      y: points[i].y - point.y + points[i].y
    }
    svg += cubic(point, points[i + 1])
  }
  svg += ` L ${width} ${height}`
  svg += ` L 0 ${height} Z`
  return svg
}

const _calculateWavePoints = ({ points: propPoints, amplitude, height: propHeight, speed, step, containerWidth }: Pick<WaveProps, 'points' | 'amplitude' | 'height' | 'speed'> & { step: number, containerWidth: number }) => {
  const points = [] as Point[]
  for (let i = 0; i <= Math.max(propPoints!, 1); i++) {
    const scale = 100
    const x = (i / propPoints!) * containerWidth
    const seed = (step + (i + (i % propPoints!))) * speed! * scale
    const height = Math.sin(seed / scale) * amplitude!
    const y = Math.sin(seed / scale) * height + propHeight!
    points.push({ x, y })
  }
  return points
}

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

const useCallbackRef = <T extends (...args: any[]) => any>(handler: T) => {
  const handlerRef = React.useRef<T | null>(null);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return React.useCallback((...args: Parameters<T>) => handlerRef.current?.(...args), [])
}

let reportedError: boolean

const Other: React.FC<WaveProps> = (props) => {
  const _inhert = React.useRef<{
    _lastUpdate: Date | number
    _elapsed: number
    _step: number
    _frameId?: number
  }>({
    _lastUpdate: 0,
    _elapsed: 0,
    _step: 0,
  })
  const _container = React.useRef<HTMLDivElement | null>(null)
  const [_state, _setState] = React.useState<{ path: string }>({ path: '' })

  const _width = React.useCallback(() => _container.current!.offsetWidth, [])
  const _height = React.useCallback(() => _container.current!.offsetHeight, [])

  const _redraw = React.useCallback(() => {
    const width = _width()
    const height = _height()
    _setState({
      path: _buildPath(_calculateWavePoints({
        amplitude: props.amplitude,
        height: props.height,
        speed: props.speed,
        points: props.points,
        step: _inhert.current._step,
        containerWidth: width
      }), width, height)
    })
  }, [_width, _height, props.height, props.amplitude, props.speed, props.points])

  const _draw = React.useCallback(() => {
    if (!props.paused) {
      const now = new Date()
      _inhert.current._elapsed += (now as unknown as number) - (_inhert.current._lastUpdate as unknown as number)
      _inhert.current._lastUpdate = now
    }
    const scale = 1000
    _inhert.current._step = (_inhert.current._elapsed * Math.PI) / scale
    _redraw()
  }, [_redraw, props.paused])

  const _resume = React.useCallback(() => {
    _inhert.current._frameId = window.requestAnimationFrame(_update)
    _inhert.current._lastUpdate = new Date()
  }, [_update])

  const _update = React.useCallback(() => {
    _draw()
    if (_inhert.current._frameId) {
      _resume()
    }
  }, [_redraw])


  useEffect(() => {
      if (!_inhert.current._frameId) {
        _resume()
      }
  
    return () => {
      window.cancelAnimationFrame(_inhert.current._frameId!)
      _inhert.current._frameId = 0
    }
  }, [])
  if (__isDev__) {
    if (
      !reportedError &&
      typeof navigator !== 'undefined' &&
      navigator.product === 'ReactNative'
    ) {
      reportedError = true
      throw new Error('react-wavify is not supported in react-native.')
    }
  }
  const {
    style,
    className,
    fill,
    paused,
    children,
    id,
    svgId,
    svgPathId,
    d,
    ref,
    height,
    amplitude,
    speed,
    points,
    ...rest
  } = props
  return (
    <div
      style={{ width: '100%', display: 'inline-block', ...style }}
      className={className}
      id={id}
      ref={_container}
    >
      <svg
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id={svgId}
      >
        {children}
        <path
          {...Object.assign(
            {},
            { d: _state.path, fill, id: svgPathId },
            rest
          )}
        />
      </svg>
    </div>
  )
}

if (__isDev__) {
  Wave.displayName = 'Wave'
}

export default Wave
