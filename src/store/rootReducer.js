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
    case 'SET_SECONDARY_VIEW':
      return {
        ...state,
        secondaryView: action.payload
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
    case 'SET_SELECT':
      return {
        ...state,
        selectTarget: action.payload
      }
    case 'SET_WILD_POKEMON':
      return {
        ...state,
        opponentPokemon: action.payload
      }    
    case 'SET_BATTLE_OBJECT':
      return {
        ...state,
        battleObject: action.payload
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