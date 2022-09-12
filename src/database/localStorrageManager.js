import getNatures from './natures'

function getLocalStorageObject(sigleReturnType) {

    if(sigleReturnType === 'pokemon') {
        let pokemonPartyArr = []
        let localStorageString = localStorage.getItem('myPokemonParty')
        let localStorageStringsArray = localStorageString.split('.')

        for (let index = 0; index < localStorageStringsArray.length; index++) {
            const ls = localStorageStringsArray[index];
            
            let pokemonObject = {
                id: parseInt(ls.slice(0,3)),
                level: parseInt(ls.slice(3, 5)),
                name: ls.slice(5,15).replace(/@/g, ''),
                abilitie: parseInt(ls.slice(15,16)),
                nature: getNatures(ls.slice(16,17)),
                iv: parseInt(ls.slice(17,19)),
                ev: parseInt(ls.slice(19,21)),
                moves: {
                    move1: parseInt(ls.slice(21,24)),
                    pp1: parseInt(ls.slice(24,26)),
                    move2: parseInt(ls.slice(26,29)),
                    pp2: parseInt(ls.slice(29,31)),
                    move3: parseInt(ls.slice(31,34)),
                    pp3: parseInt(ls.slice(34,36)),
                    move4: parseInt(ls.slice(36,39)),
                    pp4: parseInt(ls.slice(39,41))
                },
                dbData: {},
                inGameStats: {},
                statChange: {},
                uid: ls
            }
            pokemonPartyArr.push(pokemonObject)
        }

        return pokemonPartyArr
    }
}

// function ps(localStorageVariable, sliceStart, sliceStop) {
//     return parseInt(localStorageVariable.slica(sliceStart, sliceStop))
// };

function storeLocalStorageObject(pokemonObject) {

    let allVals = (
        addFillers(pokemonObject.id, 3) +
        addAtSignsToName(pokemonObject.name) + 
        pokemonObject.abilitie +
        pokemonObject.nature.identifyer +
        pokemonObject.iv +
        addFillers(pokemonObject.ev, 2) +
        addFillers(pokemonObject.moves.move1, 3) + 
        addFillers(pokemonObject.moves.pp1, 2) + 
        addFillers(pokemonObject.moves.move2, 3) + 
        addFillers(pokemonObject.moves.pp2, 2) + 
        addFillers(pokemonObject.moves.move3, 3) + 
        addFillers(pokemonObject.moves.pp3, 2) + 
        addFillers(pokemonObject.moves.move4, 3) + 
        addFillers(pokemonObject.moves.pp4, 2)
    )
    if (localStorage.getItem('myPokemonParty') === allVals) {
        console.log('muda fucker')
    }
    // return pokemonObject
}

function addAtSignsToName(name) {
    let returnValue = name
    let stringLength = returnValue.length
  
    if(returnValue.length < 10) {
        for (let index = 0; index < 10 - stringLength; index++) {
            returnValue = `${returnValue}@`
        }
    }
    return returnValue
}

function addFillers(value, expectedLength) {
    let valueString = JSON.stringify(value)
    let loopAmount = expectedLength - valueString.length
    let returnValue = valueString

    if(valueString.length < expectedLength) {
        for (let index = 0; index < loopAmount; index++) {
            returnValue = `0${returnValue}`
        }
    }
    return returnValue
}


export default {
    getLocalStorageObject,
    storeLocalStorageObject
}