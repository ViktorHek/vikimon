import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonParty from '../components/backpack/PokemonParty'
import OpenPokedex from '../components/backpack/OpenPokedex'
import MenuBackgrond from '../animatios/backgronds/MenuBackgrond'
import Font from '../animatios/font/Font'
import Pointer from '../animatios/Pointer'

const Backpack = () => {
  const { backpackOpen, backKey, pointerPosition } = useSelector((state) => state)
  const [openBackpack, setOpenBackpack] = useState(backpackOpen)
  const [displaypokemons, setDisplaypokemons] = useState(false)
  const [displayPokedex, setDisplayPokedex] = useState(false)
  const [pointerPositionIndex, setPointerPositionIndex] = useState(1)

  const backgrondPosition = { top: 0, left: 0, right: 72, bottom: 120 }

  useEffect(() => {
    setOpenBackpack(backpackOpen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backpackOpen])

  useEffect(() => {
    setDisplaypokemons(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backKey])

  useEffect(() => {
    // setDisplaypokemons(false)
    console.log({pointerPosition})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPosition])

  function handleDisplayParty() {
    setDisplaypokemons(!displaypokemons)
  }
  function handleOpenPokedex() {
    setDisplayPokedex(!displayPokedex)
  }
  function handleOpenItems() {
    console.log('open items')
  }
  function handleDisplayUser() {
    console.log('open user')
  }
  function handleSaveGame() {
    console.log('handle save game')
  }
  function handleOpenOptions() {
    console.log('open options')
  }
  function exitBackpack() {
    console.log('exit backback')
  }

  return (
    <div className="main-backpack-container">
      {
        openBackpack ? (
          <div className='relativeP'>
            <div className='backpack-menu-backpack-container'>
              <MenuBackgrond position={backgrondPosition} />
            </div>
            {displaypokemons ? <PokemonParty /> : null}
            {displayPokedex ? <OpenPokedex /> : null}

            <div className="backpack-container">
              <div style={{position: 'absolute', top: `${pointerPositionIndex * 16}px`, left: '8px'}}>
                <Pointer/>
              </div>
              <div className='open-pokedex-box' onClick={handleOpenPokedex}>
                <Font text="POKEDEX" />
              </div>
              <div className='open-party-box' onClick={handleDisplayParty}>
                <Font text="POKEMON" />
              </div>
              <div className='open-items-box' onClick={handleOpenItems}>
                <Font text="ITEM" />
              </div>
              <div className='open-name-box' onClick={handleDisplayUser}>
                <Font text="VIKTOR" />
              </div>
              <div className='open-save-box' onClick={handleSaveGame}>
                <Font text="SAVE" />
              </div>
              <div className='open-options-box' onClick={handleOpenOptions}>
                <Font text="OPTION" />
              </div>
              <div className='exit-backback-box' onClick={exitBackpack}>
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
