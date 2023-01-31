import React from 'react'

// might want to add picture along with title in props but just doing title for now

function ListOfFavorties({photo, name, linkToPic}) {
  return (
    <div>
      <a href={linkToPic} target="_blank" rel="noreferrer"><img src={photo} className="w-64 h-64 p-2" alt=''></img></a>
      <span className='flex justify-center text-sm'>{name}</span>
    </div>
  )
}

export default ListOfFavorties