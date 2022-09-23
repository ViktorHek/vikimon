import React from 'react'
import useKeys from '../../hooks/use-keys'
import availableKeys from '../../utils/availableKeys'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import PlayerMove from '../../funktionality/move/PlayerMove';
import DisplayPlayerSprite from './DisplayPlayerSprite';

const Player = () => {
  const dispatch = useDispatch()
  const [mainPlayerDir, setMainPlayerDir] = useState({ x: 17, y: 0 })
  const { playermovement } = useSelector((state) => state)

  useEffect(() => {
    setMainPlayerDir(playermovement.sprite)
  }, [playermovement, mainPlayerDir])

  useKeys((event) => {
    // event.code is better for keys like space and shift
    const dir = event.key.toLowerCase()
    event.preventDefault()
    if (availableKeys.hasOwnProperty(dir)) {
      checkKeys(dir)
    } else {
      console.log('Not a valid Key @Player.jsx - useKey()', {dir})
    }
  })

  function checkKeys(dir) {
    for (const key in availableKeys) {
      if (Object.hasOwnProperty.call(availableKeys, key)) {
        const element = availableKeys[key];
        if (key === dir) {
          identifyTypeOffKey(dir, element)
        }
      }
    }
  }

  function identifyTypeOffKey(dir, element) {
    switch (dir) {
      case 'arrowdown':
      case 'arrowup':
      case 'arrowleft':
      case 'arrowright':
        PlayerMove(dispatch, playermovement, element)
        break;
      case 'i':
        dispatch({type: "OPEN_BACKPACK"})
        break;
      case 'backspace':
        dispatch({type: "BACK_KEY"})
        break;
      case 'r':
        dispatch({type: "SET_VIEW", payload: 'world'})
        break;
      case 'x':
        dispatch({type: "SET_VIEW", payload: 'WildPokemonEncounter'})
        break;
      default:
        console.log('is a valid key, but can not find the type @Player.jsx - identifyTypeOffKey()', {dir})
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
