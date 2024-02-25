import dbTypes from "../../database/types";
import specialMovesList from "../../database/nameLists/specialMoves.js";
import uniqueMoves from "./uniqueMoves";

// { battleId, playerMon, opponentMon, gymBadges, extra, opponentId } = battleObj;

const battleCalculator = function battleCalculator(battleObj, move, playerIsAttacking) {
  let data = {
    playerMon: battleObj.playerMon,
    opponentMon: battleObj.opponentMon,
    attackingMon: playerIsAttacking ? battleObj.playerMon : battleObj.opponentMon,
    defendingMon: playerIsAttacking ? battleObj.opponentMon : battleObj.playerMon,
    move: move,
    playerIsAttacking: playerIsAttacking,
  };
  let returnValue = {
    damage: 0,
    status: { name: "", target: "" },
    statChange: { type: "", value: 0, target: "" },
    message: "",
    addedEffect: [],
  };
  if (isMissing(data)) {
    returnValue.message = "Attack missed";
    return returnValue;
  }

  if (specialMovesList.movesWithUniqueCalc.includes(move.name)) {
    return uniqueMoves(data);
  }

  returnValue.damage = getDamage(data);
  returnValue.status = getStatus(data);
  returnValue.statChange = getStatChange(data);
  returnValue.addedEffect = getAddedEffects(data);
  const message = getMessage(data, returnValue);
  returnValue.message = message;
  return returnValue;
};

/**
 * using attinging mons accuracy and defending mons evasion to calculate if the move hitts
 * @param {{accuracy: number|null}} move only used to check accuracy
 * @param {Number} accuracy attacking pokemons accuracy
 * @param {Number} evasion defending pokemons evasion
 * @returns {Boolean} if true the move hitts, if false the move miss
 */
function isMissing(data) {
  if (data.move.accuracy === null) return true; // if accuracy is null then target is always opponent
  let calc =
    255 *
    (data.move.accuracy / 100) *
    data.attackingMon.battleStats.accuracy *
    data.defendingMon.battleStats.evasion;
  if (generateRandomNumber(1, 255) < calc) {
    return false;
  } else {
    return true;
  }
}

/**
 * ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
 * this function is for moves that only deel damage and do not have added effects
 * @returns {Number} damage of move. Is rounded down and can not be below 1
 */
function getDamage(data) {
  if (data.move.meta.stat_change) {
    return { damage: 0, isCrit: 1, random: 0.5, effectiveness: 1 };
  }
  const { attackingMon, defendingMon, move } = data;
  const critThreshold =
    move.meta.crit_rate === 1
      ? (attackingMon.battleStats.speed / 2) * 8
      : attackingMon.battleStats.speed / 2;
  const isCrit = generateRandomNumber(0, 255) < critThreshold ? 2 : 1;
  const AD = getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move);
  const stab = attackingMon.types.includes(move.type) ? 1.5 : 1;
  const random = generateRandomNumber(217, 255) / 255;
  const effectiveness = defendingMon.types[1]
    ? calcTyping(move.type, defendingMon.types[0])
    : calcTyping(move.type, defendingMon.types[0]) * calcTyping(move.type, defendingMon.types[1]);
  const calc =
    ((((2 * attackingMon.level * isCrit) / 5 + 2) * move.power * AD) / 50 + 2) *
    stab *
    effectiveness *
    random;
  const damage = Math.floor(calc) < 1 ? 1 : Math.floor(calc);
  return { damage, isCrit, random, effectiveness };
}

/**
 * function that returns attacking pokemons attackpower / defending pokemons defence power.
 * @param {{stats: {attack: number, special: number}}} attackingMon
 * @param {{stats: {defense: number, special: number}}} defendingMon
 * @param {1|2} isCrit
 * @param {"physical"|"special"} move
 * @returns {Number}
 */
function getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move) {
  let attackType = move.meta.damage_class === "special" ? "special" : "attack";
  let defenceType = move.meta.damage_class === "special" ? "special" : "defense";
  let stats = isCrit === 2 ? "unBuffedStats" : "battleStats";
  return attackingMon[stats][attackType] / defendingMon[stats][defenceType];
}

