import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import StarterMap from '../components/maps/Startermap'
import Player from '../components/player/Player'
import Backpack from './Backpack'

const OpenWorld = () => {
  const { playermovement } = useSelector((state) => state)
  const [mapPos, setMapPos] = useState(playermovement.map)
  let count = 0

  let mapImg = '/images/maps/Pallet_Town_Outside.jpg'

  useEffect(() => {
    setMapPos(playermovement.map)
  },[playermovement])

  let mapData = StarterMap.map((el) => {
    count = count + 1
    return <div className={`map_chunk-${el}`} key={`chunk-${count}`}>{el}</div>
  })

  return (
    <div style={{position: 'relative', top: '0px', left: '0px', height: '100%', width: '100%'}}>
      <Player />
      <Backpack />
      <div className="map_container">
        {mapData}
        <div
          className="display_map_container"
          style={{
            position: 'relative',
            top: '-450px',
            left: '0px',
            // opacity: '50%',
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
