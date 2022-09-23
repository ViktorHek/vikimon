import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import OptionsFight from './OptionsFight'

const Fight = ({ data }) => {
  const { selectedAttackFronRedux, selectInFight, backKey, fightView, pointerPositionFight } = useSelector((state) => state)
  const [selectedAttack, setSelectedAttack] = useState('')
  const [showSelectMove, setShowSelectMove] = useState(false)
  const [spriteUrl, setSpriteUrl] = useState("")
  const [view, setView] = useState("init")

  console.log('player fight pokemon', data)
  const { id, level, name } = data;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setView(fightView)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightView])

  useEffect(() => {
    setSelectedAttack(selectedAttackFronRedux)
    console.log({ selectedAttack })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function handleShowSelectMove() {
    setShowSelectMove(!showSelectMove)
  }

  return (
    <div>
      <div className='fight-users-mon-name-container' onClick={handleShowSelectMove}>
        <span className='fight-users-mon-name'>{name ? name : dbName}</span>
      </div>
      <div className='fight-users-mon-level-container'>
        <span>{level}</span>
      </div>
      <div className='fight-users-mon-hp-container'>
        <span>{inFightStats.hp}</span>
        <span>{data.stats.hp}</span>
      </div>
      <div className="fight-users-mon-img-container">
        <img src={spriteUrl} alt='pokemon' className='absolute-img' />
      </div>
      {view === "selectMoves" ? <OptionsFight data={data} /> : null}
    </div>
  )
}

export default Fight
