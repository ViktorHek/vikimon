import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import api from '../database/api'

const Fight = () => {
    // const dispatch = useDispatch()
    //   const [selectedAttack, setSelectedAttack] = useState('')
    //   const [pokiParty, setPokiParty] = useState([])
    //   const [attacks, setAttacks] = useState([])
    const { selectedAttackFronRedux } = useSelector((state) => state)

    let fullPokemonStripte = '/images/pokemons/Game Boy GBC - Pokemon Red Blue - Pokemon Color Front.png'
    let posX = 65
    let posY = 29

    useEffect(() => {
        console.log('update in opponentInFigt', selectedAttackFronRedux)
    }, [selectedAttackFronRedux])

    return (
        <div className='fight-opponent-main-container'>
            <div className='fight-opponent-mon-img-container'>
                <img src={fullPokemonStripte} alt='pokemon' style={{
                    height: '917px',
                    width: '1727px',
                    position: 'absolute',
                    top: `-${posY}px`,
                    left: `-${posX}px`
                }} />
            </div>

        </div>
    )
}

export default Fight
