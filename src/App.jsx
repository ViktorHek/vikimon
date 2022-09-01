import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import OpenWorld from './views/OpenWorld'
import Fight from './views/Fight'
import './styles/css/styles.css'
import './styles/scss/styles.css'
import lsm from './database/localStorrageManager'

function App() {
  const {playermovement } = useSelector((state) => state)
  const [displayedView, setDisplayedView] = useState(false)

  useEffect(() => {
    let myMon = lsm.getLocalStorageObject('pokemon')
    console.log({myMon})
    // dispach type: populate party, payload arr
  },[])
  useEffect(() => {
    if(playermovement.coordinatesEvents === 'WildPokemonEncounter') {
      setDisplayedView('FightView')
    }
  },[playermovement])

  return (
    <div className="main_game_container">
      <div style={{height: '450px', width: '500px'}} >
        {displayedView === 'FightView' ? <Fight/> : <OpenWorld />}
      </div>
    </div>
  )
}

export default App
