import { AlarmClockMinus, History } from 'lucide-react'
import { FC } from 'react'
import { Day } from '../types/day'
import DayContainer from './DayContainer'

interface SideBarProps {
  
}

const SideBar: FC<SideBarProps> = ({}) => {
  const days: Day[] = [
    { date: new Date(2023, 11, 7), timeStudied: 60 * 60 * 2 + 55 * 60 },
    { date: new Date(2023, 11, 6), timeStudied: 60 * 60 * 1 + 20 * 60 },
    { date: new Date(2023, 11, 5), timeStudied: 60 * 60 * 3 + 21 * 60 },
    { date: new Date(2023, 11, 4), timeStudied: 60 * 60 * 5 + 44 * 60 },
    { date: new Date(2023, 11, 3), timeStudied: 60 * 60 * 8 + 13 * 60 },
    { date: new Date(2023, 11, 2), timeStudied: 60 * 60 * 8 + 11 * 60 },
    { date: new Date(2023, 11, 1), timeStudied: 60 * 60 * 6 + 20 * 60 },
  ]

  const studiedAverage = 60 * 60 * 5 + 11 * 60
  const hoursStudiedAvg = Math.floor(studiedAverage / 3600)
  const minutesStudiedAvg = (studiedAverage % 3600) / 60
  return <div className='flex flex-col col-span-3 h-screen px-4 py-6 border-r-[1px] border-gray-200'>
  <div className='flex gap-1 items-center mb-10'>
    <AlarmClockMinus
      className='w-10 h-10 text-red-500'
      strokeWidth={2.5}
    />
    <h1 className='text-3xl font-bold uppercase'>
      Don't be a <span className='text-red-500'>bitch</span> timer
    </h1>
  </div>
  <div className='flex items-center justify-between mb-3'>
    <h3 className='text-xl font-semibold'>History</h3>
    <History className='w-6 h-6' />
  </div>
  <div className='flex flex-col flex-grow gap-1'>
    {days.length ? (
      days.map((d) => (
        <DayContainer date={d.date} timeStudied={d.timeStudied} />
      ))
    ) : (
      <h3 className='w-full text-center text-lg font-semibold'>
        No history recorded.
      </h3>
    )}
  </div>
  <div>
    <div className='flex justify-between text-xl font-semibold mb-2'>
      <span>Average for:</span>
      <span>December 2023</span>
    </div>
    <div className='text-3xl font-medium text-center mb-3'>
      {hoursStudiedAvg} hours {minutesStudiedAvg} minutes
    </div>
    <div className='text-center text-gray-400'>
      {hoursStudiedAvg >= 8 ? 'Real G. Keep pushing!' : 
      hoursStudiedAvg > 8 && hoursStudiedAvg >= 6 ? 'You can do it, you can do more bro...' : 
      hoursStudiedAvg < 6 && hoursStudiedAvg >= 4 ? 'You wanna be average?' :
      hoursStudiedAvg < 4 && hoursStudiedAvg >= 2 ? 
      `You a fucking bitch bro, can't even look at you.` : `Might as well kill yourself, you can't be more useless.` }
    </div>
  </div>
</div>
}

export default SideBar