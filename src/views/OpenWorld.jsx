import React, { useEffect, useState } from 'react'
import StarterMap from '../components/maps/Startermap'
import Player from '../components/player/Player'
import { useSelector } from 'react-redux'

const OpenWorld = () => {
  const { playermovement } = useSelector((state) => state)
  const [mapPos, setMapPos] = useState(playermovement.map)
  let mapImg = '/images/maps/Pallet_Town_Outside.jpg'

  useEffect(() => {
    setMapPos(playermovement.map)
  },[playermovement])

  let mapData = StarterMap.map((el) => {
    return <div className={`map_chunk-${el}`}>{el}</div>
  })

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
            alt="error"
            style={{
              width: '997px',
              height: '901px',
              position: 'absolute',
              left: `-${mapPos.x}px`,
              top: `-${mapPos.y}px` ,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default OpenWorld
