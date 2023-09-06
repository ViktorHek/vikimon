import dbTypes from "../../database/types";
import specialMovesList from "../../database/nameLists/specialMoves.js";
import uniqueMoves from './uniqueMoves'

// { battleId, playerMon, opponentMon, gymBadges, extra, opponentId } = battleObj;

const battleCalculator = function battleCalculator(battleObj, move, playerIsAttacking) {
  const { playerMon, opponentMon } = battleObj;
  let attackingMon = playerIsAttacking ? playerMon : opponentMon;
  let defendingMon = playerIsAttacking ? opponentMon : playerMon;
  let returnValue = {
    damage: 0,
    status: { name: "", target: "" },
    statChange: { type: "", value: 0, target: "" },
    message: "",
    addedEffect: [],
  };
  let isHitting = checkIfMoveHitts(
    move,
    attackingMon.battleStats.accuracy,
    defendingMon.battleStats.evasion
  );
  if (!isHitting) {
    returnValue.message = "Attack missed";
    return returnValue;
  }

  let data = {
    attackingMon: attackingMon,
    defendingMon: defendingMon,
    move: move,
    playerIsAttacking: playerIsAttacking,
  };

  if (specialMovesList.movesWithUniqueCalc.includes(move.name)) {
    return uniqueMoves(data);
  }

  let damageCalc = getDamage(data);
  returnValue.damage = damageCalc.damage;
  returnValue.status = getStatus(data);
  returnValue.statChange = getStatChange(data);
  returnValue.addedEffect = getAddedEffects(data);
  let message = getMessage(data, returnValue, damageCalc);
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
function checkIfMoveHitts(move, attackingMonAccuracy, defendingMonEvasion) {
  // if (global.alwaysHit) return true;
  if (move.accuracy === null) return true; // if accuracy is null then target is always opponent
  let moveAccuracy = move.accuracy / 100; // 0 - 1
  let random = generateRandomNumber(1, 255);
  let chance = moveAccuracy * 255 * attackingMonAccuracy * defendingMonEvasion;
  if (random < chance) {
    return true;
  } else {
    return false;
  }
}

/**
 * ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
 * this function is for moves that only deel damage and do not have added effects
 * @returns {Number} damage of move. Is rounded down and can not be below 1
 */
function getDamage(data) {
  if (data.move.meta.stat_change) {
    let obj = { damage: 0, isCrit: 1, random: 1, effectiveness: 1 };
    return obj;
  }
  const { attackingMon, defendingMon, move } = data;
  let isCrit = calculateIfCrit(attackingMon.battleStats.speed, move); // is crit = 2, is not crit = 1
  let AD = getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move);
  let STAB = getStab(attackingMon, move);
  let effectiveness = getTypingCalc(move, defendingMon);
  let random = getRandomDamage();

  let firstCalc = 2 * attackingMon.level * isCrit;
  let secondCalc = firstCalc / 5 + 2;
  let thirdCalc = secondCalc * move.power * AD;
  let fourthCalc = thirdCalc / 50 + 2;
  let fifthCalc = fourthCalc * STAB * effectiveness * random;
  let damage = Math.floor(fifthCalc) < 1 ? 1 : Math.floor(fifthCalc);

  return { damage, isCrit, random, effectiveness };
}

/**
 * does not jet include a check if player uses focus energy or Dire Hit
 * @param {Number} speedStat speed stat of the pokemon after stat boosts
 * @param {{meta: {crit_rate: 1|null}}} move only used for moves with high crit rate
 * @returns {1|2} 2 if crit, 1 if normal hit
 */
function calculateIfCrit(speedStat, move) {
  // if (global.setCrit) return global.setCrit;
  let random = generateRandomNumber(0, 255);
  let threshold = speedStat / 2;
  if (move.meta.crit_rate === 1) {
    threshold = threshold * 8;
  }
  if (threshold > 255) {
    threshold = 255;
  }
  if (random < threshold) {
    return 2;
  } else {
    return 1;
  }
} // kan kortas ner

