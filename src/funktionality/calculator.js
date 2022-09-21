import calcTyping from '../database/typing'

// damage = ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random

function damageCalculation(attackingPokemon, defendingPokemon, move) {
    // is crit = 2, is not crit = 1
    let isCrit = calculateIfCrit(attackingPokemon)
    let AD = getattackDefenceDifferance(attackingPokemon, defendingPokemon, isCrit, move)
    let STAB = getStab(attackingPokemon, move)
    let typingCalc = getTypingCalc(move, defendingPokemon)
    let random = getRandomDamage()
    // calculation brackdonw
    let firstCalc = 2 * attackingPokemon.level * isCrit
    let secondCalc = (firstCalc / 5) + 2
    let thirdCalc = secondCalc * move.power * AD
    let fourthCalc = thirdCalc / 50 + 2
    let fifthCalc = fourthCalc * STAB * typingCalc * random
    return fifthCalc
}

function getRandomDamage() {
    let randomNumber = generateRandomNumber(217, 255)
    return randomNumber / 255
}

function getTypingCalc(move, defendingPokemon) {
    console.log({defendingPokemon})
    let firstTyping = calcTyping(move.type, defendingPokemon.dbData.types[0])
    let secondTyping = 1
    if(defendingPokemon.dbData.types[1]) {
        secondTyping = calcTyping(move.type, defendingPokemon.dbData.types[1])
    }
    return firstTyping * secondTyping
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function calculateIfCrit(pokemon) {
    let critRate = generateRandomNumber(0, 255)
    if (pokemon.stats.speed / 2 > critRate) {
        return 2
    } else {
        return 1
    }
}

function getStab(attackingPokemon, move) {
    if (attackingPokemon.dbData.types.includes(move.type)) {
        return 1.5
    } else {
        return 1
    }
}

function getattackDefenceDifferance(attackingPokemon, defendingPokemon, isCrit, move) {

    if(isCrit === 2) {
        if (move.meta.damage_class === 'physical') {
            return attackingPokemon.stats.attack / defendingPokemon.stats.defense
        } else if (move.meta.damage_class === 'special') {
            return attackingPokemon.stats.special / defendingPokemon.stats.special
        } else {
            return 0
        }
    } else {
        if(attackingPokemon.statChange === {} && defendingPokemon.statChange === {}) {
            if (move.meta.damage_class === 'physical') {
                return attackingPokemon.stats.attack / defendingPokemon.stats.defense
            } else if (move.meta.damage_class === 'special') {
                return attackingPokemon.stats.special / defendingPokemon.stats.special
            } else {
                return 0
            }
        } else {
            console.log('attack is not critikal and stats are changed')
            return attackingPokemon.stats.attack / defendingPokemon.stats.defense // change
        }
    }
}

const calculator = {
    damageCalculation
}

export default calculator