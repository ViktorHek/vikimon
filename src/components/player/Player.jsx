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
  const { playermovement, backpackOpen, pointerPosition, backPackView } = useSelector((state) => state)
  const [mainPlayerDir, setMainPlayerDir] = useState({ x: 17, y: 0 })

  useEffect(() => {
    setMainPlayerDir(playermovement.sprite)
  }, [playermovement, mainPlayerDir])

  useKeys((event) => {
    const dir = event.code.toLowerCase()
    event.preventDefault()
    if (availableKeys.hasOwnProperty(dir)) {
      checkKeys(dir)
    } else {
      console.log('Not a valid Key @Player.jsx - useKey()', { dir })
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
      case 'keys':
      case 'keyw':
      case 'keya':
      case 'keyd':
        moveTarget(dispatch, element)
        break;
      case 'keyi':
        if (backpackOpen) {
          dispatch({ type: "OPEN_BACKPACK" })
        } else {
          dispatch({ type: "SET_POINTER_POSITION", payload: { index: 0, view: 'backpackInit' } })
          dispatch({ type: "OPEN_BACKPACK" })
        }
        // dispatch({type: "OPEN_BACKPACK"})
        break;
      case 'backspace':
        dispatch({ type: "SET_BACK_KEY" })
        break;
      case 'keyx':
        dispatch({ type: "SET_VIEW", payload: 'WildPokemonEncounter' })
        break;
      case 'keyc':
        dispatch({ type: "SET_BACKPACK_VIEW", payload: 'displaySelectedPokemonStats' })
        break;
      case 'enter':
        dispatch({ type: "SET_SELECT_IN_WORLD", payload: true })
        break;
      default:
        console.log('is a valid key, but can not find the type @Player.jsx - identifyTypeOffKey()', { dir })
        break;
    }
  }

  function moveTarget(dispatch, element) {
    if (backpackOpen) {
      MovePointer(dispatch, pointerPosition, element, backPackView)
    } else {
      PlayerMove(dispatch, playermovement, element)
    }
  }

  return (
    <div className='absoluteP'>
      <DisplayPlayerSprite data={mainPlayerDir} />
    </div>
  )
}

export default Player
