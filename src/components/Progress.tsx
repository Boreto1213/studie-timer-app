import { FC } from 'react'
import ProgressBar from './ProgressBar'

interface ProgressProps {
  
}

const Progress: FC<ProgressProps> = ({}) => {
  return <div>
        <h3 className='text-xl font-semibold'>Current day progress</h3>
        <div className='grid grid-cols-4'>
          <div className='col-span-1 text-end'>2h</div>
          <div className='col-span-1 text-end'>4h</div>
          <div className='col-span-1 text-end'>6h</div>
          <div className='col-span-1 text-end'>8h</div>
          <ProgressBar />
        </div>
      </div>
}

export default Progress