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
          },
          coordinatesEvents: action.payload.coordinatesEvents
        }
      }
    case 'OPEN_BACKPACK':
      return {
        ...state,
        backpackOpen: !state.backpackOpen
      }
    case 'SET_MY_POKEMONS':
      return {
        ...state,
        myPokemons: action.payload
      }
    case 'BACK_KEY':
      return {
        ...state,
        backKey: !state.backKey
      }
    case 'SET_SELECTED_ATTACK':
      return {
        ...state,
        selectedAttackFronRedux: action.payload
      }
    case 'POPULATE_POKEMON_PARTY':
      return {
        ...state,
        myPokemons: action.payload
      }
    default:
      return state
  }
}

export default rootReducer