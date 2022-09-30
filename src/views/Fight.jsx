import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../database/api'
import PlayerInFight from '../components/fight/PlayerInFight'
import OpponentInFight from '../components/fight/OpponentInFight'
import availableKeys from '../utils/availableKeys'
import useKeys from '../hooks/use-keys'
import NavigateFight from '../funktionality/inFightNavigation/NavigateFight'
import calculator from '../funktionality/calculator'
// import Font from '../animatios/font/Font'
import Pointer from '../animatios/Pointer'
import FightBackgrond from '../animatios/backgronds/FightBackgrond'

const Fight = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const [pokiParty, setPokiParty] = useState([])
  const [pointerPositionIndex, setPointerPositionIndex] = useState(0)
  const { myPokemons, selectedAttackFronRedux, pointerPositionFight } = selector

  const PosiblePointerPositions = [
    { 
      top: 112, // fight
      left: 72,
    },
    {
      top: 112, // pokemon
      left: 120,
    },
    {
      top: 128, // item
      left: 72,
    },
    {
      top: 128, // run
      left: 120,
    }
  ]


  useEffect(() => {
    populateParty()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    changePointerPosition()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPositionFight])
  useEffect(() => {
    calcDamage(selectedAttackFronRedux)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAttackFronRedux])

  function changePointerPosition() {
    switch (pointerPositionFight) {
      case 'up':
        if(pointerPositionIndex === 2) { setPointerPositionIndex(0) };
        if(pointerPositionIndex === 3) { setPointerPositionIndex(1) };
        break;
      case 'down':
        if(pointerPositionIndex === 0) { setPointerPositionIndex(2) };
        if(pointerPositionIndex === 1) { setPointerPositionIndex(3) };
        break;
      case 'right':
        if(pointerPositionIndex === 0) { setPointerPositionIndex(1) };
        if(pointerPositionIndex === 2) { setPointerPositionIndex(3) };
        break;
      case 'left':
        if(pointerPositionIndex === 1) { setPointerPositionIndex(0) };
        if(pointerPositionIndex === 3) { setPointerPositionIndex(2) };
        break;
      default:
        console.log('problem in changePointerPosition()');
        break;
      }
  }

  function calcDamage(attack) {
    if (attack) {
      let damage = calculator.damageCalculation(pokiParty[0], pokiParty[1], attack)
      dispatch({ type: 'SET_DAMAGE_TO_OPPONENT', payload: Math.floor(damage) })
      dispatch({ type: "SET_SELECTED_ATTACK", payload: null })
    }
  }

  async function populateParty() {
    let populatedPartyList = myPokemons;
    if (!populatedPartyList.length) {
      let localStorageString = localStorage.getItem('myPokemonParty')
      let responce = await api.callPokiParty(localStorageString)
      populatedPartyList = responce.data
      dispatch({
        type: 'POPULATE_POKEMON_PARTY',
        payload: populatedPartyList
      })
    }
    setPokiParty(populatedPartyList)
  };

  useKeys((event) => {
    // event.code is better for keys like space and shift
    const dir = event.key.toLowerCase()
    event.preventDefault()
    if (availableKeys.hasOwnProperty(dir)) {
      checkKeys(dir)
    } else {
      console.log('Not a valid Key @Fight.jsx - useKey()', { dir })
    }
  })

  function checkKeys(dir) {
    for (const key in availableKeys) {
      if (Object.hasOwnProperty.call(availableKeys, key)) {
        if (key === dir) {
          NavigateFight(dispatch, dir, selector)
        }
      }
    }
  }

  return (
    <div className="fight-main-container">
      <div 
        className='fight-init-pointer-container' 
        style={{
          top: `${PosiblePointerPositions[pointerPositionIndex].top}px`, 
          left: `${PosiblePointerPositions[pointerPositionIndex].left}px`
        }}
      >
        <Pointer />
      </div>
      <div className='fight-backgrond-container-in-fight'>
        <FightBackgrond />
      </div>

      {pokiParty.length ? <OpponentInFight data={pokiParty[1]} /> : null}
      {pokiParty.length ? <PlayerInFight data={pokiParty[0]} /> : null}
    </div>
  )
}

export default Fight
