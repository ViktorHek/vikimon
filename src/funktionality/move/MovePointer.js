const MovePointer = (dispatch, poinerPos, direction, backPackView) => {
    if (backPackView === "backpackInit" && direction === 0 && poinerPos.index < 6) {
        if(direction === 0) {
            dispatch({
                type: "SET_POINTER_POSITION",
                payload: {index: poinerPos.index + 1, view: poinerPos.view}
            })
        }
    }

    if (backPackView === "backpackInit" && direction === 1 && poinerPos.index > 0) {
        dispatch({
            type: "SET_POINTER_POSITION",
            payload: {index: poinerPos.index - 1, view: poinerPos.view}
        })
    }
};

export default MovePointer