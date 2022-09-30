import React from 'react'

const FontChars = ({ char }) => {

  let svg = null

  switch (char) {
    case "a":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="2" width="3" height="1" fill="black" />
          <rect x="5" y="3" width="1" height="3" fill="black" />
          <rect x="2" y="4" width="3" height="1" fill="black" />
          <rect x="1" y="5" width="1" height="1" fill="black" />
          <rect x="2" y="6" width="5" height="1" fill="black" />
        </svg>
      )
      break;
    case "b":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="3" width="4" height="1" fill="black" />
          <rect x="6" y="4" width="1" height="2" fill="black" />
          <rect x="2" y="6" width="4" height="1" fill="black" />
          <rect x="1" width="1" height="7" fill="black" />
        </svg>
      )
      break;
    case "c":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="2" width="4" height="1" fill="black" />
          <rect x="6" y="3" width="1" height="1" fill="black" />
          <rect x="1" y="3" width="1" height="3" fill="black" />
          <rect x="2" y="6" width="4" height="1" fill="black" />
          <rect x="6" y="5" width="1" height="1" fill="black" />
        </svg>
      )
      break;
    case "d":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="6" width="4" height="1" fill="black" />
          <rect x="6" width="1" height="7" fill="black" />
          <rect x="2" y="3" width="4" height="1" fill="black" />
          <rect x="1" y="4" width="1" height="2" fill="black" />
        </svg>

      )
      break;
    case "e":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="6" width="5" height="1" fill="black" />
          <rect x="2" y="2" width="4" height="1" fill="black" />
          <rect x="6" y="3" width="1" height="1" fill="black" />
          <rect x="2" y="4" width="5" height="1" fill="black" />
          <rect x="1" y="3" width="1" height="3" fill="black" />
        </svg>
      )
      break;
    case "f":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M6 1H7V2H6V1Z" fill="black" />
          <path d="M5 0H6V1H5V0Z" fill="black" />
          <path d="M4 0H5V1H4V0Z" fill="black" />
          <path d="M3 1H4V3H3V1Z" fill="black" />
          <path d="M3 4H4V7H3V4Z" fill="black" />
          <path d="M1 3H7V4H1V3Z" fill="black" />
        </svg>

      )
      break;
    case "g":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="7" width="5" height="1" fill="black" />
          <rect x="2" y="2" width="4" height="1" fill="black" />
          <rect x="1" y="3" width="1" height="2" fill="black" />
          <rect x="6" y="2" width="1" height="5" fill="black" />
          <rect x="2" y="5" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "h":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" width="1" height="7" fill="black" />
          <rect x="2" y="3" width="3" height="1" fill="black" />
          <rect x="5" y="4" width="1" height="3" fill="black" />
        </svg>

      )
      break;
    case "i":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="3" y="1" width="1" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="4" fill="black" />
        </svg>

      )
      break;
    case "j":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="7" width="2" height="1" fill="black" />
          <rect x="4" y="3" width="1" height="4" fill="black" />
          <rect x="4" y="1" width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "k":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="5" y="6" width="2" height="1" fill="black" />
          <rect x="2" y="4" width="1" height="1" fill="black" />
          <rect x="1" width="1" height="7" fill="black" />
          <rect x="5" y="2" width="2" height="1" fill="black" />
          <rect x="3" y="3" width="2" height="1" fill="black" />
          <rect x="3" y="5" width="2" height="1" fill="black" />
        </svg>

      )
      break;
    case "l":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="3" width="1" height="7" fill="black" />
        </svg>

      )
      break;
    case "m":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="3" y="3" width="1" height="4" fill="black" />
          <rect x="4" y="2" width="1" height="1" fill="black" />
          <rect x="5" y="3" width="1" height="4" fill="black" />
          <rect x="1" y="2" width="1" height="5" fill="black" />
          <rect x="2" y="2" width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "n":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="2" width="1" height="5" fill="black" />
          <rect x="3" y="2" width="3" height="1" fill="black" />
          <rect x="6" y="3" width="1" height="4" fill="black" />
        </svg>

      )
      break;
    case "o":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="3" width="1" height="3" fill="black" />
          <rect x="2" y="6" width="4" height="1" fill="black" />
          <rect x="6" y="3" width="1" height="3" fill="black" />
          <rect x="2" y="2" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "p":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="5" width="4" height="1" fill="black" />
          <rect x="1" y="2" width="1" height="6" fill="black" />
          <rect x="2" y="2" width="4" height="1" fill="black" />
          <rect x="6" y="3" width="1" height="2" fill="black" />
        </svg>

      )
      break;
    case "q":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="3" width="1" height="2" fill="black" />
          <rect x="6" y="2" width="1" height="6" fill="black" />
          <rect x="2" y="5" width="4" height="1" fill="black" />
          <rect x="2" y="2" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "r":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="4" width="1" height="1" fill="black" />
          <rect x="1" y="2" width="1" height="5" fill="black" />
          <rect x="4" y="2" width="3" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="1" fill="black" />
        </svg>
      )
      break;
    case "s":
      svg = (

        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="6" width="5" height="1" fill="black" />
          <rect x="1" y="3" width="1" height="1" fill="black" />
          <rect x="2" y="4" width="4" height="1" fill="black" />
          <rect x="6" y="5" width="1" height="1" fill="black" />
          <rect x="2" y="2" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "t":
      svg = (


        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="3" y="1" width="1" height="1" fill="black" />
          <rect x="1" y="2" width="5" height="1" fill="black" />
          <rect x="4" y="6" width="2" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="3" fill="black" />
        </svg>

      )
      break;
    case "u":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="2" width="1" height="4" fill="black" />
          <rect x="5" y="2" width="1" height="4" fill="black" />
          <rect x="2" y="6" width="4" height="1" fill="black" />
        </svg>


      )
      break;
    case "v":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="5" y="2" width="1" height="3" fill="black" />
          <rect x="1" y="2" width="1" height="3" fill="black" />
          <rect x="2" y="5" width="1" height="1" fill="black" />
          <rect x="3" y="6" width="1" height="1" fill="black" />
          <rect x="4" y="5" width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "w":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect y="2" width="1" height="4" fill="black" />
          <rect x="1" y="6" width="1" height="1" fill="black" />
          <rect x="2" y="5" width="1" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="2" fill="black" />
          <rect x="4" y="5" width="1" height="1" fill="black" />
          <rect x="5" y="6" width="1" height="1" fill="black" />
          <rect x="6" y="2" width="1" height="4" fill="black" />
        </svg>

      )
      break;
    case "x":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect y="2" width="2" height="1" fill="black" />
          <rect x="5" y="2" width="1" height="1" fill="black" />
          <rect x="4" y="3" width="1" height="1" fill="black" />
          <rect x="3" y="4" width="1" height="1" fill="black" />
          <rect x="4" y="5" width="1" height="1" fill="black" />
          <rect x="5" y="6" width="2" height="1" fill="black" />
          <rect x="2" y="5" width="1" height="1" fill="black" />
          <rect x="1" y="6" width="1" height="1" fill="black" />
          <rect x="2" y="3" width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "y":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="2" width="1" height="3" fill="black" />
          <rect x="5" y="2" width="1" height="5" fill="black" />
          <rect x="2" y="5" width="3" height="1" fill="black" />
          <rect x="1" y="7" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "z":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="2" width="6" height="1" fill="black" />
          <rect x="5" y="3" width="1" height="1" fill="black" />
          <rect x="3" y="4" width="2" height="1" fill="black" />
          <rect x="2" y="5" width="1" height="1" fill="black" />
          <rect x="1" y="6" width="6" height="1" fill="black" />
        </svg>

      )
      break;
    case "A":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="4" y="1" width="1" height="2" fill="black" />
          <rect y="5" width="1" height="2" fill="black" />
          <rect x="6" y="5" width="1" height="2" fill="black" />
          <rect x="1" y="4" width="5" height="1" fill="black" />
          <rect x="1" y="3" width="1" height="1" fill="black" />
          <rect x="2" y="1" width="1" height="2" fill="black" />
          <rect x="5" y="3" width="1" height="1" fill="black" />
          <rect x="3" width="1" height="1" fill="black" />
        </svg>
      )
      break;
    case "B":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="6" fill="black" />
          <rect x="1" width="4" height="1" fill="black" />
          <rect x="5" y="1" width="1" height="2" fill="black" />
          <rect x="1" y="3" width="5" height="1" fill="black" />
          <rect x="6" y="4" width="1" height="2" fill="black" />
          <rect y="6" width="6" height="1" fill="black" />
        </svg>

      )
      break;
    case "C":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="1" transform="matrix(-1 0 0 1 7 1)" fill="black" />
          <rect x="2" width="4" height="1" fill="black" />
          <rect x="1" y="1" width="1" height="1" fill="black" />
          <rect x="6" y="5" width="1" height="1" fill="black" />
          <rect x="2" y="6" width="4" height="1" fill="black" />
          <rect x="1" y="5" width="1" height="1" fill="black" />
          <rect y="2" width="1" height="3" fill="black" />
        </svg>

      )
      break;
    case "D":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="7" fill="black" />
          <rect x="1" width="4" height="1" fill="black" />
          <rect x="5" y="1" width="1" height="1" fill="black" />
          <rect x="6" y="2" width="1" height="3" fill="black" />
          <rect x="5" y="5" width="1" height="1" fill="black" />
          <rect x="1" y="6" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "E":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="6" width="6" height="1" fill="black" />
          <rect x="1" y="3" width="5" height="1" fill="black" />
          <rect x="1" width="6" height="1" fill="black" />
          <rect width="1" height="7" fill="black" />
        </svg>

      )
      break;
    case "F":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="7" fill="black" />
          <rect x="1" y="3" width="5" height="1" fill="black" />
          <rect x="1" width="6" height="1" fill="black" />
        </svg>

      )
      break;
    case "G":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="1" width="1" height="1" fill="black" />
          <rect x="2" width="4" height="1" fill="black" />
          <rect x="6" y="1" width="1" height="1" fill="black" />
          <rect y="2" width="1" height="3" fill="black" />
          <rect x="3" y="3" width="4" height="1" fill="black" />
          <rect x="6" y="4" width="1" height="2" fill="black" />
          <rect x="2" y="6" width="4" height="1" fill="black" />
          <rect x="1" y="5" width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "H":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="7" fill="black" />
          <rect x="1" y="3" width="5" height="1" fill="black" />
          <rect x="6" width="1" height="7" fill="black" />
        </svg>

      )
      break;
    case "I":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="3" y="1" width="1" height="5" fill="black" />
          <rect x="1" width="5" height="1" fill="black" />
          <rect x="1" y="6" width="5" height="1" fill="black" />
        </svg>

      )
      break;
    case "J":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" width="6" height="1" fill="black" />
          <rect x="4" y="1" width="1" height="5" fill="black" />
          <rect x="1" y="6" width="3" height="1" fill="black" />
          <rect y="4" width="1" height="2" fill="black" />
        </svg>

      )
      break;
    case "K":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="4" y="1" width="1" height="1" fill="black" />
          <rect x="3" y="2" width="1" height="2" fill="black" />
          <rect x="2" y="3" width="1" height="1" fill="black" />
          <rect x="4" y="4" width="1" height="1" fill="black" />
          <rect x="5" y="5" width="1" height="1" fill="black" />
          <rect x="5" width="1" height="1" fill="black" />
          <rect x="6" y="6" width="1" height="1" fill="black" />
          <rect x="1" y="4" width="1" height="1" fill="black" />
          <rect width="1" height="7" fill="black" />
        </svg>

      )
      break;
    case "L":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="6" fill="black" />
          <rect y="6" width="7" height="1" fill="black" />
        </svg>

      )
      break;
    case "M":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="4" y="2" width="1" height="1" fill="black" />
          <rect x="5" y="1" width="1" height="1" fill="black" />
          <rect x="6" width="1" height="7" fill="black" />
          <rect width="1" height="7" fill="black" />
          <rect x="2" y="2" width="1" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="1" fill="black" />
          <rect x="1" y="1" width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "N":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="7" fill="black" />
          <rect x="1" y="1" width="1" height="1" fill="black" />
          <rect x="2" y="2" width="1" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="1" fill="black" />
          <rect x="4" y="4" width="1" height="1" fill="black" />
          <rect x="5" y="5" width="1" height="1" fill="black" />
          <rect x="6" width="1" height="7" fill="black" />
        </svg>

      )
      break;
    case "O":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="1" width="1" height="1" fill="black" />
          <rect x="5" y="1" width="1" height="1" fill="black" />
          <rect y="2" width="1" height="3" fill="black" />
          <rect x="6" y="2" width="1" height="3" fill="black" />
          <rect x="1" y="5" width="1" height="1" fill="black" />
          <rect x="5" y="5" width="1" height="1" fill="black" />
          <rect x="2" y="6" width="3" height="1" fill="black" />
          <rect x="2" width="3" height="1" fill="black" />
        </svg>

      )
      break;
    case "P":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="7" fill="black" />
          <rect x="1" width="5" height="1" fill="black" />
          <rect x="6" y="1" width="1" height="2" fill="black" />
          <rect x="1" y="3" width="5" height="1" fill="black" />
        </svg>

      )
      break;
    case "Q":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="1" width="1" height="1" fill="black" />
          <rect x="2" width="3" height="1" fill="black" />
          <rect x="5" y="1" width="1" height="1" fill="black" />
          <rect x="6" y="2" width="1" height="3" fill="black" />
          <rect y="2" width="1" height="3" fill="black" />
          <rect x="4" y="4" width="1" height="1" fill="black" />
          <rect x="5" y="5" width="1" height="1" fill="black" />
          <rect x="6" y="6" width="1" height="1" fill="black" />
          <rect x="1" y="5" width="1" height="1" fill="black" />
          <rect x="2" y="6" width="3" height="1" fill="black" />
        </svg>

      )
      break;
    case "R":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="7" fill="black" />
          <rect x="1" width="5" height="1" fill="black" />
          <rect x="6" y="1" width="1" height="2" fill="black" />
          <rect x="1" y="3" width="5" height="1" fill="black" />
          <rect x="4" y="4" width="1" height="1" fill="black" />
          <rect x="5" y="5" width="1" height="1" fill="black" />
          <rect x="6" y="6" width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "S":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="5" y="1" width="1" height="1" fill="black" />
          <rect y="1" width="1" height="2" fill="black" />
          <rect x="1" y="3" width="5" height="1" fill="black" />
          <rect x="6" y="4" width="1" height="2" fill="black" />
          <rect y="5" width="1" height="1" fill="black" />
          <rect x="1" y="6" width="5" height="1" fill="black" />
          <rect x="1" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "T":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="7" height="1" fill="black" />
          <rect x="3" y="1" width="1" height="6" fill="black" />
        </svg>

      )
      break;
    case "U":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="5" fill="black" />
          <rect x="6" width="1" height="7" fill="black" />
          <rect x="1" y="5" width="1" height="1" fill="black" />
          <rect x="2" y="6" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "V":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="2" fill="black" />
          <rect x="1" y="2" width="1" height="2" fill="black" />
          <rect x="2" y="4" width="1" height="2" fill="black" />
          <rect x="3" y="6" width="1" height="1" fill="black" />
          <rect x="4" y="4" width="1" height="2" fill="black" />
          <rect x="5" y="2" width="1" height="2" fill="black" />
          <rect x="6" width="1" height="2" fill="black" />
        </svg>
      )
      break;
    case "W":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="7" fill="black" />
          <rect x="1" y="4" width="1" height="2" fill="black" />
          <rect x="2" y="2" width="1" height="2" fill="black" />
          <rect x="3" y="1" width="1" height="1" fill="black" />
          <rect x="4" y="2" width="1" height="2" fill="black" />
          <rect x="5" y="4" width="1" height="2" fill="black" />
          <rect x="6" width="1" height="7" fill="black" />
        </svg>

      )
      break;
    case "X":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect width="1" height="1" fill="black" />
          <rect x="1" width="1" height="2" fill="black" />
          <rect x="6" width="1" height="1" fill="black" />
          <rect x="5" width="1" height="2" fill="black" />
          <rect x="2" y="2" width="1" height="1" fill="black" />
          <rect x="4" y="2" width="1" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="1" fill="black" />
          <rect x="4" y="4" width="1" height="1" fill="black" />
          <rect x="2" y="4" width="1" height="1" fill="black" />
          <rect x="1" y="5" width="1" height="2" fill="black" />
          <rect x="5" y="5" width="1" height="2" fill="black" />
          <rect x="6" y="6" width="1" height="1" fill="black" />
          <rect y="6" width="1" height="1" fill="black" />
        </svg>
      )
      break;
    case "Y":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="1" width="1" height="1" fill="black" />
          <rect x="2" y="2" width="1" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="4" fill="black" />
          <rect x="4" y="2" width="1" height="1" fill="black" />
          <rect x="5" y="1" width="1" height="1" fill="black" />
          <rect x="6" width="1" height="1" fill="black" />
          <rect width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "Z":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect y="6" width="7" height="1" fill="black" />
          <rect width="7" height="1" fill="black" />
          <rect x="5" y="1" width="1" height="1" fill="black" />
          <rect x="4" y="2" width="1" height="1" fill="black" />
          <rect x="3" y="3" width="1" height="1" fill="black" />
          <rect x="2" y="4" width="1" height="1" fill="black" />
          <rect x="1" y="5" width="1" height="1" fill="black" />
        </svg>

      )
      break;
    case "0":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="2" width="1" height="1" fill="black" />
          <rect x="5" y="3" width="2" height="2" fill="black" />
          <rect x="5" y="5" width="1" height="1" fill="black" />
          <rect x="2" y="6" width="3" height="1" fill="black" />
          <rect x="1" y="5" width="2" height="1" fill="black" />
          <rect x="2" y="1" width="3" height="1" fill="black" />
          <rect y="3" width="2" height="2" fill="black" />
          <rect x="4" y="2" width="2" height="1" fill="black" />
        </svg>

      )
      break;
    case "1":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="2" width="1" height="1" fill="black" />
          <rect x="3" y="1" width="2" height="5" fill="black" />
          <rect x="1" y="6" width="6" height="1" fill="black" />
        </svg>

      )
      break;
    case "2":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="1" width="5" height="1" fill="black" />
          <rect y="2" width="2" height="1" fill="black" />
          <rect x="5" y="2" width="2" height="2" fill="black" />
          <rect x="4" y="3" width="1" height="1" fill="black" />
          <rect x="1" y="4" width="4" height="1" fill="black" />
          <rect y="5" width="3" height="2" fill="black" />
          <rect x="3" y="6" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "3":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="1" width="6" height="1" fill="black" />
          <rect x="4" y="2" width="2" height="1" fill="black" />
          <rect x="2" y="3" width="3" height="1" fill="black" />
          <rect y="5" width="2" height="1" fill="black" />
          <rect x="5" y="4" width="2" height="2" fill="black" />
          <rect x="1" y="6" width="5" height="1" fill="black" />
        </svg>

      )
      break;
    case "4":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="3" y="1" width="1" height="2" fill="black" />
          <rect x="4" y="1" width="2" height="6" fill="black" />
          <rect x="6" y="5" width="1" height="1" fill="black" />
          <rect x="2" y="2" width="1" height="2" fill="black" />
          <rect x="1" y="3" width="1" height="1" fill="black" />
          <rect y="4" width="2" height="2" fill="black" />
          <rect x="2" y="5" width="2" height="1" fill="black" />
        </svg>

      )
      break;
    case "5":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect y="1" width="2" height="3" fill="black" />
          <rect x="2" y="3" width="4" height="1" fill="black" />
          <rect x="5" y="4" width="2" height="2" fill="black" />
          <rect y="5" width="2" height="1" fill="black" />
          <rect x="1" y="6" width="5" height="1" fill="black" />
          <rect x="2" y="1" width="4" height="1" fill="black" />
        </svg>

      )
      break;
    case "6":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="1" y="1" width="5" height="1" fill="black" />
          <rect y="2" width="2" height="4" fill="black" />
          <rect x="2" y="3" width="4" height="1" fill="black" />
          <rect x="1" y="6" width="5" height="1" fill="black" />
          <rect x="5" y="4" width="2" height="2" fill="black" />
        </svg>

      )
      break;
    case "7":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect y="1" width="7" height="1" fill="black" />
          <rect x="5" y="2" width="2" height="1" fill="black" />
          <rect x="4" y="3" width="2" height="1" fill="black" />
          <rect x="3" y="4" width="2" height="1" fill="black" />
          <rect x="2" y="5" width="2" height="2" fill="black" />
          <rect y="2" width="2" height="1" fill="black" />
        </svg>

      )
      break;
    case "8":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="2" y="1" width="3" height="1" fill="black" />
          <rect x="2" y="3" width="3" height="1" fill="black" />
          <rect x="2" y="6" width="3" height="1" fill="black" />
          <rect y="2" width="1" height="1" fill="black" />
          <rect x="6" y="2" width="1" height="1" fill="black" />
          <rect y="4" width="1" height="2" fill="black" />
          <rect x="6" y="4" width="1" height="2" fill="black" />
          <rect x="5" y="1" width="1" height="6" fill="black" />
          <rect x="1" y="1" width="1" height="6" fill="black" />
        </svg>

      )
      break;
    case "9":
      svg = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect y="2" width="2" height="2" fill="black" />
          <rect x="1" y="1" width="5" height="1" fill="black" />
          <rect x="1" y="4" width="4" height="1" fill="black" />
          <rect x="5" y="2" width="2" height="4" fill="black" />
          <rect x="1" y="6" width="5" height="1" fill="black" />
        </svg>
      )
      break;
    default:
      <div className='main-font-chars-container'>
        <h1>ghghghghgh</h1>
      </div>
      break;
  }
  return (
    <div className='main-font-chars-container'>
      {svg && svg}
    </div>
  )
}

export default FontChars
