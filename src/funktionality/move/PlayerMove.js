import ashSprite from '../../utils/spritePosition'
import coordinatesEvents from '../../utils/coordinatesEvents'

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
        },
        coordinatesEvents: 'noEvent'
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
        },
        coordinatesEvents: 'noEvent'
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
        },
        coordinatesEvents: 'noEvent'
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
        },
        coordinatesEvents: 'noEvent'
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
        },
        coordinatesEvents: 'noEvent'
      }
      break;
  }
  coordinatesEvents.forEach((el) => {
    if(el.x === payload.map.x && el.y === payload.map.y) {
      payload.coordinatesEvents = el.typeOfEvent
    }
  })
  dispatch({type: "SET_PLAYER_MOVEMENT",payload})
};

export default PlayerMove