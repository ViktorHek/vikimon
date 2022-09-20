import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import api from '../database/api'

const Fight = ({ data }) => {
  const dispatch = useDispatch()
  const [selectedAttack, setSelectedAttack] = useState('')
  const { selectedAttackFronRedux } = useSelector((state) => state)

  let fullPokemonStripte = '/images/pokemons/Game Boy GBC - Pokemon Red Blue - Pokemon Color Front.png'
  let posX = 65
  let posY = 29
  const {moves} = data;

  useEffect(() => {
    setSelectedAttack(selectedAttackFronRedux)
  }, [selectedAttackFronRedux])

  function selectAttack(attack) {
    console.log('selacting attack ', attack)
    // setAttacks(attack)
    dispatch({ type: 'SET_SELECTED_ATTACK', payload: attack })
  }

  function runAway() {
    dispatch({ type: 'SET_VIEW', payload: 'world'})
  }

  return (
    // <div style={{ position: 'relative', top: '0px', left: '0px', height: '100%' }}>
    <div>
      <div className="fight-users-mon-img-container">
        <img src={fullPokemonStripte} alt='pokemon' style={{
          height: '917px',
          width: '1727px',
          position: 'absolute',
          top: `-${posY}px`,
          left: `-${posX}px`
        }} />
      </div>
      <div className="fight-main-options-container">
        <div className="AttacksOptionsContainer">
          {moves.length ? (
            <>
              <div onClick={() => selectAttack(moves[0].id)} className="fight-move-selecter">
                {moves[0].name}
              </div>
              <div onClick={() => selectAttack(moves[1].id)} className="fight-move-selecter">
                {moves[1].name}
              </div>
              <div onClick={() => selectAttack(moves[2].id)} className="fight-move-selecter">
                {moves[2].name}
              </div>
              <div onClick={() => selectAttack(moves[3].id)} className="fight-move-selecter">
                {moves[3].name}
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
