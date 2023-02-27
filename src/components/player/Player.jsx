import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import DisplayPlayerSprite from './DisplayPlayerSprite';

const Player = () => {
  const { playermovement } = useSelector((state) => state)
  const [mainPlayerDir, setMainPlayerDir] = useState({ x: 17, y: 0 })

  useEffect(() => {
    setMainPlayerDir(playermovement.sprite)
  }, [playermovement.sprite.y, playermovement.sprite.x, mainPlayerDir])

  return (
    <div className='absoluteP'>
      <DisplayPlayerSprite data={mainPlayerDir} />
    </div>
  )
}

export default Player
