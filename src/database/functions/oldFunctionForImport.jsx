
// this was placed in app.js

import React, { useEffect, useState } from 'react'
import './styles/css/styles.css'
import './styles/scss/styles.css'
import axios from 'axios'
import globals from './utils/globalVariables'

function App() {
  const [displayMoves, setDisplayMoves] = useState([])
  const [viewMoves, setViewMoves] = useState(false)

  useEffect(() => {
    for (let index = 0; index < 165; index++) {
      callMoves(index)
    }
  },[])
  
  let movesArr = []

  async function callMoves(index) {
    await axios.get(globals.ApiUrl + 'importDbMoves/' + index)
        .then(res => {
          movesArr.push(res.data)
        }).catch((err) => {
          console.log('Error @components/backpack/PokemonParty - getPokedexDatabase()', err);
        });
    if(movesArr.length === 164) {
      setDisplayMoves(movesArr)
      console.log('all moves collected',movesArr)
    }
  }

  function handleViewData() {
    setViewMoves(!viewMoves)
  }

  let displayMoveList = displayMoves.map((el) => {
    const template = `{
      id: ${el.id},
      name: '${el.name}',
      accuracy: ${el.accuracy},
      power: ${el.power},
      type: '${el.type}',
      meta: {
        damage_class: ${(el.meta.damage_class ? '"'+el.meta.damage_class+'"' : 'null')},
        effect_chance: ${(el.meta.effect_chance ? el.meta.effect_chance : 'null')},
        effect_entries: ${(el.meta.effect_entries ? '"'+el.meta.effect_entries+'"' : 'null')},
        priority: ${(el.meta.priority ? el.meta.priority : 'null')},
        crit_rate: ${(el.meta.crit_rate ? el.meta.crit_rate : 'null')},
        drain: ${(el.meta.drain ? el.meta.drain : 'null')},
        flinch_chance: ${(el.meta.flinch_chance ? el.meta.flinch_chance : 'null')},
        healing: ${(el.meta.healing ? el.meta.healing : 'null')},
        max_hits: ${(el.meta.max_hits ? el.meta.max_hits : 'null')},
        max_turns: ${(el.meta.max_hits ? el.meta.max_hits : 'null')},
        mix_hits: ${(el.meta.mix_hits ? el.meta.mix_hits : 'null')},
        mix_turns: ${(el.meta.mix_turns ? el.meta.mix_turns : 'null')},
        stat_change: ${(el.meta.stat_change ? el.meta.stat_change : 'null')},
        stat_changes: ${getStatChangeInText(el.meta.stat_changes)},
        target: ${(el.meta.target ? '"'+el.meta.target+'"' : 'null')},
        index: ${(el.meta.index ? el.meta.index : 'null')},
      },
    },`
    return (
      <div>
        <p>
          {template}
        </p>
        {/* <p>---Start---</p>
        <p>id: {el.id}</p>
        <p>name: {el.name}</p>
        <p>accuracy: {el.accuracy}</p>
        <p>power: {el.power}</p>
        <p>type: {el.type}</p>
        <p>--Meta Start:--</p>
        <p>pp: {el.pp}</p>
        <p>damage_class: {el.damage_class}</p>
        <p>effect_chance: {el.effect_chance}</p>
        <p>effect_entries: {el.effect_entries}</p>
        <p>priority: {el.priority}</p>
        <p>crit_rate: {el.crit_rate}</p>
        <p>drain: {el.drain}</p>
        <p>flinch_chance: {el.flinch_chance}</p>
        <p>healing: {el.healing}</p>
        <p>max_hits: {el.max_hits}</p>
        <p>max_turns: {el.max_turns}</p>
        <p>min_hits: {el.min_hits}</p>
        <p>min_turns: {el.min_turns}</p>
        <p>stat_chance: {el.stat_chance}</p>
        <p>stat_changes: {getStatChangeInText(el.stat_changes)}</p>
        <p>target: {el.target}</p>
        <p>index: {el.index}</p>
        <p>--Meta Slut--</p>
        <p>---Slut---</p> */}
      </div>
    )
  })

  function getStatChangeInText(dataArr) {
    let returnValue = '[]'
    if (!dataArr) {return '[]'};
    for (let index = 0; index < dataArr.length; index++) {
      const element = dataArr[index];
      if (dataArr.length === 1) {
        returnValue = `[{change: ${element.change}, stat: ${element.stat}}]`
      } else if (index === 0) {
        returnValue = `[{change: ${element.change}, stat: ${element.stat}}`
      } else {
        returnValue = returnValue + `{change: ${element.change}, stat: ${element.stat}}]`
      }
    }
    return returnValue
  }

  return (
    <div>
      <button onClick={handleViewData}>view data</button>
      {viewMoves ? <p>{displayMoveList}</p> : <p>no moves</p>}
    </div>
  )
}

export default App
