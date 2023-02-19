import availableKeys from "../../utils/availableKeys";
import MovePointer from "./movePointer";
import PlayerMove from "./playerMove";
import pointerPositions from "../../utils/pointerPositions";
import NavigateFight from "./navigateFight";

const Navigation = (dir, dispatch, selector) => {
  const {
    playermovement,
    backpackOpen,
    pointerPosition,
    backPackView,
    viewState,
    fightView,
    myPokemons,
  } = selector;

  function checkKeys(dir) {
    if (availableKeys.hasOwnProperty(dir) === false) {
      console.log("Not a valid Key @Player.jsx - useKey()", { dir });
      return null;
    }
    for (const key in availableKeys) {
      if (Object.hasOwnProperty.call(availableKeys, key)) {
        const element = availableKeys[key];
        if (key === dir) {
          identifyTypeOffKey(dir, element);
        }
      }
    }
  }

  function identifyTypeOffKey(dir, element) {
    switch (dir) {
      case "arrowdown":
      case "arrowup":
      case "arrowleft":
      case "arrowright":
      case "keys":
      case "keyw":
      case "keya":
      case "keyd":
        moveTarget(dispatch, element);
        break;
      case "keyi":
        if (backpackOpen) {
          dispatch({ type: "TOGGLE_BACKPACK" });
        } else {
          dispatch({
            type: "SET_POINTER_POSITION",
            payload: { index: 0, view: "backpackInit" },
          });
          dispatch({ type: "TOGGLE_BACKPACK" });
        }
        break;
      case "backspace":
        dispatch({ type: "SET_BACK_KEY", payload: true });
        dispatch({ type: "SET_BACK_KEY", payload: false });
        break;
      case "enter":
        let selected = identifySelectedTarget();
        dispatch({ type: "SET_SELECT_IN_WORLD", payload: selected });
        dispatch({ type: "SET_SELECT_IN_WORLD", payload: null });
        break;
      default:
        console.log(
          "is a valid key, but can not find the type @Player.jsx - identifyTypeOffKey()",
          { dir }
        );
        break;
    }
  }

  function moveTarget(dispatch, element) {
    if (viewState === "WildPokemonEncounter") {
      var pointerPositionIndex = NavigateFight(
        dispatch,
        dir,
        pointerPosition.index,
        fightView
      );
      dispatch({
        type: "SET_POINTER_POSITION",
        payload: { view: pointerPosition.view, index: pointerPositionIndex },
      });
    } else {
      if (backpackOpen) {
        MovePointer(dispatch, pointerPosition, element, backPackView);
      } else {
        PlayerMove(dispatch, playermovement, element);
      }
    }
  }

  function identifySelectedTarget() {
    console.log("identifySelectedTarget funk ", viewState, fightView);
    if (viewState === "WildPokemonEncounter") {
      if (fightView === "battleInit") {
        switch (pointerPosition.index) {
          case 0:
            dispatch({ type: "SET_FIGHT_VIEW", payload: "selectMoves" });
            return false;
          case 1:
            console.log("selecting pokemon");
            // setShowPokemonParty(true);
            return false;
          case 2:
            console.log("selecting items");
            return false;
          case 3:
            dispatch({ type: "SET_VIEW", payload: "openWorld" });
            return false;
          default:
            console.error("error in handleSelect @ Fight.jsx");
            return false;
        }
      } else {
        switch (pointerPosition.index) {
          case 0:
            dispatch({
              type: "SET_SELECTED_ATTACK",
              payload: myPokemons[0].moves[0],
            });
            return false;
          case 1:
            dispatch({
              type: "SET_SELECTED_ATTACK",
              payload: myPokemons[0].moves[1],
            });
            return false;
          case 2:
            dispatch({
              type: "SET_SELECTED_ATTACK",
              payload: myPokemons[0].moves[2],
            });
            return false;
          case 3:
            dispatch({
              type: "SET_SELECTED_ATTACK",
              payload: myPokemons[0].moves[3],
            });
            return false;
          default:
            return false;
        }
      }
    }
    if (backPackView === "backpackInit") {
      let selecting =
        pointerPositions.backpackInit[pointerPosition.index].pointing_to;
      let payload = {
        index: 0,
        view: pointerPosition.view,
      };
      dispatch({ type: "SET_BACKPACK_VIEW", payload: selecting });
      dispatch({ type: "SET_POINTER_POSITION", payload: payload });
      return selecting;
    }
    return true;
  }

  return checkKeys(dir);
};

export default Navigation;