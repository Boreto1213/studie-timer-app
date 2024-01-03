import { AlarmClockMinus } from 'lucide-react'
import { FC } from 'react'
import DayHistoryList from './DayHistoryList'
import AverageContainer from './AverageContainer'

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div className='flex flex-col col-span-3 h-screen pl-4 pr-2 py-6 border-r-[1px] border-gray-200'>
      <div className='flex gap-1 items-center mb-6 pr-2'>
        <AlarmClockMinus className='w-10 h-10 text-red-500' strokeWidth={2.5} />
        <h1 className='text-3xl font-bold uppercase'>
          Don't be a <span className='text-red-500'>bitch</span> timer
        </h1>
      </div>
      <div className='flex items-center justify-between mb-3 pr-2'>
        <h3 className='text-xl font-semibold'>History</h3>
        <h3 className='text-xl font-semibold'>Time studied</h3>
        <h3 className='text-xl font-semibold'>Result</h3>
      </div>
      <DayHistoryList />
      <AverageContainer />
    </div>
  )
}

export default SideBar
