import {
  Dispatch,
  SetStateAction,
  createContext,
  FC,
  ReactNode,
  useState,
} from 'react'
import { StudyTime } from '../types/studyTime'

type DaysHistoryContextType = {
  history: StudyTime[]
  setHistory: Dispatch<SetStateAction<StudyTime[]>>
}

export const daysHistoryContext = createContext<DaysHistoryContextType>({
  history: [],
  setHistory: () => {},
})

interface DaysHistoryProviderProps {
  children: ReactNode
}

const DaysHistoryProvider: FC<DaysHistoryProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<StudyTime[]>([
    // { date: new Date(2023, 11, 7), studyTime: 60 * 60 * 2 + 55 * 60 },
    // { date: new Date(2023, 11, 6), studyTime: 60 * 60 * 1 + 20 * 60 },
    // { date: new Date(2023, 11, 5), studyTime: 60 * 60 * 3 + 21 * 60 },
    // { date: new Date(2023, 11, 4), studyTime: 60 * 60 * 5 + 44 * 60 },
    // { date: new Date(2023, 11, 3), studyTime: 60 * 60 * 8 + 13 * 60 },
    // { date: new Date(2023, 11, 2), studyTime: 60 * 60 * 8 + 11 * 60 },
    // { date: new Date(2023, 11, 1), studyTime: 60 * 60 * 6 + 20 * 60 },
  ])
  return (
    <daysHistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </daysHistoryContext.Provider>
  )
}

export default DaysHistoryProvider
