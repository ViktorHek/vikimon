// const battleCalculator = require("./battleCalculator.js");
// const allMovesArr = require("../../dataBase/AllMovesArr");

import battleCalculator from './battleCalculator'
import allMoves from '../../database/allMoves';

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
  let mainCalc = ((baseHpAndIv * 2 + rootEv) * pokiObj.level) / 100 + pokiObj.level + 10;
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

function playerAttacksFirst(battleId) {
  let index = battleDataArray.findIndex((el) => el.id === battleId);
  const { playerMon, opponentMon } = battleDataArray[index];
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
  battleId,
  moveId,
  playerAttacksFirst
) {
  let playerAttackCalc = {};
  let opponentAttackCalc = {};
  let playerMove = getMoveFromId(moveId);
  let opponentMove = getMoveFromtrainerAI(battleId);
  let index = battleDataArray.findIndex((el) => el.id === battleId);
  if (playerAttacksFirst) {
    playerAttackCalc = battleCalculator(battleDataArray[index], playerMove, true);
    uppdateBattleDataArray(index, playerAttackCalc.statChange);
    opponentAttackCalc = battleCalculator(battleDataArray[index], opponentMove, false);
    uppdateBattleDataArray(index, opponentAttackCalc.statChange);
  } else {
    opponentAttackCalc = battleCalculator(battleDataArray[index], opponentMove, false);
    uppdateBattleDataArray(index, opponentAttackCalc.statChange);
    playerAttackCalc = battleCalculator(battleDataArray[index], playerMove, true);
    uppdateBattleDataArray(index, playerAttackCalc.statChange);
  }
  return { playerAttackCalc, opponentAttackCalc };
};

function uppdateBattleDataArray(index, statChange) {
  if (!statChange) return;
  if (statChange.target === "player") {
    for (const el in battleDataArray[index].playerMon.battleStats) {
      let newVal = battleDataArray[index].playerMon.battleStats[el];
      let hasBadgeBoost = battleDataArray[index].gymBadges[el];
      if (el === "accuracy" || el === "evasion") hasBadgeBoost = false;
      if (statChange.stat === el) {
        newVal = newVal * statChangesEffectPercent(statChange.change) * (hasBadgeBoost ? 1.125 : 1);
      } else {
        newVal = newVal * (hasBadgeBoost ? 1.125 : 1);
      }
      battleDataArray[index].playerMon.battleStats[el] = Math.floor(newVal);
    }
  } else {
    for (const el in battleDataArray[index].opponentMon.battleStats) {
      let newVal = battleDataArray[index].opponentMon.battleStats[el];
      if (statChange.stat === el) {
        newVal = newVal * statChangesEffectPercent(statChange.change);
      }
      battleDataArray[index].opponentMon.battleStats[el] = Math.floor(newVal);
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

function getMoveFromtrainerAI(battleId) {
  // future project. the move Tackle have the ID 33
  return getMoveFromId(33);
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

function removeOldBattleObjects() {
  // add a loop of battleDataArray.
  // subtract 24 hours from current date.
  // if battleObj.createdAt if before current date - 24h, then remove that obj.
  // probaly gonna use battleDataArray.splice()
}

const createBattleObject = function createBattleObject(data) {
  // removeOldBattleObjects();
  const { playersPokemon, opponentsPokemon, user } = data;
  let returnValue = {
    id: battleDataArray.length + 1,
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
      isPlayer: false
    },
    gymBadges: user.gymBadges,
    extra: [],
    opponentId: 0, // used later to determent if player is facing a wild pokemon or a trainer. and if so, what trainer
    createdAt: new Date(),
  };
  return returnValue;
};

const calculator = {
  getPokemonStats,
  generateRandomNumber,
  playerAttacksFirst,
  getBothPlayersDamageCalc,
  createBattleObject,
  battleDataArray,
};

export default calculator;
