import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardCards from '../../components/DashboardCards'
import HighChart from '../../components/HighChart'
import Navbar from '../../components/Navbar'

const Dashboard = () => {

  const [statusData , setStatusData] = useState("")
  const fetchCountAccordingToStatus = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/project/getCountAccordingToStatus", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        credentials: "include"
      });
      const data = await response.json();
      if (response.ok) {
        setStatusData(data.count);
      } else {
        console.log(data.error);
      }

      const response2 = await fetch("http://localhost:4000/api/project/getClosureDelayCount", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        credentials: "include"
      });
      const data2 = await response2.json();
      if (response2.ok) {
        setStatusData(prevStatusData => ({
          ...prevStatusData,
          "Closure Delay": data2.countDelayProjects
        }));
      } else {
        console.log(data2.error);
      }
    } catch (error) {
      console.log("Internal server error" + error);
    }
  };

  useEffect(() => {
    fetchCountAccordingToStatus();
  }, []);


  return (
    <div className='min-h-screen min-w-screen bg-[#e2ecf2]'>
      
      <Navbar />
      <Sidebar />
        <DashboardCards statusData={statusData} />
       
        <HighChart />
       
       
    </div>
  )
}

export default Dashboard