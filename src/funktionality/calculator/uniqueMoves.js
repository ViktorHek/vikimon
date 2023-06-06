// const dbTypes = require("../../dataBase/types");
// const specialMovesList = require("../../dataBase/nameLists/specialMoves");
// const global = require("../../global/index");

// module.exports = function uniqueMoves(data) {
//   const { attackingMon, defendingMon, move, playerIsAttacking } = data;

//   let returnValue = {
//     damage: 0,
//     status: { name: "", target: "" },
//     statChange: { type: "", value: 0, target: "" },
//     message: "",
//     addedEffect: [],
//     info: ""
//   };

//   switch (move.name) {
//     case 'whirlwind':
//     case 'roar':
//       returnValue = whirlwind(returnValue, data)
//       break;
//     case 'disable':
//       returnValue = disable(returnValue, data)
//       break;
//     case 'mist':
//       returnValue = disable(returnValue, data)
//       break;
  
//     default:
//       break;
//   }
  
//   return returnValue;
// };

// function whirlwind(returnValue, data) {
//   // add an eventType variable
//   // if ( eventType === "wildPokemon" ) return returnValue
//   returnValue.info = "endBattle"
//   returnValue.message = "Pokemon ran away"
//   return returnValue
// }

// function disable(returnValue, data) {
//   // add an hisstory variable
//   // let target = {
//   //  name: playerIsAttacking ? "opponent" : "player",
//   //  mon: playerIsAttacking ? "defendingMon" : "attackingMon"
//   //}
//   // let prevMove = data.history[target.name].prevMove
//   // let prevMoveIndex = data[target.mon].moves.map((el, index) => if(el.name === prevMove) return index)
//   // let disbledMove = {type: 'disable', effect: prevMoveIndex, target: target.name }
//   //returnValue.addedEffect.push(disbledMove)
//   return returnValue
// }

// // if (move.name === "rest") {
// //   returnObj.target = playerIsAttacking ? "player" : "opponent";
// // }








// /**
//  * using attinging mons accuracy and defending mons evasion to calculate if the move hitts
//  * @param {{accuracy: number|null}} move only used to check accuracy
//  * @param {Number} accuracy attacking pokemons accuracy
//  * @param {Number} evasion defending pokemons evasion
//  * @returns {Boolean} if true the move hitts, if false the move miss
//  */
// function checkIfMoveHitts(move, attackingMonAccuracy, defendingMonEvasion) {
//   if (global.alwaysHit) return true;
//   if (move.accuracy === null) return true; // if accuracy is null then target is always opponent
//   let moveAccuracy = move.accuracy / 100; // 0 - 1
//   let random = generateRandomNumber(1, 255);
//   let chance = moveAccuracy * 255 * attackingMonAccuracy * defendingMonEvasion;
//   if (random < chance) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // /**
// //  * Used to categorice moves to make it easyer for customized functionality.
// //  * @returns {"psysical"|"psysical_stat_change"|"psysical_custom"|"special"|"special_stat_change"|"special_custom"|"status"|"status_stat_change"|"status_custom"} categorized by physical or specail damage, status or stat change & custom (meaning unique) or effect (meaning the move has an secondary effect)
// //  */
// // function getTypeOfMove(move) {
// //   let damageClass = move.meta.damage_class;
// //   let isSpecail = isSpecailMove(move);
// //   let stat_change = move.meta.stat_change;
// //   if (isSpecail) {
// //     return "custom";
// //   } else if (stat_change) {
// //     return damageClass + "_stat_change";
// //   } else return damageClass;
// // }

// function isSpecailMove(move) {
//   const name = move.name;
//   if (specialMovesList.all.includes(name)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getDamage(data) {
//   if (data.move.meta.stat_change) return 0;
//   const { attackingMon, defendingMon, move } = data;
//   let isCrit = calculateIfCrit(attackingMon.battleStats.speed, move); // is crit = 2, is not crit = 1
//   let AD = getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move);
//   let STAB = getStab(attackingMon, move);
//   let effectiveness = getTypingCalc(move, defendingMon);
//   let random = getRandomDamage();

//   let firstCalc = 2 * attackingMon.level * isCrit;
//   let secondCalc = firstCalc / 5 + 2;
//   let thirdCalc = secondCalc * move.power * AD;
//   let fourthCalc = thirdCalc / 50 + 2;
//   let fifthCalc = fourthCalc * STAB * effectiveness * random;
//   let damage = Math.floor(fifthCalc) < 1 ? 1 : Math.floor(fifthCalc);

