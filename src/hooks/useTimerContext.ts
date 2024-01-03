import { useContext } from "react"
import { timerContext } from "../context/TimerProvider"

export const useTimerContext = () => {
  return useContext(timerContext)
}