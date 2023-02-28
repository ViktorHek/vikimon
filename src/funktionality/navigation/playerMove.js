import ashSprite from "../../utils/spritePosition";
import maps from "../../maps/maps";

let currentMap = "palletTownMain"; // handcoded for testing

const PlayerMove = (dispatch, playermovement, direction) => {
  let prevX = playermovement.map.x;
  let prevY = playermovement.map.y;
  let payload = playermovement;
  const { map, sprite } = playermovement;
  switch (direction) {
    case 0: // down
      payload.sprite.x = getAshSprite(ashSprite.front, sprite.x);
      payload.map.y = map.y + 1;
      break;
    case 1: // up
      payload.sprite.x = getAshSprite(ashSprite.back, sprite.x);
      payload.map.y = map.y - 1;
      break;
    case 2: // left
      payload.sprite.x = getAshSprite(ashSprite.left, sprite.x);
      payload.map.x = map.x - 1;
      break;
    case 3: // right
      payload.sprite.x = getAshSprite(ashSprite.right, sprite.x);
      payload.map.x = map.x + 1;
      break;
    default:
      break;
  }
  let nextTileType = getNextTileType(payload);
  if (nextTileType.nextMap) {
    currentMap = nextTileType.nextMap
    payload.img = nextTileType.nextMap;
    payload.map.y = nextTileType.nextPos[0];
    payload.map.x = nextTileType.nextPos[1];
  } else {
    switch (nextTileType) {
      case "block":
        payload.map.x = prevX;
        payload.map.y = prevY;
        break;
      case "door":
        let newMap = getNewMap();
        if (newMap) payload.img = newMap;
        break;
      case "grass":
      case "water":
        dispatch({ type: "SET_MAIN_VIEW", payload: "fight" });
        break;
      default:
        break;
    }
  }
  dispatch({ type: "SET_PLAYER_MOVEMENT", payload });
};

function getNewMap() {
  return false;
}

function getAshSprite(ashSprite, x) {
  let currentIndex = ashSprite.indexOf(x);
  if (currentIndex === ashSprite.length - 1) {
    return ashSprite[0];
  } else {
    return ashSprite[currentIndex + 1];
  }
}

function getNextTileType(payload) {
  let testMap = maps[currentMap];
  let x = payload.map.x;
  let y = payload.map.y;
  let type = testMap.grid[y][x];
  if (type.nextMap) {
    return type;
  } else {
    switch (type) {
      case 0:
        return "normal";
      case 1:
        return "block";
      case 2:
        return "grass";
      case 3:
        return "water";
      case 4:
        return "door";
      default:
        break;
    }
  }
}

export default PlayerMove;
