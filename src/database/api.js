import axios from "axios";
import globals from "../utils/globalVariables";

const callPokiParty = async (idString) => {
  return await axios.get(globals.ApiUrl + "playerParty/" + idString);
};

const callMoveList = async (idString) => {
  return await axios.get(globals.ApiUrl + "partyMoves/" + idString);
};

const callDamageCalc = async (data) => {
  return await axios.get(globals.ApiUrl + "battleCalc", {
    params: { data },
  });
};

const initBattle = async (data) => {
  return await axios.put(globals.ApiUrl + "initBattle", { data });
};

const api = {
  callPokiParty,
  callMoveList,
  callDamageCalc,
  initBattle,
};

export default api;
