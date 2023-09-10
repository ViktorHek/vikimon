
import natures from "../../database/natures";
import calculator from '../calculator/calculator'
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

    const pokemonObject = {
      id: parseInt(uniqueId.slice(0, 3)),
      level: getLevel(pokemon[1]),
      abilitie: parseInt(pokemon[2]),
      nature: getNatures(uniqueId.slice(3, 4)),
      name: getName(uniqueId),
      iv: {
        hp: parseInt(uniqueId.slice(4, 6)),
        attack: parseInt(uniqueId.slice(6, 8)),
        defense: parseInt(uniqueId.slice(8, 10)),
        special: parseInt(uniqueId.slice(10, 12)),
        speed: parseInt(uniqueId.slice(12, 14)),
      },
      ev: {
        hp: parseInt(pokemon[5][0]),
        attack: parseInt(pokemon[5][1]),
        defense: parseInt(pokemon[5][2]),
        special: parseInt(pokemon[5][3]),
        speed: parseInt(pokemon[5][4]),
      },
      moves: getMoves(pokemon[6]),
      dbData: getDbData(parseInt(pokemon[0])),
      stats: {},
      currentHp: null,
      status: getStatus(pokemon[4]),
      statChanges: [],
      uid: uniqueId,
    };

    pokemonObject.stats = calculator.getPokemonStats(pokemonObject);
    pokemonObject.currentHp = getCurrentHp(pokemon[3], pokemonObject.stats.hp)
    pokemonPartyArr.push(pokemonObject);
  }
  return pokemonPartyArr;
};

function getMoves(moveArr) {
  let returnArr = [];

  let formatedArr = [
    {
      id: parseInt(moveArr[0]),
      pp: parseInt(moveArr[1]),
    },
    {
      id: parseInt(moveArr[2]),
      pp: parseInt(moveArr[3]),
    },
    {
      id: parseInt(moveArr[4]),
      pp: parseInt(moveArr[5]),
    },
    {
      id: parseInt(moveArr[6]),
      pp: parseInt(moveArr[7]),
    },
  ];
  formatedArr.forEach((myMove) => {
    allMoves.forEach((el) => {
      if (myMove.id === el.id) {
        returnArr.push({
          id: el.id,
          name: el.name,
          accuracy: el.accuracy,
          power: el.power,
          type: el.type,
          pp: myMove.pp,
          meta: el.meta,
        });
      }
    });
  });
  return returnArr;
}

function getStatus(num) {
  switch (num) {
    case 0:
      return "fine";
    case 1:
      return "paralyze";
    case 2:
      return "sleep";
    case 3:
      return "confused";
    case 4:
      return "poison";
    case 5:
      return "badly poison";
    default:
      return "fine";
  }
}

function getName(uniqueId) {
  let name = uniqueId.slice(14);
  let id = parseInt(uniqueId.slice(0, 3));
  let returnValue = "";
  if (name === "*") {
    pokemons.forEach((element) => {
      if (element.id === id) {
        returnValue = element.name;
      }
    });
  } else {
    returnValue = name;
  }
  return returnValue;
}

function getLevel(level) {
  if (level === "0" || level === 0) {
    return 100;
  }
  return parseInt(level);
}

function getNatures(letter) {
  let key = letter.toLowerCase();
  let returnValue = {};
  natures.forEach((el) => {
    if (el.identifyer === key) {
      returnValue = el;
    }
  });
  return returnValue;
}

function getDbData(id) {
  let returnValue = {};
  pokemons.forEach((element) => {
    if (element.id === id) {
      returnValue = element;
    }
  });
  return returnValue;
}

function getCurrentHp(hp, maxHp) {
  if(hp === "m") {
    return maxHp
  } else {
    return parseInt(hp)
  }
}

export default ConvertStringToPokemon