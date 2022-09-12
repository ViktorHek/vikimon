import calcTyping from '../database/typing'
// HP = ( ( ( ( baseHP + iv ) * 2 + ( root(ev) / 4 ) ) * level ) / 100 ) + level + 10
// other stats = ( ( ( ( baseStat + iv ) * 2 + ( root(ev) / 4 ) ) * level ) / 100 ) + 5

function statsCalculator(pokiObj) {
    let calculatedStats = {
        hp: calculatingHp(pokiObj.dbData.stats.hp, pokiObj),
        attack: calculatingNonHpStats(pokiObj.dbData.stats.attack, pokiObj),
        defense: calculatingNonHpStats(pokiObj.dbData.stats.defense, pokiObj),
        special: calculatingNonHpStats(pokiObj.dbData.stats.special, pokiObj),
        speed: calculatingNonHpStats(pokiObj.dbData.stats.speed, pokiObj)
    }
    return calculatedStats
}

function calculatingHp(baseHp, pokiObj) {
    const {iv, ev, level} = pokiObj
    let baseHpAndIv = baseHp + iv
    let realEv = ev * 100
    let rootEv = Math.sqrt(realEv) / 4
    let firstHpCalc = (baseHpAndIv * 2) + rootEv
    let secondHpCalc = firstHpCalc * level
    let thirdHpCalc = (secondHpCalc / 100) + level + 10
    return Math.floor(thirdHpCalc)
}

function calculatingNonHpStats(baseStat, pokiObj) {
    const {iv, ev, level} = pokiObj
    let baseStatAndIv = baseStat + iv
    let realEv = ev * 100
    let rootEv = Math.sqrt(realEv) / 4
    let fistCalc = (baseStatAndIv * 2) + rootEv
    let secondCalc = fistCalc * level
    let thirdCalc = (secondCalc / 100) + 5
    return Math.floor(thirdCalc)
}

// damage = ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random

function damageCalculation(attackingPokemon, defendingPokemon, move) {
    let critRate = generateRandomNumber(0, 255)
    // is crit = 2, is not crit = 1
    let isCrit = calculateIfCrit(attackingPokemon, critRate)
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
    let firstTyping = calcTyping(move.type, defendingPokemon.inGameStats.types[0])
    let secondTyping = 1
    if(defendingPokemon.inGameStats.types[1]) {
        secondTyping = calcTyping(move.type, defendingPokemon.inGameStats.types[1])
    }
    return firstTyping * secondTyping
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function calculateIfCrit(pokemon, critRate) {
    if (pokemon.inGameStats.speed / 2 > critRate) {
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
            return attackingPokemon.inGameStats.attack / defendingPokemon.inGameStats.defense
        } else if (move.meta.damage_class === 'special') {
            return attackingPokemon.inGameStats.special / defendingPokemon.inGameStats.special
        } else {
            return 0
        }
    } else {
        if(attackingPokemon.statChange === {} && defendingPokemon.statChange === {}) {
            if (move.meta.damage_class === 'physical') {
                return attackingPokemon.inGameStats.attack / defendingPokemon.inGameStats.defense
            } else if (move.meta.damage_class === 'special') {
                return attackingPokemon.inGameStats.special / defendingPokemon.inGameStats.special
            } else {
                return 0
            }
        } else {
            console.log('attack is not critikal and stats are changed')
        }
    }
}

export default { statsCalculator }