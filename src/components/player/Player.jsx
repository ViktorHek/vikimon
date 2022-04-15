import React from 'react'
import useKeys from '../../hooks/use-keys'
import availableKeys from '../../utils/availableKeys'
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
    console.log('full event',event)
    const dir = event.key.toLowerCase()
    // event.code is better for keys like space and shift
    event.preventDefault()
    if (availableKeys.hasOwnProperty(dir)) {
      console.log('checking key')
      checkKeys(dir)
    } else {
      console.log('Not a valid Key', {dir})
    }
  })

  function checkKeys(dir) {
    for (const key in availableKeys) {
      if (Object.hasOwnProperty.call(availableKeys, key)) {
        const element = availableKeys[key];
        if (key === dir) {
          identifyType(dir, element)
          // PlayerMove(dispatch, mapObj, element)
        }
      }
    }
  }

  function identifyType(dir, element) {

    switch (dir) {
      case 'arrowdown':
      case 'arrowup':
      case 'arrowleft':
      case 'arrowright':
        PlayerMove(dispatch, mapObj, element)        
        break;
      case 'i':
        dispatch({type: "OPEN_BACKPACK"})
        break;
      default:
        console.log('is a valid key, but can not find the type')
        break;
    }

  }

  return (
    <div>
      <DisplayPlayerSprite data={mainPlayerDir} />
    </div>
  )
}

export default Player
