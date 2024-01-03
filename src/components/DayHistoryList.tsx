import { FC } from 'react'
import { Day } from '../types/day'
import DayContainer from './DayContainer'
import { useDaysHistory } from '../hooks/useDaysHistory'

interface DayHistoryListProps {}

const DayHistoryList: FC<DayHistoryListProps> = ({}) => {
  const {history} = useDaysHistory()
  
  return (
    <div className='flex flex-col flex-grow gap-1 overflow-y-auto pr-2'>
      {history.length ? (
        history.map((d) => (
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
