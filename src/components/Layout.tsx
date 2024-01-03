import { FC, useState } from 'react'
import SideBar from './SideBar'

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({}) => {
  const date = new Date()
  const [secondsElapsed, setSecondsElapsed] = useState<number>(60 * 60 * 2 + 55 * 60 + 32)
  const hoursStudied = Math.floor(secondsElapsed / 3600)
  const minutesStudied = Math.floor((secondsElapsed % 3600) / 60)
  const secondsStudied = secondsElapsed % 60

  return (
    <div className='grid grid-cols-10 h-screen'>
      <SideBar />
      <div className='col-span-7 h-screen px-4 py-6'>
        <div className='flex justify-between items-center'>
          <span className='text-5xl font-bold'>Today</span>
          <div className='flex flex-col items-center rounded-md p-2 border-[1px] border-gray-300 shadow-sm'>
            <span className='h-[30px] text-3xl text-red-500 font-semibold'>{date.getDate()}</span>
            <span className='text-lg font-semibold'>{`${date.getMonth() + 1}/${date.getFullYear()}`}</span>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-gray-400 text-lg font-semibold'>Time studied:</span>
          <div className='flex justify-center items-center text-9xl font-bold'>
            <span>{hoursStudied}</span>:<span>{minutesStudied}</span>:<span>{secondsStudied}</span>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Layout
