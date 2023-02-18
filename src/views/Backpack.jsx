import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PokemonParty from '../components/backpack/PokemonParty'
import OpenPokedex from '../components/backpack/OpenPokedex'
import MenuBackgrond from '../animatios/backgronds/MenuBackgrond'
import Font from '../animatios/font/Font'
import Pointer from '../animatios/Pointer'
import pointerPositions from '../utils/pointerPositions'

const Backpack = () => {
  const dispatch = useDispatch();
  const { backpackOpen, backKey, pointerPosition, selectInWorld, backPackView } = useSelector((state) => state)
  const [openBackpack, setOpenBackpack] = useState(backpackOpen)
  const [displayContent, setDisplayContent] = useState()
  const [pointerPositionIndex, setPointerPositionIndex] = useState(16)

  const { backpackInit } = pointerPositions
  const backgrondPosition = { top: 0, left: 0, right: 72, bottom: 120 }

  useEffect(() => {
    setOpenBackpack(backpackOpen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backpackOpen])

  useEffect(() => {
    if (selectInWorld && backPackView === 'backpackInit') {
      handleSelect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectInWorld]);

  function handleSelect() {
    let selecting = backpackInit[pointerPosition.index].pointing_to
    setDisplayContent(selecting)
    dispatch({ type: "SET_POINTER_POSITION", payload: { index: pointerPosition.index, view: pointerPosition.view } })
    dispatch({ type: "SET_BACKPACK_VIEW", payload: selecting })
    dispatch({ type: "SET_SELECT_IN_WORLD", payload: false })
  }

  useEffect(() => {
    if (backPackView === 'backpackInit') {
      setDisplayContent("")
      if(backpackOpen) {
        dispatch({ type: "TOGGLE_BACKPACK" })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backKey])

  useEffect(() => {
    setPointerPositionIndex(backpackInit[pointerPosition.index].top)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPosition])

  return (
    <div className="main-backpack-container">
      {
        openBackpack ? (
          <div className='relativeP'>
            <div className='absolute-size-100'>
              <MenuBackgrond position={backgrondPosition} />
            </div>
            {displayContent === 'pokeParty' ? <PokemonParty /> : null}
            {displayContent === 'pokedex' ? <OpenPokedex /> : null}
            <div className="relativeP">
              <div style={{ position: 'absolute', top: `${pointerPositionIndex}px`, left: '8px' }}>
                <Pointer />
              </div>
              <div className='open-pokedex-box'>
                <Font text="POKEDEX" />
              </div>
              <div className='open-party-box'>
                <Font text="POKEMON" />
              </div>
              <div className='open-items-box'>
                <Font text="ITEM" />
              </div>
              <div className='open-name-box'>
                <Font text="VIKTOR" />
              </div>
              <div className='open-save-box'>
                <Font text="SAVE" />
              </div>
              <div className='open-options-box'>
                <Font text="OPTION" />
              </div>
              <div className='exit-backback-box' >
                <Font text="EXIT" />
              </div>

            </div>
          </div>
        ) : null
      }
    </div>
  )
}

export default Backpack
