const NavigateFight = (direction, index, fightView) => {
  console.log("figth nav: ", direction, index, fightView);
  if (direction === "keys") direction = "arrowdown";
  if (direction === "keyw") direction = "arrowup";
  if (direction === "keya") direction = "arrowleft";
  if (direction === "keyd") direction = "arrowright";

  if (fightView !== "battleInit") {
    if (index < 3 && direction === "arrowdown") {
      return index + 1;
    }
    if (index > 0 && direction === "arrowup") {
      return index - 1;
    }
  } else {
    switch (direction) {
      case "arrowdown":
        if (index === 0) {
          return 2;
        }
        if (index === 1) {
          return 3;
        }
        // if (index < 3) { return index + 1 }
        return index;
      case "arrowup":
        if (index === 2) {
          return 0;
        }
        if (index === 3) {
          return 1;
        }
        // if (index > 4) { return index - 1 };
        return index;
      case "arrowleft":
        if (index === 1) {
          return 0;
        }
        if (index === 3) {
          return 2;
        }
        return index;
      case "arrowright":
        if (index === 0) {
          return 1;
        }
        if (index === 2) {
          return 3;
        }
        return index;
      default:
        console.log(
          "no switch match @NavigateFight arrow movement. index = ",
          index
        );
    }
  }
};

export default NavigateFight;
