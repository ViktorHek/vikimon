import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Font from '../../animatios/font/Font'

const Fight = ({ data }) => {
    const dispatch = useDispatch()
    const { damageOpponent } = useSelector((state) => state)
    const [spriteUrl, setSpriteUrl] = useState("")
    const [displayHealth, setDisplayHealth] = useState(100)
    const maxHealth = data.stats.hp
    const [health, setHealth] = useState(maxHealth)

    const { level, id } = data;
    const dbName = data.dbData.name
    // const baseStats = {
    //     attack: data.stats.attack,
    //     defence: data.stats.defence,
    //     special: data.stats.special,
    //     speed: data.stats.speed,
    //     hp: data.stats.hp,
    // }

    useEffect(() => {
        populateData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        applyAttack(damageOpponent)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [damageOpponent])

    function applyAttack(damageOpponent) {
        let healthAfterDamage = health - damageOpponent
        let healthPercent = healthAfterDamage / maxHealth
        let healthPercentToPixel = healthPercent * 100
        setHealth(healthAfterDamage)        
        if (healthPercentToPixel < 1) {
            healthPercentToPixel = 0
            opponentPokemonFaint()
        }
        setDisplayHealth(healthPercentToPixel)
    }

    function opponentPokemonFaint() {
        console.log('YOU WIN!!')
        dispatch({ type: "SET_VIEW", payload: 'openWorld' })
    }

    function populateData() {
        setPokemonImgUrl(id)
    }

    function setPokemonImgUrl(id) {
        let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${id}.png`
        if (!id) {
            imgUrl = '/images/pokemons/b_green-supgb_001_transparent.png'
        }
        setSpriteUrl(imgUrl)
    }

    // function changeHealth(damage) {
    //     // max width = 48 px
    //     data.dbData.stats.hp
    //     setHealth()
    // }

    return (
        <div className='fight-opponent-main-container'>
            <div className='fight-opponent-name-container'>
                <Font text={dbName.toUpperCase()} />
            </div>
            <div className='fight-opponent-level-container'>
                <Font text={JSON.stringify(level)} />
            </div>
            <div className='fight-opponent-hp-container'>
                <span className='fight-opponent-hp' style={{ width: `${displayHealth}%` }}></span>
            </div>
            <div className='fight-opponent-mon-img-container'>
                <img src={spriteUrl} alt='pokemon' className='absolute-size-100' />
            </div>

        </div>
    )
}

export default Fight
