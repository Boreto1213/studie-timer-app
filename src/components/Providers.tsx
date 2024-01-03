import { FC, ReactNode } from 'react'
import TimerProvider from '../context/TimerProvider'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <TimerProvider>{children}</TimerProvider>
}

export default Providers
