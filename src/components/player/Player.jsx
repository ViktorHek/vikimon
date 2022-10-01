import React from 'react'
import useKeys from '../../hooks/use-keys'
import availableKeys from '../../utils/availableKeys'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import PlayerMove from '../../funktionality/move/PlayerMove';
import MovePointer from '../../funktionality/move/MovePointer';
import DisplayPlayerSprite from './DisplayPlayerSprite';

const Player = () => {
  const dispatch = useDispatch()
  const [mainPlayerDir, setMainPlayerDir] = useState({ x: 17, y: 0 })
  const { playermovement, backpackOpen, pointerPosition } = useSelector((state) => state)

  useEffect(() => {
    setMainPlayerDir(playermovement.sprite)
  }, [playermovement, mainPlayerDir])

  useKeys((event) => {
    // event.code is better for keys like space and shift
    const dir = event.code.toLowerCase()
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
        moveTarget(dispatch, element)
        break;
      case 'keyi':
        dispatch({type: "OPEN_BACKPACK"})
        break;
      case 'backspace':
        dispatch({type: "BACK_KEY"})
        break;
      case 'keyr':
        dispatch({type: "SET_VIEW", payload: 'world'})
        break;
      case 'keyx':
        dispatch({type: "SET_VIEW", payload: 'WildPokemonEncounter'})
        break;
      case 'keyw':
        dispatch({type: "SET_BACKPACK_VIEW", payload: 'displaySelectedPokemonStats'})
        break;
      default:
        console.log('is a valid key, but can not find the type @Player.jsx - identifyTypeOffKey()', {dir})
        break;
    }
  }

  function moveTarget(dispatch, element) {
    if(backpackOpen) {
      MovePointer(dispatch, pointerPosition, element)
    } else {
      PlayerMove(dispatch, playermovement, element)
    }
  }

  return (
    <div className='player-container'>
      <DisplayPlayerSprite data={mainPlayerDir} />
    </div>
  )
}

export default Player
