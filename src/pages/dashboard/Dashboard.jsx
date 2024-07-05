import React from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardCards from '../../components/DashboardCards'
import HighChart from '../../components/HighChart'
import Navbar from '../../components/Navbar'

const Dashboard = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-slate-100'>
      
      <Navbar />
      <Sidebar />
        <DashboardCards />
       
        <HighChart />
       
       
    </div>
  )
}

export default Dashboard