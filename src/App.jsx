import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import OpenWorld from './views/OpenWorld'
import Fight from './views/Fight'
import './styles/css/styles.css'
import './styles/scss/styles.css'

function App() {
  const {viewState} = useSelector((state) => state)
  const [displayedView, setDisplayedView] = useState('world')

  useEffect(() => {
    if(viewState === 'WildPokemonEncounter') {
      setDisplayedView('FightView')
    } else {
      setDisplayedView('world')
    }
  },[viewState])

  return (
    <div className="main_game_container">
      <div style={{height: '450px', width: '500px'}} >
        {displayedView === 'FightView' ? <Fight/> : <OpenWorld />}
      </div>
    </div>
  )
}

export default App
