import { useState } from 'react'
import { PlayIcon, PauseIcon } from 'icons'
import { styled, globalCss } from 'stitches'

const Button = styled('button', {
  fontSize: '75px',
  border: '0',
  backgroundColor: 'transparent',
  '> svg': {
    width: '0.875em'
  }
})

const Pause = ({ color, ...p }) => {
  const [paused, setPaused] = useState()
  const handleClick = () => {
    setPaused(value => !value)
    p.onClick()
  }
  const handleButton = e => {
    const key = e.eventCode || e.which
    const enter = 13
    const space = 32
    if (key === enter || key === space) handleClick()
  }
  const label = paused ? 'Play' : 'Pause'
  return (
    <Button
      css={{ color }}
      onKeyPress={handleButton}
      onMouseDown={handleClick}
      title={label}
      aria-label={label}
    >
      {paused ? <PlayIcon /> : <PauseIcon />}
    </Button>
  )
}

export default Pause
