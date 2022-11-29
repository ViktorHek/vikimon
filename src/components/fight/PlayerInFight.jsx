import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OptionsFight from './OptionsFight'
import Font from '../../animatios/font/Font'
import HealthBar from '../../animatios/HealthBar'

const PlayerInFight = ({ data }) => {
  const dispatch = useDispatch()
  const { fightView, backKey } = useSelector((state) => state)
  const [spriteUrl, setSpriteUrl] = useState("")
  const [view, setView] = useState("battleInit")
  const [curentHp, setCurentHp] = useState(0)
  const [maxHp, setMaxHp] = useState(100)

  const { id, level, name } = data;
  const dbName = data.dbData.name

  useEffect(() => {
    populateData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function populateData() {
    setPokemonImgUrl(id)
    setMaxHp(data.stats.hp)
    setCurentHp(data.stats.hp)
  }

  function setPokemonImgUrl(id) {
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/${id}.png`
    if (!id) {
      imgUrl = '/images/pokemons/b_green-supgb_151_back.png'
    }
    setSpriteUrl(imgUrl)
  }

  useEffect(() => {
    handleBackKey()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backKey])

  function handleBackKey() {
    if (!backKey) return;
    let payload = "battleInit"
    setView(payload)
    dispatch({ type: "SET_FIGHT_VIEW", payload: payload })
    dispatch({ type: "SET_BACK_KEY", payload: false })
  }

  useEffect(() => {
    setView(fightView)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightView])

  return (
    <div>
      <div className='fight-users-mon-name-container'>
        <Font text={name ? name : dbName.toUpperCase()} />
      </div>
      <div className='fight-users-mon-level-container'>
        <Font text={JSON.stringify(level)} />
      </div>
      <div className='fight-users-mon-health-bar-container'>
        <HealthBar data={{curretnHelath: curentHp, maxHealth: maxHp}} />
      </div>
      <div className='fight-users-mon-hp-container'>
        <Font text={JSON.stringify(curentHp)} />
        <Font text={JSON.stringify(maxHp)} />
      </div>
      <div className="fight-users-mon-img-container">
        <img src={spriteUrl} alt='pokemon' className='absolute-size-100' />
      </div>
      {view === "selectMoves" ? <OptionsFight data={data} /> : null}
    </div>
  )
}

export default PlayerInFight
