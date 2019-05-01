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
  return (
    <button onMouseDown={handleClick} css={style}>
      <Icon icon={button} aria-label={icon().iconName} aria-hidden="false" />
    </button>
  )
}

export default Pause
