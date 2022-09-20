import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../database/api'
import PlayerInFight from '../components/fight/PlayerInFight'
import OpponentInFight from '../components/fight/OpponentInFight'

const Fight = () => {
  const dispatch = useDispatch()
  const [pokiParty, setPokiParty] = useState([])
  const { myPokemons } = useSelector((state) => state)

  // let battleBackgrond = '/images/backgronds/battle/battleInterface_grass1.jpg'
  let battleBackgrond = '/images/backgronds/battle/pokemon_battle_backgrond.jpg'

  useEffect(() => {
    populateParty()
  }, [])

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
