import pointerPositions from "../../utils/pointerPositions";

const {backpackInit, pokemonParty} = pointerPositions

const MovePointer = (dispatch, poinerPos, direction, backPackView) => {
    if (backPackView === "backpackInit") {
        if (direction === 0 && poinerPos.index < backpackInit.length-1) {
            dispatch({
                type: "SET_POINTER_POSITION",
                payload: { index: poinerPos.index + 1, view: backPackView }
            })
        }
        if (direction === 1 && poinerPos.index > 0) {
            dispatch({
                type: "SET_POINTER_POSITION",
                payload: { index: poinerPos.index - 1, view: backPackView }
            })
        }
    }
    if (backPackView === "pokeParty") {
        if (direction === 0 && poinerPos.index < pokemonParty.length-1) {
            dispatch({
                type: "SET_POINTER_POSITION",
                payload: { index: poinerPos.index + 1, view: backPackView }
            })
        }
        if (direction === 1 && poinerPos.index > 0) {
            dispatch({
                type: "SET_POINTER_POSITION",
                payload: { index: poinerPos.index - 1, view: backPackView }
            })
        }
    }
};

export default MovePointer