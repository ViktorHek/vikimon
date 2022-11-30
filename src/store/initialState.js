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
  fightView: "battleInit",
  damageOpponent: 0,
  damagePlayer: 0,
  pointerPosition: { index: 0, view: 'backpackInit' },
  backPackView: 'backpackInit',
  selectInWorld: false
}

export default initialState