// function getTypingCalc(move, opponentMon) {
//   let firstTyping = calcTyping(move.type, opponentMon.types[0]);
//   let secondTyping = opponentMon.types[1] ? calcTyping(move.type, opponentMon.types[1]) : 1;
//   return firstTyping * secondTyping;
// }

function calcTyping(moveType, targetType) {
  let moveTypeObj = dbTypes.filter((el) => el.name === moveType);
  switch (true) {
    case moveTypeObj[0].superEffective.includes(targetType):
      return 2;
    case moveTypeObj[0].notEffective.includes(targetType):
      return 0.5;
    case moveTypeObj[0].noEffect.includes(targetType):
      return 0;
    default:
      return 1;
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getStatus(data) {
  const { move, playerIsAttacking } = data;
  if (checkIfNoStatus(data)) return null;
  let returnObj = {
    name: move.meta.status,
    target: playerIsAttacking ? "opponent" : "player",
  };
  if (returnObj.name === "all") {
    returnObj.name = ["paralyze", "burn", "freeze"][generateRandomNumber(0, 2)];
  }
  return returnObj;
}

function checkIfNoStatus(data) {
  const { attackingMon, defendingMon, move, playerIsAttacking } = data;
  const nonReplacableStatus = ["sleep", "paralyze", "poison", "badly poison", "burn", "frozen"];
  let target = playerIsAttacking ? "opponent" : "player";
  let targetPokemon = playerIsAttacking ? defendingMon : attackingMon;
  let chance = move.meta.effect_chance;
  if (!chance) chance = 0;
  switch (true) {
    case move.meta.status === null:
    case move.meta.status === "burn" && targetPokemon.types.includes("fire"):
    case move.meta.status === "poison" && targetPokemon.types.includes("poison"):
    case move.meta.status === "badly poison" && targetPokemon.types.includes("poison"):
    case move.meta.status === "frozen" && targetPokemon.types.includes("ice"):
    case target === "opponent" && nonReplacableStatus.includes(defendingMon.status):
    case target === "player" && nonReplacableStatus.includes(attackingMon.status):
    case chance < generateRandomNumber(0, 100):
      return true;
    default:
      return false;
  }
}

function getStatChange(data) {
  const { target, effect_chance, stat_change } = data.move.meta;
  let statChange = {
    change: null,
    stat: null,
    target: target,
  };
  if (!effect_chance || !stat_change) return statChange;
  if (generateRandomNumber(1, 100) < effect_chance) {
    statChange.change = stat_change.change;
    statChange.stat = stat_change.stat;
  }
  return statChange;
}

function getAddedEffects(data) {
  const moveName = data.move.name;
  // let target = "opponent";
  // let type = "";
  switch (moveName) {
    case "disable": // need acces to the last move used by the opponent
    case "mist": // needs a counter for number of turns active
    case "mimic": // need acces to the last move used by the opponent
    case "light-screen": // need to add variable in damageCalc aka calc/2
    case "reflect": // need to add variable in damageCalc aka calc/2
    case "focus-energy": // not sure where to put this
    case "transform": // fuck this
    case "conversion": // fuck this
    case "substitute": // need to acces users current HP and store this for other calc
      console.log("this move have a added effect - ", moveName);
      return null;
    default:
      return null;
  }
}

function getMessage(data, returnValue) {
  const { attackingMon, move } = data;
  let messageArr = [`${attackingMon.name} attacked with ${move.name}`];
  switch (true) {
    case returnValue.damage.isCrit === 2:
      messageArr.push("It is a critical hit");
    case returnValue.damage.effectiveness === 2:
      messageArr.push("It is super effective");
      break;
    case returnValue.damage.effectiveness === 0.5:
      messageArr.push("It is not effective");
      break;
    default:
      break;
  }
  return messageArr;
}

export default battleCalculator;
