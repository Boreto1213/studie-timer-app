import { FC, useEffect } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { studyTimesAPI } from '../api/studyTimesAPI'
import { toast } from 'sonner'
import { AxiosError } from 'axios'

interface ClockProps {
  isRunning: boolean
}

const Clock: FC<ClockProps> = ({ isRunning }) => {
  const { secondsElapsed, setSecondsElapsed } = useTimerContext()

  const hoursStudied = Math.floor(secondsElapsed / 3600)
  const minutesStudied = String(
    Math.floor((secondsElapsed % 3600) / 60)
  ).padStart(2, '0')
  const secondsStudied = String(secondsElapsed % 60).padStart(2, '0')

  useEffect(() => {
    let intervalId: number
    if (isRunning) {
      intervalId = setInterval(() => {
        console.log(`Invoked ${intervalId}`)

        setSecondsElapsed((prev) => {
          const newValue = prev + 1
          sessionStorage.setItem('secondsElapsed', newValue.toString())
          return newValue
        })
      }, 1000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isRunning])

  

  useEffect(() => {
    studyTimesAPI
      .getStudyTimeForToday()
      .then((res) => setSecondsElapsed(res.studyTime))
      .catch((err: AxiosError) => {
        if (!err?.response) {
          toast.error('No server response.')
        } else if (err.response?.status !== 404) {
          toast.error(`Couldn't fetch study time for today.`)
        }
      })
  }, [])

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
