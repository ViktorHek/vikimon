const NavigateFight = (dispatch ,direction, index, fightView) => {


  if (fightView !== "battleInit") {
    if (index < 3 && direction === 'arrowdown') {
      console.log('getting down', index+1)
      return index + 1
    }
    if (index > 0 && direction === 'arrowup') {
      console.log('getting up', index-1)
      return index - 1
    }
  } else {
    switch (direction) {
      case 'arrowdown':
        if (index === 0) { return 2 };
        if (index === 1) { return 3 };
        // if (index < 3) { return index + 1 }
        return index
      case 'arrowup':
        if (index === 2) { return 0 };
        if (index === 3) { return 1 };
        // if (index > 4) { return index - 1 };
        return index
      case 'arrowleft':
        if (index === 1) { return 0 };
        if (index === 3) { return 2 };
        return index
      case 'arrowright':
        if (index === 0) { return 1 };
        if (index === 2) { return 3 };
        return index
      default:
        console.log('no switch match @NavigateFight')
    }
  }

  switch (direction) {
    case 'enter':
      console.log("SET_SELECT_IN_FIGHT")
      dispatch({ type: "SET_SELECT_IN_FIGHT", payload: true })
      return index
    case 'backspace':
      dispatch({ type: "SET_BACK_KEY" })
      return 0
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