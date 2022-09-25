const MovePointer = (dispatch, poinerPos, direction) => {
    let payload = { top: 1, left: 1 }
    const { top, left } = poinerPos

    if (canGoDown(top, direction)) {
        console.log('down')
        payload = {
            top: top - 16,
            left: left
        }
    }
    if (canGoUp(top, direction)) {
        console.log('up')
        payload = {
            top: top + 16,
            left: left
        }
    }

    dispatch({ type: "SET_POINTER_POSITION", payload })
};

function canGoDown(top, direction) {
    if (direction !== 0 && top !== 1) {
        return true
    } else {
        return false
    }
}
function canGoUp(top, direction) {
    if (direction !== 1 && top !== 81) {
        return true
    } else {
        return false
    }
}

export default MovePointer