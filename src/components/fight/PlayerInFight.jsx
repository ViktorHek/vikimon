import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import api from '../database/api'

const Fight = ({ data }) => {
  const dispatch = useDispatch()
  const { selectedAttackFronRedux, selectInFight, backKey, fightView, pointerPositionFight } = useSelector((state) => state)
  const [selectedAttack, setSelectedAttack] = useState('')
  const [showSelectMove, setShowSelectMove] = useState(false)
  const [spriteUrl, setSpriteUrl] = useState("")
  const [view, setView] = useState("init")

  let fullPokemonStripte = '/images/pokemons/b_green-supgb_151_back.png'
  const selectingMovesBackgrondImg = '/images/backgronds/battle/pokemon_battle_selection_moves_backgrond.png'
  console.log('player fight pokemon', data)
  const { id, level, name, moves } = data;
  const dbName = data.dbData.name

  const inFightStats = {
    attack: data.stats.attack,
    defence: data.stats.defence,
    special: data.stats.special,
    speed: data.stats.speed,
    hp: data.stats.hp,
    imgUrl: ""
  }

  useEffect(() => {
    populateData()
  }, [])

  useEffect(() => {
    console.log('selectInFight2', selectInFight)
  }, [selectInFight])

  useEffect(() => {
    console.log('pointerPositionFight2', pointerPositionFight)
  }, [pointerPositionFight])

  useEffect(() => {
    console.log('backKey2', backKey)
  }, [backKey])

  useEffect(() => {
    if(view === "init") {
      setView('pickMove')
    } else {
      setView('init')
    }
  }, [fightView])

  useEffect(() => {
    setSelectedAttack(selectedAttackFronRedux)
    console.log({ selectedAttack })
  }, [selectedAttackFronRedux])

  function populateData() {
    setPokemonImgUrl(id)
  }

  function setPokemonImgUrl(id) {
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/${id}.png`
    if (!id) {
      imgUrl = '/images/pokemons/b_green-supgb_151_back.png'
    }
    setSpriteUrl(imgUrl)
  }

  function selectAttack(attack) {
    console.log('selacting attack ', attack)
    // setAttacks(attack)
    dispatch({ type: 'SET_SELECTED_ATTACK', payload: attack })
  }

  function runAway() {
    dispatch({ type: 'SET_VIEW', payload: 'world' })
  }

  function handleShowSelectMove() {
    setShowSelectMove(!showSelectMove)
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
      <div className='fight-users-mon-name-container' onClick={handleShowSelectMove}>
        <h3 className='fight-users-mon-name'>{name ? name : dbName}</h3>
      </div>
      <div className='fight-users-mon-level-container'>
        <h3 className='fight-users-mon-level' style={{cursor: 'pointer'}}>{level}</h3>
      </div>
      <div className='fight-users-mon-hp-container'>
        <h3>{inFightStats.hp}</h3>
        <h3>{data.stats.hp}</h3>
      </div>
      <div className="fight-users-mon-img-container">
        <img src={fullPokemonStripte} alt='pokemon' className='absolute-img' />
      </div>
      <div className="fight-main-options-container">
        {
          view === "pickMove"
            ?
            <div className='fight-select-moves-img-container'>
              <img src={selectingMovesBackgrondImg} alt="ops" className='absolute-img' />
            </div>
            :
            null
        }
        <div className="attacks-options-container">
          {attacklist && attacklist}
        </div>
        <button style={{ zIndex: 4000 }} onClick={runAway} >run</button>
      </div>
    </div>
  )
}

export default Fight
