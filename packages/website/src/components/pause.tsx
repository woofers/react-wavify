'use client'

import { styled } from 'stitches'
import { PlayIcon, PauseIcon } from 'icons'
import clsx from 'clsx'

const Button = styled('button', {
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  fontSize: '75px',
  border: '0',
  color: '$primary',
  backgroundColor: 'transparent',
  '&:hover': {
    color: '$primaryHover'
  },
  '> svg': {
    width: '0.875em'
  }
})

type PauseProps = {
  color?: string
  paused?: boolean
  onClick: () => void
  className?: string
}

const Pause: React.FC<PauseProps> = ({ color, paused, onClick, className, ...rest }) => {
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
      className={clsx("text-[75px] border-0 text-[var(--color-primary)] bg-transparent [-webkit-tap-highlight-color:rgba(0,0,0,0)] hover:bg-[var(--color-primaryHover)]", className)}
      {...rest}
    >
      {paused ? <PlayIcon className="w-[14px]" /> : <PauseIcon className="w-[14px]" />}
    </Button>
  )
}

export default Pause
