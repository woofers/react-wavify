'use client'

import React from 'react'
import Global from 'components/global'

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Global />
    {children}
  </>
)

export default Providers
