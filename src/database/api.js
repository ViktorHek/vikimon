import axios from 'axios';
import globals from '../utils/globalVariables'

const callPokiParty = async (idString) => {
    return await axios.get(globals.ApiUrl + 'selectedPokemonList/' + idString)
}

const callMoveList = async (idString) => {
    return await axios.get(globals.ApiUrl + 'partyMoves/' + idString)
}

const api = {
    callPokiParty,
    callMoveList
}

export default api