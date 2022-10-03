import globals from "../../utils/globalVariables";

const MovePointer = (dispatch, poinerPos, direction, backPackView) => {
    console.log('move pointer', poinerPos, direction, backPackView)
    let payload = { top: 0, left: 0 }
    const { top, left } = poinerPos
    if (backPackView === "init") {
        payload = { top: 0, left: 0 }
    }
    if (canGoDown(top, direction)) {
        console.log('up')
        payload = {
            top: getTop(top),
            // top: top - 16,
            left: left
        }
        dispatch({ type: "SET_POINTER_POSITION", payload })
    }
    if (canGoUp(top, direction)) {
        console.log('down')
        payload = {
            top: getDown(top),
            left: left
        }
        dispatch({ type: "SET_POINTER_POSITION", payload })
    }
};

const payloadArr = globals.posiblePointerPositionInPokemonParty // [1, 17, 33, 49, 65, 81]

function getDown(top) {
    let index = payloadArr.indexOf(top)
    if (index === payloadArr.length - 1) {
        return payloadArr[index]
    } else {
        return payloadArr[index + 1]
    }
}

function getTop(top) {
    let index = payloadArr.indexOf(top)
    if (index === 0) {
        return payloadArr[index]
    } else {
        return payloadArr[index - 1]
    }
}

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