import React from 'react'
import StarterMap from '../components/maps/Startermap'
import Player from '../components/player/Player'

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
      <Player/>
      {displayMap}
    </div>
  )
}

export default OpenWorld
