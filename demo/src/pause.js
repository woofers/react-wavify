/** @jsx jsx */
import { useState } from 'react'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { jsx, css } from '@emotion/core'

const Pause = p => {
  const style = css`
    font-size: 75px;
    color: ${p.color};
  `
  const [button, setButton] = useState(faPause)
  const handleClick = () => {
    setButton(button.iconName === 'pause' ? faPlay : faPause)
  }
  return (
    <div onClick={handleClick} css={style}>
      <Icon icon={button} />
    </div>
  )
}

export default Pause
