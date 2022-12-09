import React from 'react'
import Button from './Button'
import { useTheme, useThemeUpdate } from "./ThemeContext"

const ContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' :'CCC',
        color: darkTheme ? '#CCC' : '#333'
    }
  return (
    <div>
        <Button onClick={toggleTheme} text={'toggleTheme'}></Button>
        <div style={themeStyles}>ContextComponent</div>
    </div>
  )
}

export default ContextComponent