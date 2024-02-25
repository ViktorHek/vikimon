// const battleCalculator = require("./battleCalculator.js");
// const allMovesArr = require("../../dataBase/AllMovesArr");

import battleCalculator from "./battleCalculator";
import allMovesArr from "../../database/allMoves";
import natures from "../../database/natures";
import pokemons from "../../database/pokemons";

const battleDataArray = [];

const getPokemonStats = function getPokemonStats(pokiObj) {
  const { iv, ev, level } = pokiObj;
  const base = pokiObj.dbData.stats;
  let calculatedStats = {
    hp: calculatingHp(pokiObj),
    attack: calculatingNonHpStats(base.attack, iv.attack, ev.attack, level),
    defense: calculatingNonHpStats(base.defense, iv.defense, ev.defense, level),
    special: calculatingNonHpStats(base.special, iv.special, ev.special, level),
    speed: calculatingNonHpStats(base.speed, iv.speed, ev.speed, level),
  };
  return calculatedStats;
};

function calculatingHp(pokiObj) {
  let baseHpAndIv = pokiObj.dbData.stats.hp + pokiObj.iv.hp;
  let rootEv = Math.sqrt(pokiObj.ev.hp) / 4;
  let mainCalc =
    ((baseHpAndIv * 2 + rootEv) * pokiObj.level) / 100 + pokiObj.level + 10;
  return Math.floor(mainCalc);
}

function calculatingNonHpStats(baseStat, ivStat, evStat, level) {
  let baseStatAndIv = baseStat + ivStat;
  let rootEv = Math.sqrt(evStat) / 4;
  let mainCalc = ((baseStatAndIv * 2 + rootEv) * level) / 100 + 5;
  return Math.floor(mainCalc);
}

const generateRandomNumber = function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function playerAttacksFirst(battleOblect) {
  const { playerMon, opponentMon } = battleOblect;
  let playerSpeed = playerMon.battleStats.speed;
  let opponentSpeed = opponentMon.battleStats.speed;
  let speedTie = playerSpeed === opponentSpeed && Math.random() < 0.5;
  if (speedTie || playerSpeed > opponentSpeed) {
    return true;
  } else {
    return false;
  }
}

const getBothPlayersDamageCalc = function getBothPlayersDamageCalc(
  battleObj,
  moveId,
  playerAttacksFirst
) {
  let data = battleObj
  let playerAttackCalc = {};
  let opponentAttackCalc = {};
  let playerMove = getMoveFromId(moveId);
  let opponentMove = getMoveFromId(moveId);
  // let opponentMove = getMoveFromtrainerAI(battleId);
  if (playerAttacksFirst) {
    playerAttackCalc = battleCalculator(data, playerMove, true);
    uppdateBattleDataArray(data, playerAttackCalc.statChange);
    opponentAttackCalc = battleCalculator(data, opponentMove, false);
    uppdateBattleDataArray(data, opponentAttackCalc.statChange);
  } else {
    opponentAttackCalc = battleCalculator(data, opponentMove, false);
    uppdateBattleDataArray(data, opponentAttackCalc.statChange);
    playerAttackCalc = battleCalculator(data, playerMove, true);
    uppdateBattleDataArray(data, playerAttackCalc.statChange);
  }
  return { playerAttackCalc, opponentAttackCalc };
};

function uppdateBattleDataArray(battleObj, statChange) {
  if (!statChange) return;
  if (statChange.target === "player") {
    for (const el in battleObj.playerMon.battleStats) {
      let newVal = battleObj.playerMon.battleStats[el];
      let hasBadgeBoost = battleObj.gymBadges[el];
      if (el === "accuracy" || el === "evasion") hasBadgeBoost = false;
      if (statChange.stat === el) {
        newVal =
          newVal *
          statChangesEffectPercent(statChange.change) *
          (hasBadgeBoost ? 1.125 : 1);
      } else {
        newVal = newVal * (hasBadgeBoost ? 1.125 : 1);
      }
      battleObj.playerMon.battleStats[el] = Math.floor(newVal);
    }
  } else {
    for (const el in battleObj.opponentMon.battleStats) {
      let newVal = battleObj.opponentMon.battleStats[el];
      if (statChange.stat === el) {
        newVal = newVal * statChangesEffectPercent(statChange.change);
      }
      battleObj.opponentMon.battleStats[el] = Math.floor(newVal);
    }
  }
}

