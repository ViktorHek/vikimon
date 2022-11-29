import React from 'react'
import { useDispatch } from 'react-redux'
import MenuBackgrond from '../../animatios/backgronds/MenuBackgrond'
import Font from '../../animatios/font/Font'

const OptionsFight = ({ data }) => {
    const dispatch = useDispatch()
    const { moves } = data

    const position = { top: 0, left: 0, right: 120, bottom: 40 }

    const position2 = { top: 0, left: 0, right: 80, bottom: 32 }

    function selectAttack(attack) {
        data.moves.forEach((move) => {
            if (move.id === attack) {
                dispatch({ type: 'SET_SELECTED_ATTACK', payload: move })
            }
        })
        // setAttacks(attack)
    }

    const attacklist = moves.map((move, index) => {
        let className = `fight-move-selecter-${index}`
        return (
            <div onClick={() => selectAttack(move.id)} className={className} key={move.id}>
                <Font text={move.name} />
            </div>
        )
    })

    return (
        <div className="fight-main-options-container">
            <div className='fight-select-moves-img-container-1'>
                <MenuBackgrond position={position} />
            </div>
            <div className='fight-select-moves-img-container-2'>
                <MenuBackgrond position={position2} />
                <div style={{ marginTop: '8px', marginLeft: '8px', marginRight: 'auto' }}>
                    <Font text="TYPE/" />
                </div>
                <div style={{ marginLeft: '16px' }}>
                    <Font text="NORMAL" />
                </div>
                <div style={{ marginLeft: '38px' }}>
                    <Font text="20/30" />
                </div>
            </div>
            <div className="attacks-options-container">
                {attacklist && attacklist}
            </div>
        </div>
    )
}

export default OptionsFight
