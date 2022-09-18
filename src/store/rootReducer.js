import initialState from './initialState'
// import localStorrageManager from '../database/localStorrageManager'

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_PLAYER_MOVEMENT':
      return {
        ...state,
        playermovement: action.payload
      }
    case 'OPEN_BACKPACK':
      return {
        ...state,
        backpackOpen: !state.backpackOpen
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
      console.log('uppdating pokemon party in redux', action.payload)
      return {
        ...state,
        myPokemons: action.payload
      }
    case 'SET_VIEW':
      return {
        ...state,
        viewState: action.payload
      }
    default:
      return state
  }
}

export default rootReducer