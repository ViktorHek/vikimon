import React from 'react'
// import React, { useEffect, useState } from 'react'

const Fight = () => {

  // useEffect(() => {
  //   setMapPos(playermovement.map)
  // },[playermovement])
  let battleBackgrond = '/images/backgronds/battle/battleInterface_grass1.jpg'

  return (
    <div style={{position: 'relative', top: '0px', left: '0px', height: '100%'}}>
      <div
        style={{
          position: 'relative',
          top: '0px',
          left: '0px',
          height: '450px',
          width: '500px',
          overflow: 'hidden',
        }}
      >
        <img
          src={battleBackgrond}
          alt="error"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            objectFit: 'fill'
          }}
        />
      </div>
    </div>
  )
}

export default Fight
