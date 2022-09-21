const initialState = {
  playermovement: {
    sprite: { x: 2, y: 0 },
    map: { y: 200, x: 150 }
  },
  backpackOpen: false,
  myPokemons: [],
  backKey: false,
  selectedAttackFronRedux: null,
  pokedexDB: [],
  viewState: '',
  selectInFight: false,
  pointerPositionFight: "",
  fightView: "init"
}

export default initialState