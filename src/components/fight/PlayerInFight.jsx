import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import api from '../database/api'

const Fight = ({ data }) => {
  const dispatch = useDispatch()
  const [selectedAttack, setSelectedAttack] = useState('')
  const { selectedAttackFronRedux } = useSelector((state) => state)

  let fullPokemonStripte = '/images/pokemons/b_green-supgb_151_back.png'
  let posX = 0
  let posY = 0
  // let posX = 65
  // let posY = 29
  console.log('player fight pokemon', data)
  const { level, name, moves } = data;
  const dbName = data.dbData.name

  const inFightStats = {
    attack: data.stats.attack,
    defence: data.stats.defence,
    special: data.stats.special,
    speed: data.stats.speed,
    hp: data.stats.hp,
  }

  useEffect(() => {
    setSelectedAttack(selectedAttackFronRedux)
  }, [selectedAttackFronRedux])

  function selectAttack(attack) {
    console.log('selacting attack ', attack)
    // setAttacks(attack)
    dispatch({ type: 'SET_SELECTED_ATTACK', payload: attack })
  }

  function runAway() {
    dispatch({ type: 'SET_VIEW', payload: 'world' })
  }

  const attacklist = moves.map((move) => {
    return (
      <div onClick={() => selectAttack(move.id)} className="fight-move-selecter" key={move.id}>
        {move.name}
      </div>
    )
  })

  return (
    <div>
      <div className='fight-users-mon-name-container'>
        <h3 className='fight-users-mon-name'>{name ? name : dbName}</h3>
      </div>
      <div className='fight-users-mon-level-container'>
        <h3 className='fight-users-mon-level'>{level}</h3>
      </div>
      <div className='fight-users-mon-hp-container'>
        <h3>{inFightStats.hp}</h3>
        <h3>{data.stats.hp}</h3>
      </div>
      <div className="fight-users-mon-img-container">
        <img src={fullPokemonStripte} alt='pokemon' style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: `-${posY}px`,
          left: `-${posX}px`
        }} />
      </div>
      <div className="fight-main-options-container">
        <div className="AttacksOptionsContainer">
          {attacklist && attacklist}
        </div>
        <button onClick={runAway} >run</button>
        <p>selected attack is: {selectedAttack}</p>
      </div>
    </div>
  )
}

export default Fight
