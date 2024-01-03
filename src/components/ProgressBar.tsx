import { FC } from 'react'
import { cn } from '../lib/utils'
import { useTimerContext } from '../hooks/useTimerContext'

interface ProgressProps {}

const Progress: FC<ProgressProps> = () => {
  const dailyGoal = 60 * 60 * 8
  const { secondsElapsed } = useTimerContext()
  const percentage = (secondsElapsed / dailyGoal) * 100

  const message =
    percentage < 5
      ? ''
      : percentage < 25
      ? 'bitch'
      : percentage < 50
      ? 'average'
      : percentage < 75
      ? 'not bad'
      : percentage < 100
      ? 'g'
      : 'real g'

  return (
    <div className='col-span-4 h-14'>
      <div
        className={cn(
          'h-full flex justify-center items-center text-lg uppercase',
          {
            'bg-rose-400 text-rose-500': percentage < 25,
            'bg-orange-400 text-orange-500':
              percentage >= 25 && percentage < 50,
            'bg-yellow-400 text-yellow-500':
              percentage >= 50 && percentage <= 75,
            'bg-green-400 text-green-500':
              percentage >= 75 && percentage <= 100,
          }
        )}
        // tailwind does not support dynamic styles
        style={{ width: `${percentage}%` }}
      >
        {message}
      </div>
    </div>
  )
}

export default Progress
