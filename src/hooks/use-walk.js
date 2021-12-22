import { useState } from "react";
import WalkKeys from '../utils/availableKeys'
import ashSprite from '../utils/spritePosition'

export default function useMoveSprite(direction) {
  const [dir, setDir] = useState(0)
  const [step, setStep] = useState(0)

}