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
      return {
        ...state,
        myPokemons: action.payload
      }
    case 'SET_VIEW':
      return {
        ...state,
        viewState: action.payload
      }
    case 'SET_SELECT_IN_FIGHT':
      return {
        ...state,
        selectInFight: !state.selectInFight
      }
    case 'SET_FIGHT_VIEW':
      return {
        ...state,
        fightView: action.payload
      }
    case 'SET_SELECT_POINTER_POSITION':
      return {
        ...state,
        pointerPositionFight: action.payload
      }
    case "error_in_navigateFight":
      console.log(action.type)
      break
    default:
      return state
  }
}

export default rootReducer