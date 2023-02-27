const initialState = {
  playermovement: {
    sprite: { x: 17, y: 0 },
    map: { y: 8, x: 8 },
    img: {folder: 'palletTown', file: 'main'}
  },
  backpackOpen: false,
  myPokemons: [],
  backKey: false,
  selectedAttackFronRedux: null,
  pokedexDB: [],
  mainView: "openWorld", // openWorld || fight
  secondaryView: "", // battleInit || selectMoves || backpackInit || pokemonParty
  selectTarget: false,
  damageOpponent: null,
  damagePlayer: null,
  pointerPosition: { index: 0, view: "" },
  playerMonsHealth: null,
  opponentMonsHealth: null,
};

export default initialState;

