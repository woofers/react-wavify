'use client'

import React, { useState } from 'react'
import Wave from 'react-wavify'
import Pause from 'components/pause'

const WaveSection: React.FC<Nothing> = () => {
  const [isPaused, setPause] = useState(false)
  const togglePaused = () => setPause(!isPaused)
  return (
    <>
      <div className="flex justify-center mb-4">
        <Pause onClick={togglePaused} paused={isPaused} />
      </div>
      <Wave
        paused={isPaused}
        fill="var(--color-blue)"
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
