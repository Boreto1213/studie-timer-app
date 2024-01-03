import { FC } from 'react'

interface TopBarProps {
  
}

const TopBar: FC<TopBarProps> = ({}) => {
  const date = new Date()
  
  return  <div className='flex justify-between items-center'>
  <span className='text-5xl font-bold'>Today</span>
  <div className='flex flex-col items-center rounded-md p-2 border-[1px] border-gray-300 shadow-sm'>
    <span className='h-[30px] text-3xl text-red-500 font-semibold'>
      {date.getDate()}
    </span>
    <span className='text-lg font-semibold'>{`${
      date.getMonth() + 1
    }/${date.getFullYear()}`}</span>
  </div>
</div>
}

export default TopBar