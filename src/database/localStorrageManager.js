import getNatures from './natures'

function getLocalStorageObject(sigleReturnType) {

    if(sigleReturnType === 'pokemon') {
        let lsPokemon = localStorage.getItem('myPokemonParty')

        let pokemonObject = {
            id: parseInt(lsPokemon.slice(0,3)),
            name: lsPokemon.slice(3,13).replace(/@/g, ''),
            abilitie: parseInt(lsPokemon.slice(13,14)),
            nature: getNatures(lsPokemon.slice(14,15)),
            iv: parseInt(lsPokemon.slice(15,16)),
            ev: parseInt(lsPokemon.slice(16,18)),
            moves: {
                move1: parseInt(lsPokemon.slice(18,21)),
                pp1: parseInt(lsPokemon.slice(21,23)),
                move2: parseInt(lsPokemon.slice(23,26)),
                pp2: parseInt(lsPokemon.slice(26,28)),
                move3: parseInt(lsPokemon.slice(28,31)),
                pp3: parseInt(lsPokemon.slice(31,33)),
                move4: parseInt(lsPokemon.slice(33,36)),
                pp4: parseInt(lsPokemon.slice(36,38))
                
            },
            uid: lsPokemon
        }
        return pokemonObject
    }
}

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