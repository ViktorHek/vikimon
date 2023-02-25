import pointerPositions from "../../utils/pointerPositions";

const MovePointer = (poinerPos, element, secondaryView) => {
  if (secondaryView === "battleInit") {
    switch (element) {
      case 0:
        if (poinerPos.index === 0) return 2;
        if (poinerPos.index === 1) return 3;
        break;
      case 1:
        if (poinerPos.index === 2) return 0;
        if (poinerPos.index === 3) return 1;
        break;
      case 2:
        if (poinerPos.index === 1) return 0;
        if (poinerPos.index === 3) return 2;
        break;
      case 3:
        if (poinerPos.index === 0) return 1;
        if (poinerPos.index === 2) return 3;
        break;
      default:
        break;
    }
  }

  if (element === 0 && poinerPos.index < pointerPositions[secondaryView].length - 1) {
    return poinerPos.index + 1;
  }
  if (element === 1 && poinerPos.index > 0) {
    return poinerPos.index - 1;
  }

  return poinerPos.index;
};

export default MovePointer;
