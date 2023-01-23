import React from 'react'

// might want to add picture along with title in props but just doing title for now

function ListOfFavorties({title}) {
  return (
    <img src={title} alt=''></img>
  )
}

export default ListOfFavorties