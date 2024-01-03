import { FC } from 'react'
import { Trophy } from 'lucide-react'
import { cn } from '../lib/utils'

interface DayContainerProps {
  date: Date
  timeStudied: number
}

const DayContainer: FC<DayContainerProps> = ({ date, timeStudied }) => {
  const hoursStudied = Math.floor(timeStudied / 3600)
  const minutesStudied = (timeStudied % 3600) / 60
  return (
    <div className='flex items-center gap-1 h-14 w-full rounded-md overflow-hidden bg-gray-100'>
      <div className='flex flex-col h-full w-16 items-center justify-center '>
        <span className='text-lg h-[22px] font-semibold'>{date.getDate()}</span>
        <div className='text-sm'>
          <span>{date.getMonth() + 1}</span>
          {'/'}
          <span>{date.getFullYear()}</span>
        </div>
      </div>
      <div className='flex-grow text-center text-lg font-medium'>
        {hoursStudied} hours {minutesStudied} minutes
      </div>

      <div
        className={cn('h-full w-16 flex items-center justify-center', {
          'bg-green-300': hoursStudied >= 6,
          'bg-yellow-300': hoursStudied < 6 && hoursStudied >= 4,
          'bg-orange-300': hoursStudied < 4 && hoursStudied >= 2,
          'bg-red-300': hoursStudied < 2,
        })}
      >
        {hoursStudied >= 8 ? (
          <Trophy className='w-6 h-6 text-yellow-300' />
        ) : hoursStudied < 2 ? (
          <span className='text-xs text-red-500 uppercase font-semibold'>bitch</span>
        ) : null}
      </div>
    </div>
  )
}

export default DayContainer
