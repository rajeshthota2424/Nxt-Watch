import React from 'react'

const ThemeContext = React.createContext({
  isDark: true,
  savedVideosList: [],
  onChangeTheme: () => {},
  onAddToList: () => {},
})

export default ThemeContext
