import React from 'react'
import StarterMap from '../components/maps/Startermap'

const OpenWorld = () => {
  // let displayMap = StarterMap
  let displayMap = StarterMap.map((el) => {
    return (
      <div className={`map_chunk-${el}`}>
        {el}
      </div>
    )
  })  
  return (
    <div className="map_container">
      {displayMap}
    </div>
  )
}

export default OpenWorld