function getMoveFromId(id) {
  let moveObj = {};
  allMovesArr.forEach((move) => {
    if (parseInt(id) === move.id) {
      moveObj = move;
    }
  });
  return moveObj;
}

function statChangesEffectPercent(statChanges) {
  switch (statChanges) {
    case -6:
      return 0.25;
    case -5:
      return 0.28;
    case -4:
      return 0.33;
    case -3:
      return 0.4;
    case -2:
      return 0.5;
    case -1:
      return 0.66;
    case 0:
      return 1;
    case 1:
      return 1.5;
    case 2:
      return 2;
    case 3:
      return 2.5;
    case 4:
      return 3;
    case 5:
      return 3.5;
    case 6:
      return 4;
    default:
      console.log("no switch match in statChangesEffectPercent()", statChanges);
      return 1;
  }
}

const createBattleObject = function createBattleObject(
  playersPokemon,
  opponentsPokemon,
  user
) {
  let returnValue = {
    playerMon: {
      id: playersPokemon.id,
      name: playersPokemon.name,
      level: playersPokemon.level,
      abilitie: playersPokemon.abilitie,
      currentHp: playersPokemon.currentHp,
      moves: playersPokemon.moves,
      unBuffedStats: playersPokemon.stats,
      battleStats: {
        attack: playersPokemon.stats.attack,
        defense: playersPokemon.stats.defense,
        special: playersPokemon.stats.special,
        speed: playersPokemon.stats.speed,
        evasion: 1,
        accuracy: 1,
      },
      status: playersPokemon.status,
      types: playersPokemon.dbData.types,
      isPlayer: true,
    },
    opponentMon: {
      id: opponentsPokemon.id,
      name: opponentsPokemon.name,
      level: opponentsPokemon.level,
      abilitie: opponentsPokemon.abilitie,
      currentHp: opponentsPokemon.currentHp,
      moves: opponentsPokemon.moves,
      unBuffedStats: opponentsPokemon.stats,
      battleStats: {
        attack: opponentsPokemon.stats.attack,
        defense: opponentsPokemon.stats.defense,
        special: opponentsPokemon.stats.special,
        speed: opponentsPokemon.stats.speed,
        evasion: 1,
        accuracy: 1,
      },
      status: null, // null means no status aka "Fine"
      types: opponentsPokemon.dbData.types,
      isPlayer: false,
    },
    gymBadges: user.gymBadges,
    extra: [],
    opponentId: 0, // used later to determent if player is facing a wild pokemon or a trainer. and if so, what trainer
    createdAt: new Date(),
  };
  return returnValue;
};

const generateWildPokemon = function generateWildPokemon(pokemon) {
  let obj = {
    id: pokemon.id,
    level: generateRandomNumber(
      pokemon.posibleLevels.from,
      pokemon.posibleLevels.to
    ),
    abilitie: 0,
    nature: natures[generateRandomNumber(0, natures.length - 1)],
    currentHp: 10,
    name: pokemon.name,
    iv: {
      hp: generateRandomNumber(1, 15),
      attack: generateRandomNumber(1, 15),
      defense: generateRandomNumber(1, 15),
      special: generateRandomNumber(1, 15),
      speed: generateRandomNumber(1, 15),
    },
    ev: {
      hp: 0,
      attack: 0,
      defense: 0,
      special: 0,
      speed: 0,
    },
    moves: getWildPokemonMoves(pokemon),
    dbData: pokemons[pokemon.id-0],
    stats: {},
    status: null,
    statChanges: [],
  };
  obj.stats = getPokemonStats(obj)
  obj.currentHp = obj.stats.hp
  return obj;
};

function getWildPokemonMoves(pokemon) {
  let arr = []
  pokemons[pokemon.id-1].moves.forEach((el) => {
    if(pokemon.level > el.level_learned_at -1){
      arr.push(el.name)
    }
  })
  return arr
}

const calculator = {
  getPokemonStats,
  generateRandomNumber,
  playerAttacksFirst,
  getBothPlayersDamageCalc,
  createBattleObject,
  battleDataArray,
  generateWildPokemon,
};

export default calculator;
