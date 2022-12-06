import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold px-3 border border-gray-400 rounded shadow h-8' type="button" name="button" onClick={onClick}>{text}</button>
  )
}

export default Button