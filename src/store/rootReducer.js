import initialState from './initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_MOVEMENT':
      return {
        ...state,
        playermovement: {
          sprite: { 
            x: action.payload.sprite, 
            y: action.payload.sprite 
          },
          map: {
            y: 200, x: 150
          }
        }
      }
    default:
      return state
  }
}

export default rootReducer