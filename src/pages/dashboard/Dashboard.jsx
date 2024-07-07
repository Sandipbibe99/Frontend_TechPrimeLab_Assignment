import React, { useCallback, useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardCards from '../../components/DashboardCards'
import HighChart from '../../components/HighChart'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectContext'

const Dashboard = () => {
  const { isUserAuthenticate } = useContext(ProjectContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await isUserAuthenticate();
      if (!isAuthenticated) {
        navigate('/');
      }
    };
    checkAuth();
  }, [isUserAuthenticate, navigate]);

  const [statusData, setStatusData] = useState("")
  const fetchCountAccordingToStatus = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/project/getCountAccordingToStatus`, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        credentials: "include"
      });
      const data = await response.json();
      if (response.ok) {
        setStatusData(data.count);
      }
      else {
        console.log(data.error);
      }
    } catch (error) {
      console.log("Internal server error" + error);
    }
  }, []);

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