import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import api from '../database/api'

const Fight = () => {
    // const dispatch = useDispatch()
    //   const [selectedAttack, setSelectedAttack] = useState('')
    //   const [pokiParty, setPokiParty] = useState([])
    //   const [attacks, setAttacks] = useState([])
    const { selectedAttackFronRedux } = useSelector((state) => state)

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
