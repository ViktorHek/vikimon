import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import api from '../database/api'

const Fight = ({ data }) => {
    // const dispatch = useDispatch()
    //   const [selectedAttack, setSelectedAttack] = useState('')
    //   const [pokiParty, setPokiParty] = useState([])
    //   const [attacks, setAttacks] = useState([])
    const { selectedAttackFronRedux } = useSelector((state) => state)
    console.log('opponent data: ', data)
    const { level } = data;
    const inFightStats = {
        attack: data.stats.attack,
        defence: data.stats.defence,
        special: data.stats.special,
        speed: data.stats.speed,
        hp: data.stats.hp,
    }
    const dbName = data.dbData.name

    let fullPokemonStripte = '/images/pokemons/spr_green-supgb_001_transparent.png'
    let posX = 0
    let posY = 0
    // let posX = 65
    // let posY = 29

    useEffect(() => {
        console.log('update in opponentInFigt', selectedAttackFronRedux)
    }, [selectedAttackFronRedux])

    return (
        <div className='fight-opponent-main-container'>
            <div className='fight-opponent-name-container'>
                <h3>{dbName}</h3>
            </div>
            <div className='fight-opponent-level-container'>
                <h3>{level}</h3>
            </div>
            <div className='fight-opponent-hp-container'>
                <h3>{inFightStats.hp}</h3>
            </div>
            <div className='fight-opponent-mon-img-container'>
                <img src={fullPokemonStripte} alt='pokemon' style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    top: `-${posY}px`,
                    left: `-${posX}px`
                }} />
            </div>

        </div>
    )
}

export default Fight
