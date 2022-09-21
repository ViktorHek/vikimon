
const NavigateFight = (dispatch, direction) => {
  let pointer = ""
  switch (direction) {
    // pionter start
    case 'arrowdown':
      pointer = 'move-poiner-down'
    case 'arrowup':
      pointer = 'move-poiner-up'
    case 'arrowleft':
      pointer = 'move-poiner-left'
    case 'arrowright':
      pointer = 'move-poiner-right'
    case 'arrowright':
      pointer = 'move-poiner-right'
      dispatch({type: "SET_SELECT_POINTER_POSITION", payload: pointer})
      break;      
    // pointer stop
    case 'x':
      dispatch({type: "SET_SELECT_IN_FIGHT"})
      break;      
    case 'i':
      dispatch({type: "SET_FIGHT_VIEW"})
      break;      
    case 'r':
      dispatch({type: "SET_VIEW", payload: 'world'})
      break;
    case 'backspace':
      dispatch({type: "BACK_KEY"})
      break;
    default:
      dispatch({type: "error_in_navigateFight", payload: "no val matching switch statment"})
      break;
  }
};

export default NavigateFight