import { useContext } from "react"
import { daysHistoryContext } from "../context/DaysHistoryProvider"

export const useDaysHistory = () => {
  return useContext(daysHistoryContext)
}