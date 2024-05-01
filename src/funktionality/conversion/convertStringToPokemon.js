import natures from "../../database/natures";
import calculator from "../calculator/calculator";
import pokemons from "../../database/pokemons";
import allMoves from "../../database/allMoves";

// 15140viktor@@@@0s153502605094050030500405&04030jenny@@@@@0a021003411103100501004910
// [080, 40, 1, 's', 143, 'viktor', 15, 35000, 02635, 09435, 00335, 00435]

// [080, 40, 1, 's', 143, 'viktor', [15, 15, 15, 15, 15, 35000, 35000, 35000, 35000, 35000], 26, 35, 94, 35, 3, 35, 4, 35]

// [080, 40, 1, 's', 143, 'viktor', 15, [35000, 35000, 35000, 35000, 35000], 26, 35, 94, 35, 3, 35, 4, 35]
// '[80,40,1,"s",143,"viktor",15,35000,35000,35000,35000,35000,2635,9435,335,435]'


const ConvertStringToPokemon = (pokemonStrings) => {
  const pokemonArr = JSON.parse(pokemonStrings);
  let pokemonPartyArr = [];
  for (let index = 0; index < pokemonArr.length; index++) {
    const pokemon = pokemonArr[index];
    let uniqueId = pokemon[0];
    const id = parseInt(uniqueId.slice(0, 3));

    const pokemonObject = {
      id: id,
      nature: natures.filter((el) => el.identifyer === uniqueId.slice(3, 4).toLowerCase())[0],
      name: uniqueId.slice(14) === "*" ? pokemons[id - 1].name : uniqueId.slice(14),
      level: pokemon[1],
      abilitie: pokemon[2],
      iv: {
        hp: parseInt(uniqueId.slice(4, 6)),
        attack: parseInt(uniqueId.slice(6, 8)),
        defense: parseInt(uniqueId.slice(8, 10)),
        special: parseInt(uniqueId.slice(10, 12)),
        speed: parseInt(uniqueId.slice(12, 14)),
      },
      ev: {
        hp: pokemon[5][0],
        attack: pokemon[5][1],
        defense: pokemon[5][2],
        special: pokemon[5][3],
        speed: pokemon[5][4],
      },
      moves: [
        getMove(pokemon[6][0], pokemon[6][1]),
        getMove(pokemon[6][2], pokemon[6][3]),
        getMove(pokemon[6][4], pokemon[6][5]),
        getMove(pokemon[6][6], pokemon[6][7]),
      ],
      dbData: pokemons[id - 1],
      stats: {},
      currentHp: null,
      status: ["fine", "paralyze", "sleep", "confused", "poison", "badly poison"][pokemon[4]],
      statChanges: [],
      uid: uniqueId,
    };
    pokemonObject.stats = calculator.getPokemonStats(pokemonObject);
    pokemonObject.currentHp = pokemon[3] === "m" ? pokemonObject.stats.hp : parseInt(pokemon[3]);
    pokemonPartyArr.push(pokemonObject);
  }
  return pokemonPartyArr;
};

function getMove(id, pp) {
  return {
    pp: pp,
    ...allMoves.filter((el) => el.id === id)[0],
  };
}

export default ConvertStringToPokemon;
