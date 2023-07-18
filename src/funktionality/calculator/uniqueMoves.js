
// import types from "../../dataBase/types";
import specialMoves from '../../database/nameLists/specialMoves'


const uniqueMoves = function uniqueMoves(data) {
  const { attackingMon, defendingMon, move, playerIsAttacking } = data;

  let returnValue = {
    damage: 0,
    status: { name: "", target: "" },
    statChange: { type: "", value: 0, target: "" },
    message: "",
    addedEffect: [],
    info: ""
  };

  switch (move.name) {
    case 'whirlwind':
    case 'roar':
      returnValue = whirlwind(returnValue, data)
      break;
    case 'disable':
      returnValue = disable(returnValue, data)
      break;
    case 'mist':
      returnValue = disable(returnValue, data)
      break;
  
    default:
      break;
  }
  
  return returnValue;
};

function whirlwind(returnValue, data) {
  // add an eventType variable
  // if ( eventType === "wildPokemon" ) return returnValue
  returnValue.info = "endBattle"
  returnValue.message = "Pokemon ran away"
  return returnValue
}

function disable(returnValue, data) {
  // add an hisstory variable
  // let target = {
  //  name: playerIsAttacking ? "opponent" : "player",
  //  mon: playerIsAttacking ? "defendingMon" : "attackingMon"
  //}
  // let prevMove = data.history[target.name].prevMove
  // let prevMoveIndex = data[target.mon].moves.map((el, index) => if(el.name === prevMove) return index)
  // let disbledMove = {type: 'disable', effect: prevMoveIndex, target: target.name }
  //returnValue.addedEffect.push(disbledMove)
  return returnValue
}

// if (move.name === "rest") {
//   returnObj.target = playerIsAttacking ? "player" : "opponent";
// }



export default uniqueMoves