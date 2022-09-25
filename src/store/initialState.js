const initialState = {
  playermovement: {
    sprite: { x: 17, y: 0 },
    map: { y: -80, x: -64 }
  },
  backpackOpen: false,
  myPokemons: [],
  backKey: false,
  selectedAttackFronRedux: null,
  pokedexDB: [],
  viewState: '',
  selectInFight: false,
  pointerPositionFight: "",
  fightView: "init",
  damageOpponent: 0,
  pointerPosition: { top: 1, left: 1 }
}

export default initialState