import ashSprite from '../../utils/spritePosition'
import coordinatesEvents from '../../utils/coordinatesEvents'
import globals from '../../utils/globalVariables' // one global mapTile = 16

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
          y: map.y - globals.mapTile
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
          y: map.y + globals.mapTile
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
          x: map.x + globals.mapTile,
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
          x: map.x - globals.mapTile,
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
  coordinatesEvents.forEach((el) => {
    if (el.x === payload.map.x && el.y === payload.map.y) {
      dispatch({ type: "SET_VIEW", payload: el.typeOfEvent })
    }
  })
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

export default PlayerMove