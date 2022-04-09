import { styled } from 'stitches'
import { PlayIcon, PauseIcon } from 'icons'

const Button = styled('button', {
  fontSize: '75px',
  border: '0',
  color: '$primary',
  backgroundColor: 'transparent',
  '&:hover': {
    color: '$primaryHover'
  },
  '> svg': {
    width: '65.625px'
  }
})

const Pause = ({ color, paused, onClick, ...rest }) => {
  const handleClick = () => {
    onClick()
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
      onMouseUp={handleClick}
      title={label}
      aria-label={label}
      {...rest}
    >
      {paused ? <PlayIcon /> : <PauseIcon />}
    </Button>
  )
}

export default Pause
