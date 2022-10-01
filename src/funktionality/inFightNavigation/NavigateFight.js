// function changePointerPosition() {
//   console.log('pointerPositionIndex',pointerPositionIndex)
//   switch (pointerPositionFight) {
//     case 'up':
//       if (pointerPositionIndex === 2) { setPointerPositionIndex(0) };
//       if (pointerPositionIndex === 3) { setPointerPositionIndex(1) };
//       if (pointerPositionIndex > 3) { setPointerPositionIndex(pointerPositionIndex - 1) };
//       break;
//     case 'down':
//       if (pointerPositionIndex === 0) { setPointerPositionIndex(2) };
//       if (pointerPositionIndex === 1) { setPointerPositionIndex(3) };
//       if (pointerPositionIndex < 7) {setPointerPositionIndex(pointerPositionIndex + 1)}
//       break;
//     case 'right':
//       if (pointerPositionIndex === 0) { setPointerPositionIndex(1) };
//       if (pointerPositionIndex === 2) { setPointerPositionIndex(3) };
//       break;
//     case 'left':
//       if (pointerPositionIndex === 1) { setPointerPositionIndex(0) };
//       if (pointerPositionIndex === 3) { setPointerPositionIndex(2) };
//       break;
//     default:
//       console.log('problem in changePointerPosition()');
//       break;
//   }
// }

const NavigateFight = (dispatch ,direction, index) => {

  switch (direction) {
    // pionter start
    case 'arrowdown':
      if (index === 0) { return 2 };
      if (index === 1) { return 3 };
      if (index < 7) { return index + 1 }
      return index
    case 'arrowup':
      if (index === 2) { return 0 };
      if (index === 3) { return 1 };
      if (index > 4) { return index - 1 };
      return index
    case 'arrowleft':
      if (index === 1) { return 0 };
      if (index === 3) { return 2 };
      return index
    case 'arrowright':
      if (index === 0) { return 1 };
      if (index === 2) { return 3 };
      return index
    // pointer stop
    case 'enter':
      dispatch({ type: "SET_SELECT_IN_FIGHT" })
      return index
    case 'backspace':
      dispatch({ type: "BACK_KEY" })
      return index
    case 'keyi':
      console.log('nav fight press i')
      // dispatch({ type: "SET_FIGHT_VIEW", payload: fightView })
      return index
    case 'keyr':
      console.log('nav fight press r')
      // dispatch({ type: "SET_VIEW", payload: 'world' })
      return index
    case 'space':
      console.log('space was presed')
      return index
    default:
      console.log('no switch match @NavigateFight')
      return index
  }
};

export default NavigateFight