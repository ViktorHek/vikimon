
const NavigateFight = (dispatch, direction, state) => {
  let fightView = "init"
  if (state.fightView === "init") {
    fightView = "selectMoves"
  } else {
    fightView = "init"
  }
  switch (direction) {
    // pionter start
    case 'arrowdown':
      dispatch({ type: "SET_SELECT_POINTER_POSITION", payload: 'down' })
      break;
    case 'arrowup':
      dispatch({ type: "SET_SELECT_POINTER_POSITION", payload: 'up' })
      break;
    case 'arrowleft':
      dispatch({ type: "SET_SELECT_POINTER_POSITION", payload: 'left' })
      break;
    case 'arrowright':
      dispatch({ type: "SET_SELECT_POINTER_POSITION", payload: 'right' })
      break;
    // pointer stop
    case 'x':
      dispatch({ type: "SET_SELECT_IN_FIGHT" })
      break;
    case 'i':
      dispatch({ type: "SET_FIGHT_VIEW", payload: fightView })
      break;
    case 'r':
      dispatch({ type: "SET_VIEW", payload: 'world' })
      break;
    case 'backspace':
      dispatch({ type: "BACK_KEY" })
      break;
    default:
      dispatch({ type: "error_in_navigateFight", payload: "no val matching switch statment" })
      break;
  }
};

export default NavigateFight