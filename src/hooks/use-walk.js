import { useDispatch } from "react-redux";
// import WalkKeys from '../utils/availableKeys'
import ashSprite from '../utils/spritePosition'

const useWalk = (direction) => {
  const dispatch = useDispatch()
  console.log('@walk: ', direction)
  // const [dir, setDir] = useState(0)
  // const [step, setStep] = useState(0)
  let payload = {}
  switch (direction) {
    case 0:
      payload.sprite = { x: ashSprite.front[0], y: ashSprite.bikeFish[0] }
      break;
    case 1:
      payload.sprite = { x: ashSprite.back[0], y: ashSprite.bikeFish[0] }
      break;
    case 2:
      payload.sprite = { x: ashSprite.left[0], y: ashSprite.bikeFish[0] }
      break;
    case 3:
      payload.sprite = { x: ashSprite.right[0], y: ashSprite.bikeFish[0] }
      break;
    default:
      payload.sprite = { x: ashSprite.front[0], y: ashSprite.bikeFish[0] }
      break;
  }
  dispatch({
    type: "SET_PLAYER_MOVEMENT",
    payload: { payload }
  })
}

export default useWalk