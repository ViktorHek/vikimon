const initialState = {
  playermovement: {
    sprite: { x: 2, y: 0 },
    map: { y: 200, x: 150 },
    coordinatesEvents: 'intro'
  },
  backpackOpen: false,
  myPokemons: [
    { 
      ID: null, 
      name: null, 
      moves: [
        { 
          id: null, 
          name: null 
        }
      ] 
    }
  ],
  backKey: false,
  selectedAttackFronRedux: null
}

export default initialState