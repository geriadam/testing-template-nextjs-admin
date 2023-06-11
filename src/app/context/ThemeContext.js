'use client'
import React from 'react'
import defaultTheme from '../themes/default'

export const ThemeContext = React.createContext({ theme: defaultTheme })

export const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}