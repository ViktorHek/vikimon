

export default function getNatures(letter) {
    let key = letter.toLowerCase()
    let returnValue = {}
    naturesArr.forEach((el) => {
        if (el.identifyer === key) {
            returnValue = el
        }
    })
    return returnValue
}

const naturesArr = [
    { identifyer: 'a', name: 'adamant', increasedStat: 'attack', decreasedStat: 'special'},
    { identifyer: 'b', name: 'brave', increasedStat: 'attack', decreasedStat: 'speed'},
    { identifyer: 'c', name: 'calm', increasedStat: 'special', decreasedStat: 'attack'},
    { identifyer: 'd', name: 'docile', increasedStat: null, decreasedStat: null},
    { identifyer: 'e', name: 'bold', increasedStat: 'defense', decreasedStat: 'attack'},
    { identifyer: 'f', name: 'bashful', increasedStat: null, decreasedStat: null},
    { identifyer: 'g', name: 'gentle', increasedStat: 'special', decreasedStat: 'defence'},
    { identifyer: 'h', name: 'hardy', increasedStat: null, decreasedStat: null},
    { identifyer: 'i', name: 'impish', increasedStat: 'defence', decreasedStat: 'special'},
    { identifyer: 'j', name: 'jolly', increasedStat: 'speed', decreasedStat: 'special'},
    { identifyer: 'k', name: 'hasty', increasedStat: 'speed', decreasedStat: 'defence'},
    { identifyer: 'l', name: 'lonely', increasedStat: 'attack', decreasedStat: 'defense'},
    { identifyer: 'm', name: 'lax', increasedStat: 'defence', decreasedStat: 'special'},
    { identifyer: 'n', name: 'naive', increasedStat: 'speed', decreasedStat: 'special'},
    { identifyer: 'o', name: 'modest', increasedStat: 'special', decreasedStat: 'attack'},
    { identifyer: 'p', name: 'mild', increasedStat: 'special', decreasedStat: 'defence'},
    { identifyer: 'q', name: 'quiet', increasedStat: 'special', decreasedStat: 'speed'},
    { identifyer: 'r', name: 'relaxed', increasedStat: 'defence', decreasedStat: 'speed'},
    { identifyer: 's', name: 'sassy', increasedStat: 'special', decreasedStat: 'speed'},
    { identifyer: 't', name: 'timid', increasedStat: 'speed', decreasedStat: 'attack'},
    { identifyer: 'u', name: 'serious', increasedStat: null, decreasedStat: null},
    { identifyer: 'v', name: 'quirky', increasedStat: null, decreasedStat: null},
    { identifyer: 'w', name: 'ultimate', increasedStat: 'all', decreasedStat: null}
]
