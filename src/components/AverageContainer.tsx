import { FC } from 'react'
import { useDaysHistory } from '../hooks/useDaysHistory'

interface AverageContainerProps {}

const AverageContainer: FC<AverageContainerProps> = ({}) => {
  const { history } = useDaysHistory()
  const studiedAverage = history.reduce(
    (acc, cur) => Math.round(acc + cur.studyTime / history.length),
    0
  )
  const hoursStudiedAvg = Math.floor(studiedAverage / 3600)
  const minutesStudiedAvg = Math.floor((studiedAverage % 3600) / 60)

  const today = new Date()
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return (
    <div>
      <div className='flex justify-between text-xl font-semibold mb-2 pr-2'>
        <span>Average for:</span>
        <span>{`${monthNames[today.getMonth()]} ${today.getFullYear()}`}</span>
      </div>
      <div className='text-3xl font-medium text-center mb-3'>
        {hoursStudiedAvg} hour{hoursStudiedAvg !== 1 ? 's' : null} {minutesStudiedAvg} minute{minutesStudiedAvg !== 1 ? 's' : null}
      </div>
      <div className='text-center text-gray-400'>
        {hoursStudiedAvg >= 8
          ? 'Real G. Keep pushing!'
          : hoursStudiedAvg > 8 && hoursStudiedAvg >= 6
          ? 'You can do it, you can do more bro...'
          : hoursStudiedAvg < 6 && hoursStudiedAvg >= 4
          ? 'You wanna be average?'
          : hoursStudiedAvg < 4 && hoursStudiedAvg >= 2
          ? `You a fucking bitch bro, can't even look at you.`
          : `Might as well kill yourself, you can't be more useless.`}
      </div>
    </div>
  )
}

export default AverageContainer
