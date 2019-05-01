/** @jsx jsx */
import { useState } from 'react'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { jsx, css } from '@emotion/core'

const Pause = p => {
  const style = css`
    font-size: 75px;
    color: ${p.color};
    border: 0;
    background-color: transparent;
  `
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
    <button onKeyPress={handleButton} onMouseDown={handleClick} css={style}>
      <Icon icon={button} aria-label={icon().iconName} aria-hidden="false" />
    </button>
  )
}

export default Pause
