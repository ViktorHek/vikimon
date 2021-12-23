import React from 'react'
import useKeys from '../../hooks/use-keys'
import WalkKeys from '../../utils/availableKeys'
import useWalk from '../../hooks/use-walk'
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

const Player = () => {
  const [walkDir, setWalkDir] = useState(0)
  const [walkIndex, setWalkIndex] = useState(0)
  const { playerSpritePosition } = useSelector((state) => state)

  // let y = 96
  // let x = 25
  let mainPlayerDir = 2
  let img="/images/players/Ash_Character_Overworld.jpg"

  useEffect(() => {
    MovePlayer(walkDir)
  }, [walkIndex])

  useEffect(() => {
    console.log('playerSpritePosition',playerSpritePosition)
  }, [playerSpritePosition])

  function MovePlayer() {
    useWalk(walkDir)
  }

  // const moveAsh = (direction) => {
  //   console.log('@ move ash', direction)
  // }

  useKeys((event) => {
    const dir = event.key.replace("Arrow", "").toLowerCase()
    event.preventDefault()
    if(WalkKeys.hasOwnProperty(dir)) {
      for (const key in WalkKeys) {
        if (Object.hasOwnProperty.call(WalkKeys, key)) {
          const element = WalkKeys[key];
          if(key === dir) {
            setWalkDir(element)
          }
        }
      }
    } else {
      console.log('error ', dir)
    }
    setWalkIndex(walkIndex + 1)
  })

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
        top: '0px',
        left: `-${mainPlayerDir}px`
      }}/>
    </div>
  )
}

export default Player
