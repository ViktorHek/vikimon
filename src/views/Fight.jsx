import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../database/api'

const Fight = () => {
  const dispatch = useDispatch()
  const [selectedAttack, setSelectedAttack] = useState('')
  const [pokiParty, setPokiParty] = useState([])
  const [attacks, setAttacks] = useState([])
  const { selectedAttackFronRedux, myPokemons } = useSelector((state) => state)

  let battleBackgrond = '/images/backgronds/battle/battleInterface_grass1.jpg'
  let fullPokemonStripte = '/images/pokemons/Game Boy GBC - Pokemon Red Blue - Pokemon Color Front.png'
  let posX = 65
  let posY = 29

  useEffect(() => {
    populateParty()
  }, [])

  useEffect(() => {
    setSelectedAttack(selectedAttackFronRedux)
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
    populateInitialMoves(populatedPartyList)
  };

  function populateInitialMoves(party) {
    let initialMoves = party[0].moves
    setAttacks(initialMoves)
  }

  function selectAttack(attack) {
    dispatch({ type: 'SET_SELECTED_ATTACK', payload: attack })
  }

  function runAway() {
    dispatch({ type: 'SET_VIEW', payload: 'world'})
  }

  return (
    <div style={{ position: 'relative', top: '0px', left: '0px', height: '100%' }}>
      <div
        style={{
          position: 'relative',
          top: '0px',
          left: '0px',
          height: '450px',
          width: '500px',
          overflow: 'hidden',
        }}
      >
        <img
          src={battleBackgrond}
          alt="error"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            objectFit: 'fill'
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          height: '58px',
          width: '58px',
          top: '182px',
          left: '332px',
          zIndex: 5,
          overflow: 'hidden'
        }}
      >
        <img src={fullPokemonStripte} alt='pokemon' style={{
          height: '917px',
          width: '1727px',
          position: 'absolute',
          top: `-${posY}px`,
          left: `-${posX}px`
        }} />
      </div>
      <div
        style={{
          position: 'absolute',
          height: '58px',
          width: '58px',
          top: '282px',
          left: '100px',
          zIndex: 5,
          overflow: 'hidden'
        }}
      >
        <img src={fullPokemonStripte} alt='pokemon' style={{
          height: '917px',
          width: '1727px',
          position: 'absolute',
          top: `-${posY}px`,
          left: `-${posX}px`
        }} />
      </div>
      <div
        className='mainContainerForBattle'
        style={{
          position: 'absolute',
          height: '108px',
          width: '100%',
          bottom: 0,
          left: 0,
          backgroundColor: 'green'
        }}
      >
        <div className='AttacksOptionsContainer'>
          {attacks.length ? (
            <>
              <div onClick={() => selectAttack(attacks[0].id)} style={{ border: '1px solid black', cursor: 'pointer' }}>
                {attacks[0].name}
              </div>
              <div onClick={() => selectAttack(attacks[1].id)} style={{ border: '1px solid black', cursor: 'pointer' }}>
                {attacks[1].name}
              </div>
              <div onClick={() => selectAttack(attacks[2].id)} style={{ border: '1px solid black', cursor: 'pointer' }}>
                {attacks[2].name}
              </div>
              <div onClick={() => selectAttack(attacks[3].id)} style={{ border: '1px solid black', cursor: 'pointer' }}>
                {attacks[3].name}
              </div>
            </>
          )
            :
            null
          }
        </div>
        <button onClick={runAway} >run</button>
        <p>selected attack is: {selectedAttack}</p>
      </div>
    </div>
  )
}

export default Fight
