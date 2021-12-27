import React from 'react'
import useKeys from '../../hooks/use-keys'
import WalkKeys from '../../utils/availableKeys'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import PlayerMove from '../../funktionality/move/PlayerMove';
import DisplayPlayerSprite from './DisplayPlayerSprite';

const Player = () => {
  const dispatch = useDispatch()
  const [mainPlayerDir, setMainPlayerDir] = useState({ x: 2, y: 0 })
  const { playermovement } = useSelector((state) => state)

  let mapObj = playermovement.map
  useEffect(() => {
    setMainPlayerDir(playermovement.sprite)
  }, [playermovement, mainPlayerDir])

  useKeys((event) => {
    const dir = event.key.replace("Arrow", "").toLowerCase()
    event.preventDefault()
    if (WalkKeys.hasOwnProperty(dir)) {
      checkKeys(dir)
    } else {
      console.log('error ', dir)
    }
  })

  function checkKeys(dir) {
    for (const key in WalkKeys) {
      if (Object.hasOwnProperty.call(WalkKeys, key)) {
        const element = WalkKeys[key];
        if (key === dir) {
          PlayerMove(dispatch, mapObj, element)
        }
      }
    }
  }

  return (
    <div>
      <DisplayPlayerSprite data={mainPlayerDir} />
    </div>
  )
}

export default Player
