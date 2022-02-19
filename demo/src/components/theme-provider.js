import React, { useEffect, useState, useContext, createContext } from 'react'
import { theme } from 'stitches'

const themes = {
  light: theme
}

const ThemeClass = ({ children, theme, name }) => {
  const isDefault = name === 'light'
  const className = !isDefault ? theme : undefined
  useEffect(() => {
    if (window === 'undefined' || !className) return
    document.body.classList.add(className)
    return () => document.body.classList.remove(className)
  }, [className])
  return <>{children}</>
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [name, setTheme] = useState('light')
  const theme = themes[name]
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeClass theme={theme} name={name}>
        {children}
      </ThemeClass>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
