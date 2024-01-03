import { FC } from 'react'
import SideBar from './SideBar'
import Dashboard from './Dashboard'

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({}) => {
  

  return (
    <div className='grid grid-cols-10 h-screen'>
      <SideBar />
      <Dashboard />
    </div>
  )
}

export default Layout
