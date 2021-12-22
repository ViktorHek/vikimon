import React from 'react'
import StarterMap from '../components/maps/Startermap'
import Player from '../components/player/Player'
import useKeys from '../hooks/use-keys'
import WalkKeys from '../utils/availableKeys'

const OpenWorld = () => {
  // let mapData = StarterMap
  let mapData = StarterMap.map((el) => {
    return <div className={`map_chunk-${el}`}>{el}</div>
  })
  let mapImg = '/images/maps/Pallet_Town_Outside.jpg'
  let y = 200
  let x = 150
  // const pixelStep = 50



  useKeys((event) => {
    const dir = event.key.replace("Arrow", "").toLowerCase()
    event.preventDefault()
    if(WalkKeys.hasOwnProperty(dir)) {
      console.log('direction is: ', dir)
    } else {
      console.log('error ', dir)
    }
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
