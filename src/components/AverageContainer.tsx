import { FC } from 'react'

interface AverageContainerProps {
  
}

const AverageContainer: FC<AverageContainerProps> = ({}) => {
  const studiedAverage = 60 * 60 * 5 + 11 * 60
  const hoursStudiedAvg = Math.floor(studiedAverage / 3600)
  const minutesStudiedAvg = (studiedAverage % 3600) / 60
  return <div>
  <div className='flex justify-between text-xl font-semibold mb-2'>
    <span>Average for:</span>
    <span>December 2023</span>
  </div>
  <div className='text-3xl font-medium text-center mb-3'>
    {hoursStudiedAvg} hours {minutesStudiedAvg} minutes
  </div>
  <div className='text-center text-gray-400'>
    {hoursStudiedAvg >= 8 ? 'Real G. Keep pushing!' : 
    hoursStudiedAvg > 8 && hoursStudiedAvg >= 6 ? 'You can do it, you can do more bro...' : 
    hoursStudiedAvg < 6 && hoursStudiedAvg >= 4 ? 'You wanna be average?' :
    hoursStudiedAvg < 4 && hoursStudiedAvg >= 2 ? 
    `You a fucking bitch bro, can't even look at you.` : `Might as well kill yourself, you can't be more useless.` }
  </div>
</div>
}

export default AverageContainer