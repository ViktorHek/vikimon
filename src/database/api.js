import axios from 'axios';
import globals from '../utils/globalVariables'

const callPokiParty = async (idString) => {
    return await axios.get(globals.ApiUrl + 'playerParty/' + idString)
}

const callMoveList = async (idString) => {
    return await axios.get(globals.ApiUrl + 'partyMoves/' + idString)
}

const callDamageCalc = async (data) => {
    // if(!attackingPokemon || !defendingPokemon) {
    //     console.log('error in callDamageCalc')
    //     return;
    // }
    // let string = attackingString + '&' + defendingSting
    // let data = {attackingString: attackingString, defendingSting: defendingSting}
    // let string = localStorage.getItem('myPokemonParty')
    // const data = {attackingPokemon: attackingPokemon, defendingPokemon: defendingPokemon, move: move}
    // console.log(globals.ApiUrl + `damageCalc/${moveId}/${string}`)
    // return await axios.get(globals.ApiUrl + `damageCalc/${moveId}/${string}`)
    return await axios.get(globals.ApiUrl + 'battleCalc', {
        params: { data }
    })
}

const api = {
    callPokiParty,
    callMoveList,
    callDamageCalc
}

export default api