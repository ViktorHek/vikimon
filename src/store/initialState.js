const initialState = {
  playermovement: {
    sprite: { x: 17, y: 0 },
    map: { y: -80, x: -64 },
  },
  backpackOpen: false,
  myPokemons: [],
  backKey: false,
  selectedAttackFronRedux: null,
  pokedexDB: [],
  mainView: "openWorld",
  isSelecting: false,
  fightView: "battleInit",
  damageOpponent: null,
  damagePlayer: null,
  pointerPosition: { index: 0, view: "backpackInit" },
  backPackView: "backpackInit",
  playerMonsHealth: null,
  opponentMonsHealth: null,
};

export default initialState;
