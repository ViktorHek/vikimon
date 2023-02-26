import ashSprite from '../../utils/spritePosition'
import maps from '../../components/maps/maps';

const currentMap = 'palletTown' // handcoded for testing

const PlayerMove = (dispatch, playermovement, direction) => {
  let payload = { sprite: {}, map: {} }
  const { map, sprite } = playermovement
  switch (direction) {
    case 0: // down
      payload = {
        sprite: {
          // x: 0,
          x: getAshSprite(ashSprite.front, sprite.x),
          y: 0
        },
        map: {
          x: map.x,
          y: map.y + 1
        }
      }
      break;
    case 1: // up
      payload = {
        sprite: {
          x: getAshSprite(ashSprite.back, sprite.x), 
          y: 0
        },
        map: {
          x: map.x,
          y: map.y - 1
        }
      }
      break;
    case 2: // left
      payload = {
        sprite: {
          x: getAshSprite(ashSprite.left, sprite.x),
          y: 0
        },
        map: {
          x: map.x - 1,
          y: map.y
        }
      }
      break;
    case 3: // right
      payload = {
        sprite: {
          x: getAshSprite(ashSprite.right, sprite.x),
          y: 0
        },
        map: {
          x: map.x + 1,
          y: map.y
        }
      }
      break;
    default:
      payload = {
        sprite: {
          x: 0,
          y: 0
        },
        map: {
          x: map.x,
          y: map.y
        }
      }
      break;
  }
  let nextTileType = getNextTileType(playermovement, direction, payload)
  if(nextTileType === 'block') {
    payload.map.x = playermovement.map.x
    payload.map.y = playermovement.map.y
  }
  if (nextTileType === 'grass' || nextTileType === 'water') {
    dispatch({ type: "SET_MAIN_VIEW", payload: 'fight' })
  }
  dispatch({ type: "SET_PLAYER_MOVEMENT", payload })
};

function getAshSprite(ashSprite, x) {
  let currentIndex = ashSprite.indexOf(x)
  if (currentIndex === ashSprite.lenght - 1) {
    return ashSprite[0]
  } else {
    return ashSprite[currentIndex + 1]
  }
}

function getNextTileType(playermovement, direction, payload) {
  let testMap = maps[currentMap]
  let x = payload.map.x
  let y = payload.map.y
  let type = testMap[y][x]
  switch (type) {
    case 0:
      return 'normal'
    case 1:
      return 'block'
    case 2:
      return 'grass'
    case 3:
      return 'water'
    case 4:
      return 'door'
    default:
      break;
  }
}

export default PlayerMove