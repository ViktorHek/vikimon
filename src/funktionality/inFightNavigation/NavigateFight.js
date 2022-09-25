
const NavigateFight = (dispatch, direction, state) => {
  let fightView = "init"
  let pointer = ""
  if (state.fightView === "init") {
    fightView = "selectMoves"
  } else {
    fightView = "init"
  }
  switch (direction) {
    // pionter start
    case 'arrowdown':
      pointer = 'move-poiner-down'
      /* falls through */
    case 'arrowup':
      pointer = 'move-poiner-up'
      /* falls through */
    case 'arrowleft':
      pointer = 'move-poiner-left'
      /* falls through */
    case 'arrowright':
      pointer = 'move-poiner-right'
      dispatch({ type: "SET_SELECT_POINTER_POSITION", payload: pointer })
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