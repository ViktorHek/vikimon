import availableKeys from '../../utils/availableKeys'
import MovePointer from './movePointer'
import PlayerMove from './playerMove'

const Navigation = (dir, dispatch, selector) => {
  const { playermovement, backpackOpen, pointerPosition, backPackView } = selector

  function checkKeys(dir) {
    if (availableKeys.hasOwnProperty(dir) === false) {
      console.log('Not a valid Key @Player.jsx - useKey()', { dir })
      return null
    }
    for (const key in availableKeys) {
      if (Object.hasOwnProperty.call(availableKeys, key)) {
        const element = availableKeys[key];
        if (key === dir) {
          identifyTypeOffKey(dir, element)
        }
      }
    }
  }

  function identifyTypeOffKey(dir, element) {
    switch (dir) {
      case 'arrowdown':
      case 'arrowup':
      case 'arrowleft':
      case 'arrowright':
      case 'keys':
      case 'keyw':
      case 'keya':
      case 'keyd':
        moveTarget(dispatch, element)
        break;
      case 'keyi':
        if (backpackOpen) {
          dispatch({ type: "TOGGLE_BACKPACK" })
        } else {
          dispatch({ type: "SET_POINTER_POSITION", payload: { index: 0, view: 'backpackInit' } })
          dispatch({ type: "TOGGLE_BACKPACK" })
        }
        break;
      case 'backspace':
        dispatch({ type: "SET_BACK_KEY" })
        break;
      case 'enter':
        dispatch({ type: "SET_SELECT_IN_WORLD", payload: true })
        break;
      default:
        console.log('is a valid key, but can not find the type @Player.jsx - identifyTypeOffKey()', { dir })
        break;
    }
  }

  function moveTarget(dispatch, element) {
    if (backpackOpen) {
      MovePointer(dispatch, pointerPosition, element, backPackView)
    } else {
      PlayerMove(dispatch, playermovement, element)
    }
  }

  return checkKeys(dir)
}

export default Navigation
