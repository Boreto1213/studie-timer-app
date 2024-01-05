import { FC, useEffect } from 'react'
import DayContainer from './DayContainer'
import { useDaysHistory } from '../hooks/useDaysHistory'
import { studyTimesAPI } from '../api/studyTimesAPI'
import { toast } from 'sonner'

interface DayHistoryListProps {}

const DayHistoryList: FC<DayHistoryListProps> = ({}) => {
  const { history, setHistory } = useDaysHistory()
  const today = new Date()
  useEffect(() => {
    studyTimesAPI
      .getStudyTimesByMonthAndYear(today.getMonth(), today.getFullYear())
      .then((data) => {
        setHistory(data.map(d => ({...d, date: new Date(d.date)})))
      })
      .catch((_) => toast.error(`Couldn't fetch study time history.`))
  }, [])
  console.log(history);
  
  return (
    <div className='flex flex-col flex-grow gap-1 overflow-y-auto pr-2'>
      {history.length ? (
        history.map((d) => (
          <DayContainer
            key={d.date.toString()}
            date={d.date}
            studyTime={d.studyTime}
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
