import initialState from './initialState'
// import localStorrageManager from '../database/localStorrageManager'

const rootReducer = (state = initialState, action) => {
  console.log('@ reducer', action)

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
    case 'SET_FIGHT_VIEW':
      return {
        ...state,
        fightView: action.payload
      }
    case 'SET_SELECT_IN_FIGHT':
      return {
        ...state,
        selectInFight: !state.selectInFight
      }
    case 'SET_SELECT_POINTER_POSITION':
      return {
        ...state,
        pointerPositionFight: action.payload
      }
    case 'SET_DAMAGE_TO_OPPONENT':
      return {
        ...state,
        damageOpponent: action.payload
      }
    case 'SET_POINTER_POSITION':
      return {
        ...state,
        pointerPosition: action.payload
      }
    case 'SET_BACKPACK_VIEW':
      return {
        ...state,
        backPackView: action.payload
      }
    default:
      return state
  }
}

export default rootReducer