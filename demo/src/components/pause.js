import { useState } from 'react'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { styled, globalCss } from 'stitches'

const Button = styled('button', {
  fontSize: '75px',
  border: '0',
  backgroundColor: 'transparent'
})

const Pause = ({ color, ...p }) => {
  const upper = s => s.charAt(0).toUpperCase() + s.slice(1)
  const [button, setButton] = useState(faPause)
  const isPaused = () => button.iconName === 'pause'
  const icon = () => isPaused() ? faPlay : faPause
  const handleClick = () => {
    setButton(icon())
    p.onClick()
  }
  const handleButton = (e) => {
    const key = e.eventCode || e.which
    const enter = 13
    const space = 32
    if (key === enter || key === space) handleClick()
  }
  return (
    <Button css={{ color }} onKeyPress={handleButton} onMouseDown={handleClick}>
      <Icon icon={button} title={upper(button.iconName)} aria-hidden="false" />
    </Button>
  )
}

export default Pause
