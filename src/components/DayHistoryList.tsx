import { FC } from 'react'
import { Day } from '../types/day'
import DayContainer from './DayContainer'

interface DayHistoryListProps {}

const DayHistoryList: FC<DayHistoryListProps> = ({}) => {
  const days: Day[] = [
    { date: new Date(2023, 11, 7), timeStudied: 60 * 60 * 2 + 55 * 60 },
    { date: new Date(2023, 11, 6), timeStudied: 60 * 60 * 1 + 20 * 60 },
    { date: new Date(2023, 11, 5), timeStudied: 60 * 60 * 3 + 21 * 60 },
    { date: new Date(2023, 11, 4), timeStudied: 60 * 60 * 5 + 44 * 60 },
    { date: new Date(2023, 11, 3), timeStudied: 60 * 60 * 8 + 13 * 60 },
    { date: new Date(2023, 11, 2), timeStudied: 60 * 60 * 8 + 11 * 60 },
    { date: new Date(2023, 11, 1), timeStudied: 60 * 60 * 6 + 20 * 60 },
  ]
  
  return (
    <div className='flex flex-col flex-grow gap-1'>
      {days.length ? (
        days.map((d) => (
          <DayContainer
            key={d.date.toString()}
            date={d.date}
            timeStudied={d.timeStudied}
          />
        ))
      ) : (
        <h3 className='w-full text-center text-lg font-semibold'>
          No history recorded.
        </h3>
      )}
    </div>
  )
}

export default DayHistoryList
