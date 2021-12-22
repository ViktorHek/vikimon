import React from 'react'

const Player = () => {
  // let y = 96
  // let x = 25
  let mainPlayerDir = 2
  let img="/images/players/Ash_Character_Overworld.jpg"
  return (
    <div 
      style={{
        position: 'relative',
        height: '50px',
        width: '50px',
        top: `200px`,
        left: `200px`,
        overflow: 'hidden',
        zIndex: 5
      }}
    >
      <img src={`${img}`} alt='' style={{
        height: '156px',
        width: '513px',
        position: 'absolute',
        top: '0px',
        left: `-${mainPlayerDir}px`
      }}/>
    </div>
  )
}

export default Player
