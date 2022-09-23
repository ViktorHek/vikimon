import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../database/api'
import PlayerInFight from '../components/fight/PlayerInFight'
import OpponentInFight from '../components/fight/OpponentInFight'
import availableKeys from '../utils/availableKeys'
import useKeys from '../hooks/use-keys'
import NavigateFight from '../funktionality/inFightNavigation/NavigateFight'
import calculator from '../funktionality/calculator'

const Fight = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const [pokiParty, setPokiParty] = useState([])
  const { myPokemons, selectedAttackFronRedux } = selector

  // let battleBackgrond = '/images/backgronds/battle/battleInterface_grass1.jpg'
  let battleBackgrond = '/images/backgronds/battle/pokemon_battle_backgrond.jpg'

  useEffect(() => {
    populateParty()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if(selectedAttackFronRedux) {
      let damage = calculator.damageCalculation(pokiParty[0], pokiParty[1], selectedAttackFronRedux)
      console.log({damage})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAttackFronRedux])

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
      console.log('Not a valid Key @Fight.jsx - useKey()', {dir})
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
      <div className='fight-background-img-container'>
        <img
          src={battleBackgrond}
          alt="error"
          className='fight-backgrond-img'
        />
      </div>
      {pokiParty.length ? <OpponentInFight data={pokiParty[1]} /> : null}
      {pokiParty.length ? <PlayerInFight data={pokiParty[0]} /> : null}
    </div>
  )
}

export default Fight
