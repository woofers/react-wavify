'use client'

import React, { useState } from 'react'
import { styled } from 'stitches'
import Wave from 'react-wavify'
import Pause from 'components/pause'

const PauseWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

const WaveSection: React.FC<Nothing> = () => {
  const [isPaused, setPause] = useState(false)
  const togglePaused = () => setPause(!isPaused)
  return (
    <>
      <PauseWrapper className="flex justify-center">
        <Pause onClick={togglePaused} paused={isPaused} />
      </PauseWrapper>
      <Wave
        paused={isPaused}
        fill="var(--colors-blue)"
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.2,
          points: 4
        }}
      />
    </>
  )
}

export default WaveSection
