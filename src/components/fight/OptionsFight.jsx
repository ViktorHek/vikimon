import React from 'react'
import { useDispatch } from 'react-redux'

const OptionsFight = ({ data }) => {
    const dispatch = useDispatch()
    const selectingMovesBackgrondImg = '/images/backgronds/battle/pokemon_battle_selection_moves_backgrond.png'
    const { moves } = data

    function selectAttack(attack) {
        console.log('selacting attack ', attack)
        data.moves.forEach((move) => {
            if (move.id === attack) {
                console.log('move obj, ', move)                
                dispatch({ type: 'SET_SELECTED_ATTACK', payload: move })
            }
        })
        // setAttacks(attack)
    }

    const attacklist = moves.map((move, index) => {
        let className = `fight-move-selecter-${index}`
        return (
            <div onClick={() => selectAttack(move.id)} className={className} key={move.id}>
                <span className='fight-move-text'>{move.name}</span>
            </div>
        )
    })

    return (
        <div className="fight-main-options-container">
            <div className='fight-select-moves-img-container'>
                <img src={selectingMovesBackgrondImg} alt="ops" className='absolute-img' />
            </div>
            <div className="attacks-options-container">
                {attacklist && attacklist}
            </div>
        </div>
    )
}

export default OptionsFight
