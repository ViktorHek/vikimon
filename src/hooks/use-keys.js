import { useEffect } from 'react'

export default function useKeys(funk) {
  useEffect(() => {
    window.addEventListener("keydown", funk)
    return () => window.removeEventListener("keydown", funk)
  }, [funk])
}