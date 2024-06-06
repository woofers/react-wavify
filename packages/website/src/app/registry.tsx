'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { getCssText } from 'stitches'

const StitchesRegistry: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isRendered, setIsRendered] = useState(false)

  useServerInsertedHTML(() => {
    if (!isRendered) {
      setIsRendered(true)
      return (
        <style
          id="stitches"
          key="style"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      )
    }
  })

  return <>{children}</>
}

export default StitchesRegistry
