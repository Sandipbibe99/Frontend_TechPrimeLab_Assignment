import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { ProjectContext } from '../../context/ProjectContext';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, categoryData, citiesData, departmentData, divisionData, intialProjectData, priorityData, reasonData, typeData } from '../../Json/Json';

const Addproject = () => {
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


 
  const [projectData, setProjectData] = useState(intialProjectData)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setProjectData((prevProjectData) => ({ ...prevProjectData, [name]: value }))
  }

  const clearInput = () => {
    setProjectData(intialProjectData)
  }
  useEffect(() => {
    clearInput()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${BASE_URL}/api/project/addproject`, {
        body: JSON.stringify(projectData),
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-type": "application/json",
        }
      })
      const data = await response.json()
      if (response.ok) {
        clearInput()
        setSuccess(data.message)
        setTimeout(() => {
          setSuccess("")
        }, 5000);

      } else {
        setError(data.error)
        setTimeout(() => {
          setError("")
        }, 5000);
      }
    }
    catch (error) {
     

    }
  }

  return (

    <div className='min-h-screen min-w-screen bg-[#e2ecf2]'>
      <Navbar />
      <Sidebar />
      <div className='ml-20 sm:ml-0 px-3 mb-10 sm:mb-1 sm:max-h-[72vh] sm:overflow-auto scrollnone'>

        <div className='relative w-[91vw] sm:w-[94.7vw] h-auto , bg-white -mt-7 sm:mt-3 rounded-xl  p-5 pb-32 sm:pb-5 '>
          {success && (
            <div class="p-4 sm:fixed sm:top-3 sm:right-2 mb-4 text-sm flex gap-2 text-green-900 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-600" role="alert">
              <img alt='hi' src='/image/check.png' className='w-5'></img>
              <span class="font-medium ">{success}</span>
            </div>
          )}
          {error && (
            <div class="p-4 mb-4 sm:fixed sm:top-3 sm:right-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">

              <span class="font-medium">{error}</span>
            </div>
          )}
          <div className='flex justify-between'>
            <div className='flex-1'>
              <textarea onChange={handleInputChange} name="projectName" placeholder='Enter Project Theme'
                className={`bg-white border-secondary border rounded-md p-3  sm:py-4  w-[67.5%] sm:w-full text-sm  mb-5 `}
              />
            </div>
            <div className='sm:hidden'>
              <button onClick={handleSubmit} class="text-white sm:w-full  bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-10 py-2.5  text-center  mb-2 ">Save Project</button>
            </div>

          </div>
          <div className='w-[90%] sm:w-[100%]'>
            <div className='flex flex-row sm:flex-col  gap-12 sm:gap-0 mb-6 sm:mb-0'>
              <div className='flex-1'>
                <h6 className={'text-secondary '}>Reason</h6>
                <select type="text" value={projectData.reason} name="reason" onChange={handleInputChange}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                >
                  {reasonData.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className='flex-1'>
                <h6 className={'text-secondary '}>Type</h6>
                <select type="text" name="type" onChange={handleInputChange} value={projectData.type}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                >
                  {typeData.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className='flex-1'>
                <h6 className={'text-secondary '}>Division</h6>
                <select type="text" name="division" onChange={handleInputChange} value={projectData.division}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                >
                  {divisionData.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='flex flex-row sm:flex-col  gap-12 sm:gap-0 mb-6'>
              <div className='flex-1'>
                <h6 className={'text-secondary '}>Category</h6>
                <select type="text" name="category" onChange={handleInputChange} value={projectData.category}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                >
                  {categoryData.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className='flex-1'>
                <h6 className={'text-secondary '}>Priority</h6>
                <select type="text" name="priority" onChange={handleInputChange} value={projectData.priority}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                >
                  {priorityData.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className='flex-1'>
                <h6 className={'text-secondary '}>Department</h6>
                <select type="text" name="department" onChange={handleInputChange} value={projectData.department}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                >
                  {departmentData.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

            </div>

            <div className='flex flex-row sm:flex-col  gap-12 sm:gap-0 mb-0'>
              <div className='flex-1' >
                <h6 className={'text-secondary '}>Start date as per Project Plan</h6>
                <input type="date" name="startDate" value={projectData.startDate} onChange={handleInputChange}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                />
              </div>

              <div className='flex-1'>
                <h6 className={'text-secondary '}>End date as per Project Plan</h6>
                <input type="date" name="endDate" value={projectData.endDate} onChange={handleInputChange}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                />
              </div>

              <div className='flex-1'>
                <h6 className={'text-secondary '}>Location</h6>
                <select type="text" name="location" value={projectData.location} onChange={handleInputChange}
                  className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
                >
                  {citiesData.map(city => (
                    <option value={city.toLocaleLowerCase()}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='flex'>
              <p className='text-secondary ml-auto sm:ml-0'>Status : <span className='font-bold text-[#2d2d2d]'>Registered</span></p>
            </div>
            <div className='sm:visible md:hidden xl:hidden mt-3'>
              <button onClick={handleSubmit} class="text-white sm:w-full  bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-10 py-2.5  text-center  mb-2 ">Save Project</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Addproject