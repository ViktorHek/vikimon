read me

API calls 

get('/pokemonDB/all') = getAllPokemonsFormDB()
get('/pokemonDB/pokemon/:id') = getPokemonWithId()
get('/pokemonDB/pokemonstats/:id') = getPokemonAndStats()
get('/pokemonDB/pokemonmoves/:id') = getPokemonAndMoves()

[
  {
    UID: 1,
    pokemonID: '1',
    name: 'first',
    move1: '110',
    move2: '2020',
    move3: null,
    move4: null
  },
  {
    UID: 2,
    pokemonID: '2',
    name: 'second',
    move1: '110',
    move2: null,
    move3: '2020',
    move4: null
  },
  {
    UID: 3,
    pokemonID: '3',
    name: 'tre',
    move1: '110',
    move2: null,
    move3: '2020',
    move4: null
  }
]