/**
 * function that returns attacking pokemons attackpower / defending pokemons defence power.
 * @param {{stats: {attack: number, special: number}}} attackingMon
 * @param {{stats: {defense: number, special: number}}} defendingMon
 * @param {1|2} isCrit
 * @param {"physical"|"special"} move
 * @returns {Number}
 */
function getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move) {
  const attack = attackingMon.unBuffedStats.attack;
  const attackSpecial = attackingMon.unBuffedStats.special;
  const buffedAttack = attackingMon.battleStats.attack;
  const buffedAttackSpecial = attackingMon.battleStats.special;
  const defense = defendingMon.unBuffedStats.defense;
  const defenseSpecial = defendingMon.unBuffedStats.special;
  const buffedDefense = defendingMon.battleStats.defense;
  const buffedDefenseSpecial = defendingMon.battleStats.special;
  const moveDamgageClass = move.meta.damage_class;

  if (isCrit === 2) {
    if (moveDamgageClass === "physical") {
      return attack / defense;
    } else {
      return attackSpecial / defenseSpecial;
    }
  } else {
    if (moveDamgageClass === "physical") {
      return buffedAttack / buffedDefense;
    } else {
      return buffedAttackSpecial / buffedDefenseSpecial;
    }
  }
}

function getStab(attackingMon, move) {
  if (attackingMon.types.includes(move.type)) {
    return 1.5;
  } else {
    return 1;
  }
}

function getTypingCalc(move, opponentMon) {
  let firstTyping = calcTyping(move.type, opponentMon.types[0]);
  let secondTyping = 1;
  if (opponentMon.types[1]) {
    secondTyping = calcTyping(move.type, opponentMon.types[1]);
  }
  return firstTyping * secondTyping;
}
function calcTyping(moveType, targetType) {
  let moveTypeObj = {};
  dbTypes.forEach((el) => {
    if (el.name === moveType) {
      moveTypeObj = el;
    }
  });
  if (moveTypeObj.superEffective.includes(targetType)) {
    return 2;
  } else if (moveTypeObj.notEffective.includes(targetType)) {
    return 0.5;
  } else {
    return 1;
  }
}

function getRandomDamage() {
  // if (global.setRandomBattleValue) return 1;
  let randomNumber = generateRandomNumber(217, 255);
  return randomNumber / 255;
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
  if (!chance) chance = -1;
  // if (!chance || global.alwaysHitSecondaryEffect) chance = -1;
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
  const { move, playerIsAttacking } = data;
  if (!move.meta.stat_change) return null;
  let chanse = generateRandomNumber(1, 100);
  let statChange = {
    change: move.meta.stat_change.change,
    stat: move.meta.stat_change.stat,
    target: "opponent",
  };
  if (
    (playerIsAttacking === true && move.meta.target === "user") ||
    (playerIsAttacking === false && move.meta.target === "opponent")
  ) {
    statChange.target = "player";
  }

  if (move.meta.effect_chance === null) return statChange;
  if (chanse < move.meta.effect_chance) {
    return statChange;
  } else {
    return false;
  }
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

function getMessage(data, damageCalc) {
  const { isCrit, effectiveness } = damageCalc;
  const { attackingMon, move } = data;
  // const { status, statChange, message, addedEffect } = returnValue;
  // const { damage, isCrit, random, effectiveness } = damageCalc;
  // const { attackingMon, defendingMon, move, playerIsAttacking } = data;
  let messageArr = [];

  messageArr.push(`${attackingMon.name} attacked with ${move.name}`); // what move
  if (effectiveness === 2) messageArr.push("It is super effective");
  if (effectiveness === 0.5) messageArr.push("It is not effective");
  if (isCrit === 2) messageArr.push("It is a critical hit");

  return messageArr;
}

export default battleCalculator