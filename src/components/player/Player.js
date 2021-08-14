import React from 'react'

const Player = () => {
  let y = 96
  let x = 25
  let img="/images/players/Characters_Overworld.png"
  return (
    <div 
      style={{
        position: 'absolute',
        height: '46px',
        width: '46px',
        top: `100px`,
        left: `500px`,
        overflow: 'hidden'
      }}
    >
      <img src={`${img}`} alt='' style={{
        height: '300%',
        width: '100%',
      }}/>
    </div>
  )
}

export default Player
