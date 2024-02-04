const initialState = {
  playermovement: {
    sprite: { x: 17, y: 0 },
    map: { y: 8, x: 8 },
    img: 'palletTownMain'
  },
  backpackOpen: false,
  myPokemons: [],
  backKey: false,
  selectedAttackFronRedux: null,
  pokedexDB: [],
  mainView: "openWorld", // openWorld || fight
  secondaryView: "", // battleInit || selectMoves || backpackInit || pokemonParty
  selectTarget: false,
  pointerPosition: { index: 0, view: "" },
  battleObject: {},
  opponentPokemon: {},
  damageOpponent: null,
  damagePlayer: null,
  playerMonsHealth: null,
  opponentMonsHealth: null,
};

export default initialState;

