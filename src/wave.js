import React, { Component } from 'react'

class Wave extends Component {
  constructor (props) {
    super(props)
    this.container = React.createRef()
    this.state = { path: '' }
    this.options = {
      height: 20,
      amplitude: 20,
      speed: 0.15,
      points: 3,
      ...props.options
    }
    this.paused = false
    this.lastUpdate = 0
    this.elapsed = 0
    this.update = this.update.bind(this)
  }

  calculateWavePoints (factor) {
    const points = []
    for (var i = 0; i <= Math.max(this.options.points, 1); i ++) {
      const scale = 100
      const x = i / this.options.points * this.width()
      const seed = (factor + (i + i % this.options.points)) * this.options.speed * scale
      const height = Math.sin(seed / scale) * this.options.amplitude
      const y = Math.sin(seed / scale) * height  + this.options.height
      points.push({x, y})
    }
    return points
  }

  buildPath (points) {
    let svg = `M ${points[0].x} ${points[0].y}`
    const initial = {
      x: (points[1].x - points[0].x) / 2,
      y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y)
    }
    const cubic = (a, b) => ` C ${a.x} ${a.y} ${a.x} ${a.y} ${b.x} ${b.y}`
    svg += cubic(initial, points[1])
    let point = initial
    for (let i = 1; i < points.length - 1; i ++) {
      point = {
        x: (points[i].x - point.x) + points[i].x,
        y: (points[i].y - point.y) + points[i].y
      }
      svg += cubic(point, points[i + 1])
    }
    svg += ` L ${this.width()} ${this.height()}`
    svg += ` L 0 ${this.height()} Z`
    return svg
  }

  width = () => this.container.current.offsetWidth
  height = () => this.container.current.offsetHeight

  update () {
    const now = new Date()
    this.elapsed += (now - this.lastUpdate)
    this.lastUpdate = now
    const scale = 1000
    const factor = this.elapsed * Math.PI / scale
    this.setState({ path: this.buildPath(this.calculateWavePoints(factor)) })
    if (this.frameId) this.resume()
  }

  resume () {
    this.frameId = window.requestAnimationFrame(this.update)
    this.lastUpdate = new Date()
  }

  pause () {
    window.cancelAnimationFrame(this.frameId)
    this.frameId = 0
  }

  componentDidMount () {
    if (!this.frameId) {
      this.resume()
    }
  }

  componentWillUnmount () {
    this.pause()
  }

  render () {
    return (
      <div style={{ width: '100%', display: 'inline-block' }} ref={this.container}>
        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d={this.state.path} fill={this.props.fill}/>
        </svg>
      </div>
    )
  }
}

export default Wave
