import { FC, ReactNode } from 'react'
import TimerProvider from '../context/TimerProvider'
import DaysHistoryProvider from '../context/DaysHistoryProvider'
import { Toaster } from 'sonner'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster richColors={true} position='top-center'/>
      <DaysHistoryProvider>
        <TimerProvider>{children}</TimerProvider>
      </DaysHistoryProvider>
    </>
  )
}

export default Providers
