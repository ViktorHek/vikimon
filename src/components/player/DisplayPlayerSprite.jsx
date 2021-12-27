import React from 'react'
import { useEffect, useState } from 'react';

const DisplayPlayerSprite = ({data}) => {
  const img = "/images/players/Ash_Character_Overworld.jpg"
  const [posX, setPosX] = useState(2)
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    setPosX(data.x)
    setPosY(data.y)
  }, [data])

  return (
    <div
      style={{
        position: 'relative',
        height: '50px',
        width: '50px',
        top: `200px`,
        left: `200px`,
        overflow: 'hidden',
        zIndex: 5
      }}
    >
      <img src={`${img}`} alt='' style={{
        height: '156px',
        width: '513px',
        position: 'absolute',
        top: `-${posY}px`,
        left: `-${posX}px`
      }} />
    </div>
  )
};

export default DisplayPlayerSprite
