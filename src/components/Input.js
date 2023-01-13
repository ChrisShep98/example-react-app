import React from "react";
import { useTheme } from "./ThemeContext";

function Input({onChange}) {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#FFFFFF",
    color: darkTheme ? "#FFFFFF" : "#333",
  };
  return (
    <div className="inline-block">
      <input
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-8"
        style={themeStyles}
        type="date"
        onChange={onChange}
      ></input>
    </div>
  );
}

export default Input;