//   return { damage, isCrit, random, effectiveness };
// }

// // /**
// //  * ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
// //  * this function is for moves that only deel damage and do not have added effects
// //  * @param {{}} attackingMon the attacking mon i only usede to get attack or special attack stats
// //  * @param {{}} defendingMon the defending mon i only usede to get defence or special defence stats
// //  * @param {{move: {}, playerIsAttacking: boolean, gymBadges: [], statChanges: []}} battleObject only uses gymBadges and move. where gym badges is only used for stat modification calc
// //  * @returns {Number} damage of move. Is rounded down and can not be below 1
// //  */
// // function useDamageAttack(data) {
// //   // damage = ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
// //   const { attackingMon, defendingMon, move } = data;
// //   let isCrit = calculateIfCrit(attackingMon.battleStats.speed, move); // is crit = 2, is not crit = 1
// //   let AD = getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move);
// //   let STAB = getStab(attackingMon, move);
// //   let effectiveness = getTypingCalc(move, defendingMon);
// //   let random = getRandomDamage();

// //   let firstCalc = 2 * attackingMon.level * isCrit;
// //   let secondCalc = firstCalc / 5 + 2;
// //   let thirdCalc = secondCalc * move.power * AD;
// //   let fourthCalc = thirdCalc / 50 + 2;
// //   let fifthCalc = fourthCalc * STAB * effectiveness * random;
// //   let damage = Math.floor(fifthCalc) < 1 ? 1 : Math.floor(fifthCalc);

// //   return { damage, isCrit, random, effectiveness };
// // }

// /**
//  * does not jet include a check if player uses focus energy or Dire Hit
//  * @param {Number} speedStat speed stat of the pokemon after stat boosts
//  * @param {{meta: {crit_rate: 1|null}}} move only used for moves with high crit rate
//  * @returns {1|2} 2 if crit, 1 if normal hit
//  */
// function calculateIfCrit(speedStat, move) {
//   if (global.setCrit) return global.setCrit;
//   let random = generateRandomNumber(0, 255);
//   let threshold = speedStat / 2;
//   if (move.meta.crit_rate === 1) {
//     threshold = threshold * 8;
//   }
//   if (threshold > 255) {
//     threshold = 255;
//   }
//   if (random < threshold) {
//     return 2;
//   } else {
//     return 1;
//   }
// }

// /**
//  * function that returns attacking pokemons attackpower / defending pokemons defence power.
//  * @param {{stats: {attack: number, special: number}}} attackingMon
//  * @param {{stats: {defense: number, special: number}}} defendingMon
//  * @param {1|2} isCrit
//  * @param {"physical"|"special"} move
//  * @returns {Number}
//  */
// function getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move) {
//   const attack = attackingMon.unBuffedStats.attack;
//   const attackSpecial = attackingMon.unBuffedStats.special;
//   const buffedAttack = attackingMon.battleStats.attack;
//   const buffedAttackSpecial = attackingMon.battleStats.special;
//   const defense = defendingMon.unBuffedStats.defense;
//   const defenseSpecial = defendingMon.unBuffedStats.special;
//   const buffedDefense = defendingMon.battleStats.defense;
//   const buffedDefenseSpecial = defendingMon.battleStats.special;
//   const moveDamgageClass = move.meta.damage_class;

//   if (isCrit === 2) {
//     if (moveDamgageClass === "physical") {
//       return attack / defense;
//     } else {
//       return attackSpecial / defenseSpecial;
//     }
//   } else {
//     if (moveDamgageClass === "physical") {
//       return buffedAttack / buffedDefense;
//     } else {
//       return buffedAttackSpecial / buffedDefenseSpecial;
//     }
//   }
// }

// function getStab(attackingMon, move) {
//   if (attackingMon.types.includes(move.type)) {
//     return 1.5;
//   } else {
//     return 1;
//   }
// }

// function getTypingCalc(move, opponentMon) {
//   let firstTyping = calcTyping(move.type, opponentMon.types[0]);
//   let secondTyping = 1;
//   if (opponentMon.types[1]) {
//     secondTyping = calcTyping(move.type, opponentMon.types[1]);
//   }
//   return firstTyping * secondTyping;
// }
// function calcTyping(moveType, targetType) {
//   let moveTypeObj = {};
//   dbTypes.forEach((el) => {
//     if (el.name === moveType) {
//       moveTypeObj = el;
//     }
//   });
//   if (moveTypeObj.superEffective.includes(targetType)) {
//     return 2;
//   } else if (moveTypeObj.notEffective.includes(targetType)) {
//     return 0.5;
//   } else {
//     return 1;
//   }
// }

