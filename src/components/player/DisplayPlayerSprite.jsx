import React from 'react'
import { useEffect, useState } from 'react';

const DisplayPlayerSprite = ({ data }) => {
  const img = "/images/players/player_sprite.png"
  const [posX, setPosX] = useState(17)
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    setPosX(data.x)
    setPosY(data.y)
  }, [data])

  return (
    <div className='display-player-strite-container'>
      <img
        src={`${img}`}
        alt=''
        style={{
          height: '50px',
          width: '169px',
          position: 'absolute',
          top: `-${posY}px`,
          left: `-${posX}px`
        }} 
      />
    </div>
  )
};

export default DisplayPlayerSprite
