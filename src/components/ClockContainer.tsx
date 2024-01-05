import { FC, useState } from 'react'
import Clock from './Clock'
import Button from './ui/Button'
import { Pause, Play } from 'lucide-react'
import { studyTimesAPI } from '../api/studyTimesAPI'
import { useTimerContext } from '../hooks/useTimerContext'

interface ClockContainerProps {}

const ClockContainer: FC<ClockContainerProps> = ({}) => {
  const [isRunning, setIsRunning] = useState(() => {
    const value = sessionStorage.getItem('isRunning')
    return value === 'true' ? true : false
  })
  const { secondsElapsed } = useTimerContext()

  const intervalToggler = () =>
    setIsRunning((prev) => {
      const newValue = !prev
      sessionStorage.setItem('isRunning', newValue.toString())
      return newValue
    })

  const onClick = () => {
    studyTimesAPI.saveStudyTime({ studyTime: secondsElapsed, date: new Date() })
  }

  return (
    <div className='flex flex-col items-center justify-center flex-grow'>
      <span className='text-gray-400 text-lg font-semibold'>Time studied:</span>
      <Clock isRunning={isRunning} />
      <div className='flex justify-center items-center gap-1'>
        <Button onClick={intervalToggler}>
          {isRunning ? (
            <Pause className='w-8 h-8' />
          ) : (
            <Play className='w-8 h-8' />
          )}
        </Button>
        <Button onClick={onClick} variant='stop'>
          Save day data
        </Button>
      </div>
    </div>
  )
}

export default ClockContainer