// function getRandomDamage() {
//   if (global.setRandomBattleValue) return 1;
//   let randomNumber = generateRandomNumber(217, 255);
//   return randomNumber / 255;
// }
// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function getStatus(data) {
//   if (checkIfNoStatus(data)) return false;
//   const { move, playerIsAttacking } = data;
//   let target = playerIsAttacking ? "opponent" : "player";
//   let chance =
//     move.meta.effect_chance && !global.alwaysHitSecondaryEffect ? move.meta.effect_chance : 101;
//   let returnObj = {
//     name: "",
//     target: target,
//   };
//   if (move.name === "rest") {
//     returnObj.target = playerIsAttacking ? "player" : "opponent";
//   }
//   if (specialMovesList.statusinflictingMoves.includes(move.name)) {
//     returnObj.name = move.meta.status;
//     returnObj.target = target;
//   }
//   if (specialMovesList.damageMovesWithStatusChange.includes(move.name)) {
//     let random = generateRandomNumber(0, 100);
//     if (chance > random) {
//       let name = move.meta.status;
//       if (move.name === "tri-attack") {
//         let random = generateRandomNumber(1, 3);
//         if (random === 1) {
//           name = "paralyze";
//         } else if (random === 2) {
//           name = "burn";
//         } else {
//           name = "freeze";
//         }
//       }
//       returnObj.name = name;
//       returnObj.target = "opponent";
//     }
//   }
//   return returnObj;
// }

// function checkIfNoStatus(data) {
//   const { attackingMon, defendingMon, move, playerIsAttacking } = data;
//   let target = playerIsAttacking ? "opponent" : "player";
//   let targetPokemon = playerIsAttacking ? defendingMon : attackingMon;
//   const nonReplacableStatus = ["sleep", "paralyze", "poison", "badly poison", "burn", "frozen"];
//   switch (true) {
//     case move.meta.status === "burn" && targetPokemon.types.includes("fire"):
//     case move.meta.status === "poison" && targetPokemon.types.includes("poison"):
//     case move.meta.status === "badly poison" && targetPokemon.types.includes("poison"):
//     case move.meta.status === "frozen" && targetPokemon.types.includes("ice"):
//     case target === "opponent" && nonReplacableStatus.includes(defendingMon.status):
//     case target === "player" && nonReplacableStatus.includes(attackingMon.status):
//       return true;
//     default:
//       return false;
//   }
// }

// function getStatChange(data) {
//   const { typeOfMove, move, playerIsAttacking } = data;
//   if (typeOfMove.includes("_stat_change") === false) return null;
//   let chanse = generateRandomNumber(1, 100);
//   let statChange = {
//     change: move.meta.stat_change.change,
//     stat: move.meta.stat_change.stat,
//     target: "opponent",
//   };
//   if (
//     (playerIsAttacking === true && move.meta.target === "user") ||
//     (playerIsAttacking === false && move.meta.target === "opponent")
//   ) {
//     statChange.target = "player";
//   }

//   if (move.meta.effect_chance === null) return statChange;
//   if (chanse < move.meta.effect_chance) {
//     return statChange;
//   } else {
//     return false;
//   }
// }

// function getAddedEffects(data) {
//   const moveName = data.move.name;
//   let target = "opponent";
//   let type = "";
//   switch (moveName) {
//     case "disable": // need acces to the last move used by the opponent
//     case "mist": // needs a counter for number of turns active
//     case "mimic": // need acces to the last move used by the opponent
//     case "light-screen": // need to add variable in damageCalc aka calc/2
//     case "reflect": // need to add variable in damageCalc aka calc/2
//     case "focus-energy": // not sure where to put this
//     case "transform": // fuck this
//     case "conversion": // fuck this
//     case "substitute": // need to acces users current HP and store this for other calc
//       console.log("this move have a added effect - ", moveName);
//       return null;
//     default:
//       return null;
//   }
// }

// function getMessage(data, damage, status, statChange, addedEffect) {
//   let message = [];
//   const { isCrit, effectiveness } = damage;
//   // const { damage, isCrit, random, effectiveness } = damage;
//   const { attackingMon, defendingMon, typeOfMove, move, playerIsAttacking } = data;

//   message.push(`${attackingMon.name} attacked with ${move.name}`); // what move
//   if (effectiveness === 2) message.push("It is super effective");
//   if (effectiveness === 0.5) message.push("It is not effective");
//   if (isCrit) message.push("It is a critical hit");

//   return message;
// }
