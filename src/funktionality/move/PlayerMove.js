import ashSprite from '../../utils/spritePosition'

const PlayerMove = (dispatch, mapObj, direction) => {
  let payload = {sprite: {}, map: {}}

  switch (direction) {
    case 0:
      payload = {
        sprite: { 
          x: ashSprite.front[0], 
          y: ashSprite.bikeFish[0] 
        },
        map: {
          x: mapObj.x,
          y: mapObj.y + 50
        }
      }
      break;
    case 1:
      payload = {
        sprite: { 
          x: ashSprite.back[0], 
          y: ashSprite.bikeFish[0]
        },
        map: {
          x: mapObj.x,
          y: mapObj.y - 50
        }
      }
      break;
    case 2:
      payload = {
        sprite: { 
          x: ashSprite.left[0], 
          y: ashSprite.bikeFish[0]
        },
        map: {
          x: mapObj.x - 50,
          y: mapObj.y
        }
      }
      break;
    case 3:
      payload = {
        sprite: { 
          x: ashSprite.right[0], 
          y: ashSprite.bikeFish[0]
        },
        map: {
          x: mapObj.x + 50,
          y: mapObj.y
        }
      }
      break;
    default:
      payload = {
        sprite: { 
          x: ashSprite.front[0], 
          y: ashSprite.bikeFish[0]
        },
        map: {
          x: mapObj.x,
          y: mapObj.y
        }
      }
      break;
  }
  dispatch({type: "SET_PLAYER_MOVEMENT",payload})
};

export default PlayerMove