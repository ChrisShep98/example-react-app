import React from 'react'

// might want to add picture along with title in props but just doing title for now

function ListOfFavorties({photo}) {
  return (
    <img src={photo} alt=''></img>
  )
}

export default ListOfFavorties