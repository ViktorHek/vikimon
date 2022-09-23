import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Fight = ({ data }) => {
    const { selectedAttackFronRedux } = useSelector((state) => state)
    const [spriteUrl, setSpriteUrl] = useState("")
    // const [health, setHealth] = useState(0)

    const { level, id } = data;
    const dbName = data.dbData.name
    const inFightStats = {
        attack: data.stats.attack,
        defence: data.stats.defence,
        special: data.stats.special,
        speed: data.stats.speed,
        hp: data.stats.hp,
    }

    const displayHealth = 5

    useEffect(() => {
        populateData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log('update in opponentInFigt', selectedAttackFronRedux)
    }, [selectedAttackFronRedux])

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
                <p>{dbName}</p>
            </div>
            <div className='fight-opponent-level-container'>
                <p>{level}</p>
            </div>
            <div className='fight-opponent-hp-container' style={{ width: `${displayHealth}px` }}></div>
            <div className='fight-opponent-mon-img-container'>
                <img src={spriteUrl} alt='pokemon' className='fight-opponent-mon-img' />
            </div>

        </div>
    )
}

export default Fight
