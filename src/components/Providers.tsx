import { FC, ReactNode } from 'react'
import TimerProvider from '../context/TimerProvider'
import DaysHistoryProvider from '../context/DaysHistoryProvider'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <DaysHistoryProvider>
      <TimerProvider>{children}</TimerProvider>
    </DaysHistoryProvider>
  )
}

export default Providers
