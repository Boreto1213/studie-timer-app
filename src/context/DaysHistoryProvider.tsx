import { Dispatch, SetStateAction, createContext, FC, ReactNode, useState } from "react";
import { Day } from "../types/day";

type DaysHistoryContextType = {
  history: Day[],
  setHistory: Dispatch<SetStateAction<Day[]>>
}

export const daysHistoryContext = createContext<DaysHistoryContextType>({
  history: [],
  setHistory: () => {},
})

interface DaysHistoryProviderProps {
  children: ReactNode
}

const DaysHistoryProvider: FC<DaysHistoryProviderProps> = ({children}) => {
  // TODO... change default value to []
  const [history, setHistory] = useState<Day[]>([
    { date: new Date(2023, 11, 7), timeStudied: 60 * 60 * 2 + 55 * 60 },
    { date: new Date(2023, 11, 6), timeStudied: 60 * 60 * 1 + 20 * 60 },
    { date: new Date(2023, 11, 5), timeStudied: 60 * 60 * 3 + 21 * 60 },
    { date: new Date(2023, 11, 4), timeStudied: 60 * 60 * 5 + 44 * 60 },
    { date: new Date(2023, 11, 3), timeStudied: 60 * 60 * 8 + 13 * 60 },
    { date: new Date(2023, 11, 2), timeStudied: 60 * 60 * 8 + 11 * 60 },
    { date: new Date(2023, 11, 1), timeStudied: 60 * 60 * 6 + 20 * 60 },
    { date: new Date(2023, 11, 7), timeStudied: 60 * 60 * 2 + 55 * 60 },
    { date: new Date(2023, 11, 6), timeStudied: 60 * 60 * 1 + 20 * 60 },
    { date: new Date(2023, 11, 5), timeStudied: 60 * 60 * 3 + 21 * 60 },
    { date: new Date(2023, 11, 4), timeStudied: 60 * 60 * 5 + 44 * 60 },
    { date: new Date(2023, 11, 3), timeStudied: 60 * 60 * 8 + 13 * 60 },
    { date: new Date(2023, 11, 2), timeStudied: 60 * 60 * 8 + 11 * 60 },
    { date: new Date(2023, 11, 1), timeStudied: 60 * 60 * 6 + 20 * 60 },
    { date: new Date(2023, 11, 7), timeStudied: 60 * 60 * 2 + 55 * 60 },
    { date: new Date(2023, 11, 6), timeStudied: 60 * 60 * 1 + 20 * 60 },
    { date: new Date(2023, 11, 5), timeStudied: 60 * 60 * 3 + 21 * 60 },
    { date: new Date(2023, 11, 4), timeStudied: 60 * 60 * 5 + 44 * 60 },
    { date: new Date(2023, 11, 3), timeStudied: 60 * 60 * 8 + 13 * 60 },
    { date: new Date(2023, 11, 2), timeStudied: 60 * 60 * 8 + 11 * 60 },
    { date: new Date(2023, 11, 1), timeStudied: 60 * 60 * 6 + 20 * 60 },
    { date: new Date(2023, 11, 7), timeStudied: 60 * 60 * 2 + 55 * 60 },
    { date: new Date(2023, 11, 6), timeStudied: 60 * 60 * 1 + 20 * 60 },
    { date: new Date(2023, 11, 5), timeStudied: 60 * 60 * 3 + 21 * 60 },
    { date: new Date(2023, 11, 4), timeStudied: 60 * 60 * 5 + 44 * 60 },
    { date: new Date(2023, 11, 3), timeStudied: 60 * 60 * 8 + 13 * 60 },
    { date: new Date(2023, 11, 2), timeStudied: 60 * 60 * 8 + 11 * 60 },
    { date: new Date(2023, 11, 1), timeStudied: 60 * 60 * 6 + 20 * 60 },
  ])
  return <daysHistoryContext.Provider value={{history, setHistory}}>
    {children}
  </daysHistoryContext.Provider>
}

export default DaysHistoryProvider