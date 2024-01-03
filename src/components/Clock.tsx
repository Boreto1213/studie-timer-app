import { FC, useEffect, useState } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'

interface ClockProps {
  isRunning: boolean
}

const Clock: FC<ClockProps> = ({isRunning}) => {
  const {secondsElapsed, setSecondsElapsed} = useTimerContext()

  const hoursStudied = Math.floor(secondsElapsed / 3600)
  const minutesStudied = String(
    Math.floor((secondsElapsed % 3600) / 60)
  ).padStart(2, '0')
  const secondsStudied = String(secondsElapsed % 60).padStart(2, '0')

  useEffect(() => {
    let intervalId: number
    if (isRunning) {
      intervalId = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isRunning])

  return (
    <div className='flex justify-center items-center text-9xl font-bold mb-5'>
      <span>{hoursStudied}</span>
      <span className='text-8xl font-bold'>:</span>
      <span className='w-[80px]'>{minutesStudied[0]}</span>
      <span className='w-[80px]'>{minutesStudied[1]}</span>
      <span className='text-8xl font-bold'>:</span>
      <span className='w-[80px]'>{secondsStudied[0]}</span>
      <span className='w-[80px]'>{secondsStudied[1]}</span>
    </div>
  )
}

export default Clock
