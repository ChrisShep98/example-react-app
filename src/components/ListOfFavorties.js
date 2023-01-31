import React from 'react'

// might want to add picture along with title in props but just doing title for now

function ListOfFavorties({photo}) {
  return (
    <img src={photo} className="w-64 h-64 p-2" alt=''></img>
  )
}

export default ListOfFavorties