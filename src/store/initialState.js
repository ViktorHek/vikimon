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
  viewState: "",
  selectInFight: false,
  fightView: "battleInit",
  damageOpponent: null,
  damagePlayer: null,
  pointerPosition: { index: 0, view: "backpackInit" },
  backPackView: "backpackInit",
  selectInWorld: false,
  playerMonsHealth: null,
  opponentMonsHealth: null,
};

export default initialState;
