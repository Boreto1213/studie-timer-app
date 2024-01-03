import { FC } from 'react'
import TopBar from './TopBar'
import ClockContainer from './ClockContainer'
import Progress from './Progress'

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <div className='flex flex-col col-span-7 h-screen px-4 py-6'>
      <TopBar />
      <ClockContainer />
      <Progress /> 
    </div>
  )
}

export default Dashboard
