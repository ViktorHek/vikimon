import availableKeys from "../../utils/availableKeys";
import MovePointer from "./movePointer";
import PlayerMove from "./playerMove";
import pointerPositions from "../../utils/pointerPositions";

const Navigation = (dir, dispatch, selector) => {
  const {
    playermovement,
    backpackOpen,
    pointerPosition,
    mainView,
    secondaryView,
  } = selector;

  function checkKeys(dir) {
    if (availableKeys.hasOwnProperty(dir) === false) {
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
        handleInventory();
        break;
      case "backspace":
        dispatch({ type: "SET_BACK_KEY", payload: true });
        dispatch({ type: "SET_BACK_KEY", payload: false });
        break;
      case "space":
      case "enter":
        let payload = identifySelectedTarget();
        dispatch(payload);
        dispatch({ type: "SET_SELECT", payload: null });
        break;
      default:
        console.log(
          "is a valid key, but can not find the type @Player.jsx - identifyTypeOffKey()",
          dir
        );
        break;
    }
  }

  function handleInventory() {
    if (backpackOpen) {
      dispatch({ type: "TOGGLE_BACKPACK" });
    } else {
      dispatch({
        type: "SET_POINTER_POSITION",
        payload: { index: 0, view: "backpackInit" },
      });
      dispatch({ type: "TOGGLE_BACKPACK" });
    }
  }

  function moveTarget(dispatch, element) {
    if (mainView === "openWorld" && !backpackOpen) {
      PlayerMove(dispatch, playermovement, element);
      return;
    }
    let pointerPositionIndex = MovePointer(
      pointerPosition,
      element,
      secondaryView,
      dir
    );

    dispatch({
      type: "SET_POINTER_POSITION",
      payload: { view: secondaryView, index: pointerPositionIndex },
    });
  }

  function identifySelectedTarget() {
    let payloadObj = {
      type: "SET_SELECT",
      payload: secondaryView
        ? pointerPositions[secondaryView][pointerPosition.index].pointing_to
        : null,
    };

    if (secondaryView === "backpackInit" || secondaryView === "battleInit") {
      payloadObj.type = "SET_SECONDARY_VIEW";
    }

    if (
      payloadObj.payload === "runFromBattle" ||
      payloadObj.payload === "exit"
    ) {
      payloadObj.payload = "";
      dispatch({ type: "SET_MAIN_VIEW", payload: "openWorld" });
    }
    return payloadObj;
  }

  return checkKeys(dir);
};

export default Navigation;
