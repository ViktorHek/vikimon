import React from 'react'
import FontChars from './FontChars';

const Font = ({ text }) => {

  const wordArr = text.split(" ")

  function displayWord(word) {
    let charArr = word.split("")
    let chars = charArr.map((char) => {
      let random = Math.random()
      return (
        <div className='font-char-container' key={random}>
          <FontChars char={char} />
        </div>
      )
    })
    return chars
  }

  const displayText = wordArr.map((word) => {
    let random = Math.random()
    return (
      <div className='font-word-container' key={random}>
        {displayWord(word)}
      </div>
    )
  })

  return (
    <div className='main-font-container'>
      {displayText && displayText}
    </div>
  )
}

export default Font
