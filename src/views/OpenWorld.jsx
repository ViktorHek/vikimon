import React from 'react'
import StarterMap from '../components/maps/Startermap'
import Player from '../components/player/Player'

const OpenWorld = () => {
  // let mapData = StarterMap
  let mapData = StarterMap.map((el) => {
    return <div className={`map_chunk-${el}`}>{el}</div>
  })
  let mapImg = '/images/maps/Pallet_Town_Outside.jpg'
  let y = 200
  let x = 150
  return (
    <div style={{position: 'relative', top: '0px', left: '0px'}}>
      <Player />
      <div className="map_container">
        {mapData}
        <div
          className="display_map_container"
          style={{
            position: 'relative',
            top: '-450px',
            left: '0px',
            opacity: '50%',
            height: '450px',
            width: '500px',
            overflow: 'hidden',
          }}
        >
          <img
            src={mapImg}
            style={{
              width: '997px',
              height: '901px',
              position: 'absolute',
              left: `-${y}px`,
              top: `-${x}px` ,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default OpenWorld
