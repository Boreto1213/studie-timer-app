import { FC, useState } from 'react'
import Clock from './Clock'
import Button from './ui/Button'
import { Pause, Play } from 'lucide-react'

interface ClockContainerProps {}

const ClockContainer: FC<ClockContainerProps> = ({}) => {
  const [isRunning, setIsRunning] = useState(false)

  const intervalToggler = () => setIsRunning((prev) => !prev)
  return (
    <div className='flex flex-col items-center justify-center flex-grow'>
      <span className='text-gray-400 text-lg font-semibold'>Time studied:</span>
      <Clock isRunning={isRunning} />
      <div className='flex justify-center items-center gap-1'>
        <Button onClick={intervalToggler} disabled={isRunning} variant='play'>
          <Play className='w-8 h-8' />
        </Button>
        <Button onClick={intervalToggler} disabled={!isRunning} variant='pause'>
          <Pause className='w-8 h-8' />
        </Button>
        <Button variant='stop'>Save day data</Button>
      </div>
    </div>
  )
}

export default ClockContainer
