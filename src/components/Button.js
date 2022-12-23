import React from 'react'
import { useTheme, useThemeUpdate } from "./ThemeContext"

const Button = ({text, onClick}) => {
  const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' :'#FFFFFF',
        color: darkTheme ? '#FFFFFF' : '#333'
    }
  return (
    <button style={themeStyles} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold px-3 border border-gray-400 rounded shadow h-8' type="button" name="button" onClick={onClick}>{text}</button>
  )
}

export default Button