import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../database/api'
import PlayerInFight from '../components/fight/PlayerInFight'
import OpponentInFight from '../components/fight/OpponentInFight'
import availableKeys from '../utils/availableKeys'
import useKeys from '../hooks/use-keys'
import NavigateFight from '../funktionality/inFightNavigation/NavigateFight'
import calculator from '../funktionality/calculator'
import Pointer from '../animatios/Pointer'
import FightBackgrond from '../animatios/backgronds/FightBackgrond'

const Fight = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const [pokiParty, setPokiParty] = useState([])
  const [pointerPositionIndex, setPointerPositionIndex] = useState(0)
  const { myPokemons, selectedAttackFronRedux, selectInFight, fightView } = selector

  const posiblePointerPositions = [
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
    },
    {
      top: 104, // move 1
      left: 40
    },
    {
      top: 112, // move 2
      left: 40
    },
    {
      top: 120, // move 3
      left: 40
    },
    {
      top: 128, // move 4
      left: 40
    }
  ]

  useEffect(() => {
    populateParty()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   console.log('fightView',fightView)
  //   if (fightView === "init") {
  //     setPointerPositionIndex(0)
  //   }
  //   if (fightView === "selectMoves") {
  //     setPointerPositionIndex(4)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [backKey])

  useEffect(() => {
    calcDamage(selectedAttackFronRedux)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAttackFronRedux])

  useEffect(() => {
    handleSelect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectInFight])

  useEffect(() => {
    if (fightView === "selectMoves") {
      setPointerPositionIndex(4)
    }
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
    console.log('dir', dir)
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
          let newIndex = NavigateFight(dispatch, dir, pointerPositionIndex)
          setPointerPositionIndex(newIndex)
          console.log('pointerPositionIndex', pointerPositionIndex)
        }
      }
    }
  }

  function handleSelect() {
    if (!selectInFight) return
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
      case 4:
        dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[0] })
        break;
      case 5:
        dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[1] })
        break;
      case 6:
        dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[2] })
        break;
      case 7:
        dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[3] })
        break;
      default:
        break;
    }
    if (fightView === "init") {
      if (pointerPositionIndex === 0) {
        dispatch({ type: "SET_FIGHT_VIEW", payload: "selectMoves" })
      }
      if (pointerPositionIndex === 1) {
        console.log('selecting pokemon')
      }
      if (pointerPositionIndex === 2) {
        console.log('selecting items')
      }
      if (pointerPositionIndex === 3) {
        console.log('selecting run')
        dispatch({ type: "SET_VIEW", payload: 'openWorld' })
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
        className='fight-init-pointer-container'
        style={{
          top: `${posiblePointerPositions[pointerPositionIndex].top}px`,
          left: `${posiblePointerPositions[pointerPositionIndex].left}px`
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
