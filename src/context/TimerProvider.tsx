import { Dispatch, SetStateAction, createContext, FC, ReactNode, useState } from "react";

type TimerContextType = {
  secondsElapsed: number
  setSecondsElapsed: Dispatch<SetStateAction<number>>
}

export const timerContext = createContext<TimerContextType>({
  secondsElapsed: 0,
  setSecondsElapsed: () => {}
})


interface TimerProviderProps {
  children: ReactNode
}

const TimerProvider: FC<TimerProviderProps> = ({children}) => {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0)
  return <timerContext.Provider value={{ secondsElapsed, setSecondsElapsed}}>
    {children}
  </timerContext.Provider>
}

export default TimerProvider