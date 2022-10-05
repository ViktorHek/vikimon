import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../database/api'
import PlayerInFight from '../components/fight/PlayerInFight'
import OpponentInFight from '../components/fight/OpponentInFight'
import availableKeys from '../utils/availableKeys'
import useKeys from '../hooks/use-keys'
import NavigateFight from '../funktionality/move/NavigateFight'
import calculator from '../funktionality/calculator'
import Pointer from '../animatios/Pointer'
import FightBackgrond from '../animatios/backgronds/FightBackgrond'
import pointerPositions from '../utils/pointerPositions'

const Fight = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const [pokiParty, setPokiParty] = useState([])
  const [pointerPositionIndex, setPointerPositionIndex] = useState(0)
  const { myPokemons, selectedAttackFronRedux, selectInFight, fightView, pointerPosition } = selector
  const { battleInit, selectMoves } = pointerPositions

  useEffect(() => {
    populateParty()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    handlePointer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPosition])

  function handlePointer() {

  }

  useEffect(() => {
    calcDamage(selectedAttackFronRedux)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAttackFronRedux])

  useEffect(() => {
    handleSelect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectInFight])

  useEffect(() => {
    setPointerPositionIndex(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightView])

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
    const dir = event.code.toLowerCase();
    event.preventDefault()
    if (availableKeys.hasOwnProperty(dir)) {
      checkKeys(dir)
    } else {
      console.log('Not a valid Key @Fight.jsx - useKey()', dir)
    }
  })

  function checkKeys(dir) {
    for (const key in availableKeys) {
      if (Object.hasOwnProperty.call(availableKeys, key)) {
        if (key === dir) {
          let newIndex = NavigateFight(dispatch, dir, pointerPositionIndex, fightView)
          setPointerPositionIndex(newIndex)
        }
      }
    }
  }

  function handleSelect() {
    if (!selectInFight) return
    if( fightView === "battleInit" ) {
      switch (pointerPositionIndex) {
        case 0:
          dispatch({ type: "SET_FIGHT_VIEW", payload: "selectMoves" })
          break;
        case 1:
          console.log('selecting pokemon')
          break;
        case 2:
          console.log('selecting items')
          break;
        case 3:
          dispatch({ type: "SET_VIEW", payload: 'openWorld' })
          break;
        default:
          break;
      }
    } else {
      switch (pointerPositionIndex) {
        case 0:
          dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[0] })
          break;
        case 1:
          dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[1] })
          break;
        case 2:
          dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[2] })
          break;
        case 3:
          dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[3] })
          break;
        default:
          break;
      }
    }
    dispatch({ type: "SET_SELECT_IN_FIGHT", payload: false })
  }

  function calcDamage(attack) {
    if (attack) {
      let damage = calculator.damageCalculation(pokiParty[0], pokiParty[1], attack)
      dispatch({ type: 'SET_DAMAGE_TO_OPPONENT', payload: Math.floor(damage) })
      dispatch({ type: "SET_SELECTED_ATTACK", payload: null })
    }
  }

  return (
    <div className="fight-main-container">
      <div
        style={
          fightView === "battleInit" ?
            {
              position: 'absolute',
              top: `${battleInit[pointerPositionIndex].top}px`,
              left: `${battleInit[pointerPositionIndex].left}px`
            }
            :
            {
              position: 'absolute',
              top: `${selectMoves[pointerPositionIndex].top}px`,
              left: `${selectMoves[pointerPositionIndex].left}px`
            }
        }
      >
        <Pointer />
      </div>
      <div className='relativeP'>
        <FightBackgrond />
      </div>

      {pokiParty.length ? <OpponentInFight data={pokiParty[1]} /> : null}
      {pokiParty.length ? <PlayerInFight data={pokiParty[0]} /> : null}
    </div>
  )
}

export default Fight
