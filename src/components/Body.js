import React from 'react'
import { useTheme } from "./ThemeContext";

function Body({children}) {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#FFFFFF",
    color: darkTheme ? "#FFFFFF" : "#333",
  };
  return (
    <div className="container mx-auto flex justify-center items-center" style={themeStyles}>
        {children}
    </div>
  )
}

export default Body