import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Fight = () => {
  const dispatch = useDispatch()
  const [selectedAttack, setSelectedAttack] = useState('')
  const { selectedAttackFronRedux } = useSelector((state) => state)

  let battleBackgrond = '/images/backgronds/battle/battleInterface_grass1.jpg'
  let fullPokemonStripte = '/images/pokemons/Game Boy GBC - Pokemon Red Blue - Pokemon Color Front.png'
  let posX = 65
  let posY = 29

  let attacks = [
    'tackle',
    'spash',
    'tail whip',
    'mega punch'
  ]

  useEffect(() => {
    setSelectedAttack(selectedAttackFronRedux)
  }, [selectedAttackFronRedux])

  function selectAttack(attack) {
    dispatch({ type: 'SET_SELECTED_ATTACK', payload: attack })
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
          <div onClick={() => selectAttack(attacks[0])} style={{ border: '1px solid black', cursor: 'pointer' }}>
            {attacks[0]}
          </div>
          <div onClick={() => selectAttack(attacks[1])} style={{ border: '1px solid black', cursor: 'pointer' }}>
            {attacks[1]}
          </div>
          <div onClick={() => selectAttack(attacks[2])} style={{ border: '1px solid black', cursor: 'pointer' }}>
            {attacks[2]}
          </div>
          <div onClick={() => selectAttack(attacks[3])} style={{ border: '1px solid black', cursor: 'pointer' }}>
            {attacks[3]}
          </div>
        </div>
        <p>selected attack is: {selectedAttack}</p>
      </div>
    </div>
  )
}

export default Fight
