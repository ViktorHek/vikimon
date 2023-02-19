import pointerPositions from "../../utils/pointerPositions";

const { backpackInit, pokemonParty } = pointerPositions;

const MovePointer = (poinerPos, element, backPackView, direction, fightView, viewState) => {
  if (viewState === "openWorld") {
    if (backPackView === "backpackInit") {
      if (element === 0 && poinerPos.index < backpackInit.length - 1) {
        return poinerPos.index + 1;
      }
      if (element === 1 && poinerPos.index > 0) {
        return poinerPos.index - 1;
      }
    }
    if (backPackView === "pokeParty") {
      if (element === 0 && poinerPos.index < pokemonParty.length - 1) {
        return poinerPos.index + 1;
      }
      if (element === 1 && poinerPos.index > 0) {
        return poinerPos.index - 1;
      }
    }
  } else {
    if (direction === "keys") direction = "arrowdown";
    if (direction === "keyw") direction = "arrowup";
    if (direction === "keya") direction = "arrowleft";
    if (direction === "keyd") direction = "arrowright";

    if (fightView !== "battleInit") {
      if (poinerPos.index < 3 && direction === "arrowdown") {
        return poinerPos.index + 1;
      }
      if (poinerPos.index > 0 && direction === "arrowup") {
        return poinerPos.index - 1;
      }
    } else {
      switch (direction) {
        case "arrowdown":
          if (poinerPos.index === 0) {
            return 2;
          }
          if (poinerPos.index === 1) {
            return 3;
          }
          // if (poinerPos.index < 3) { return poinerPos.index + 1 }
          return poinerPos.index;
        case "arrowup":
          if (poinerPos.index === 2) {
            return 0;
          }
          if (poinerPos.index === 3) {
            return 1;
          }
          // if (poinerPos.index > 4) { return poinerPos.index - 1 };
          return poinerPos.index;
        case "arrowleft":
          if (poinerPos.index === 1) {
            return 0;
          }
          if (poinerPos.index === 3) {
            return 2;
          }
          return poinerPos.index;
        case "arrowright":
          if (poinerPos.index === 0) {
            return 1;
          }
          if (poinerPos.index === 2) {
            return 3;
          }
          return poinerPos.index;
        default:
          console.log("no switch match @NavigateFight arrow movement. poinerPos.index = ", poinerPos.index);
      }
    }
  }
};

export default MovePointer;
