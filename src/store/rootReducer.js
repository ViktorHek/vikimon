import initialState from './initialState'

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_PLAYER_MOVEMENT':
      return {
        ...state,
        playermovement: {
          sprite: {
            x: action.payload.sprite.x,
            y: action.payload.sprite.y
          },
          map: {
            y: action.payload.map.y,
            x: action.payload.map.x
          }
        }
      }
    case 'OPEN_BACKPACK':
      return {
        ...state,
        backpackOpen: !state.backpackOpen
      }
    default:
      return state
  }

}

export default rootReducer