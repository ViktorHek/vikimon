import React from 'react'
import FontChars from './FontChars';

const Font = ({ text }) => {

  const wordArr = text.split(" ")

  function displayWord(word) {
    let charArr = word.split("")
    let chars = charArr.map((char) => {
      return (
        <div className='font-char-container'>
          <FontChars char={char} />
        </div>
      )
    })
    return chars
  }

  const displayText = wordArr.map((word) => {
    return (
      <div className='font-word-container'>
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
