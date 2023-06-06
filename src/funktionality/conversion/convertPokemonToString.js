
// function storeLocalStorageObject(pokemonObject) {

//     let pokemonString = (
//         addFillers(pokemonObject.id, 3) +
//         addAtSignsToName(pokemonObject.name) +
//         pokemonObject.abilitie +
//         pokemonObject.nature.identifyer +
//         pokemonObject.iv +
//         addFillers(pokemonObject.ev, 2) +
//         addFillers(pokemonObject.moves.move1, 3) +
//         addFillers(pokemonObject.moves.pp1, 2) +
//         addFillers(pokemonObject.moves.move2, 3) +
//         addFillers(pokemonObject.moves.pp2, 2) +
//         addFillers(pokemonObject.moves.move3, 3) +
//         addFillers(pokemonObject.moves.pp3, 2) +
//         addFillers(pokemonObject.moves.move4, 3) +
//         addFillers(pokemonObject.moves.pp4, 2)
//     )
//     return pokemonString
// }

// function addAtSignsToName(name) {
//     let returnValue = name
//     let stringLength = returnValue.length

//     if (returnValue.length < 10) {
//         for (let index = 0; index < 10 - stringLength; index++) {
//             returnValue = `${returnValue}@`
//         }
//     }
//     return returnValue
// }

// function addFillers(value, expectedLength) {
//     let valueString = JSON.stringify(value)
//     let loopAmount = expectedLength - valueString.length
//     let returnValue = valueString

//     if (valueString.length < expectedLength) {
//         for (let index = 0; index < loopAmount; index++) {
//             returnValue = `0${returnValue}`
//         }
//     }
//     return returnValue
// }