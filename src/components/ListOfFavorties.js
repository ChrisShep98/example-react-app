import React from 'react'

// might want to add picture along with title in props but just doing title for now

function ListOfFavorties({title}) {
  return (
    <li>{title}</li>
  )
}

export default ListOfFavorties