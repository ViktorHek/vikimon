import initialState from './initialState'

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_PLAYER_MOVEMENT':
      return {
        ...state,
        playermovement: action.payload
      }
    case 'TOGGLE_BACKPACK':
      return {
        ...state,
        backpackOpen: !state.backpackOpen
      }
    case 'SET_BACK_KEY':
      return {
        ...state,
        backKey: action.payload
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
    case 'SET_MAIN_VIEW':
      return {
        ...state,
        mainView: action.payload
      }
    case 'SET_FIGHT_VIEW':
      return {
        ...state,
        fightView: action.payload
      }
    case 'SET_DAMAGE_TO_OPPONENT':
      return {
        ...state,
        damageOpponent: action.payload
      }
    case 'SET_DAMAGE_TO_PLAYER':
      return {
        ...state,
        damagePlayer: action.payload
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
    case 'SET_SELECT':
      return {
        ...state,
        isSelecting: action.payload
      }
    case 'SET_PLAYER_CURRENT_HEALTH':
      return {
        ...state,
        playerMonsHealth: action.payload
      }
    case 'SET_OPPONENT_CURRENT_HEALTH':
      return {
        ...state,
        opponentMonsHealth: action.payload
      }
    default:
      return state
  }
}

export default rootReducer