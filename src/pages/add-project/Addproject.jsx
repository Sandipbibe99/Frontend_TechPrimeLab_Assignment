import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';



const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat',
  'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna',
  'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad'
];







const Addproject = () => {



  const data = {
    projectName : 'business',
    reason : 'business',
    type: 'internal',
    division: 'filters',
    category : 'quality a',
    priority : 'high',
    department : 'stategy',
    startDate : '',
    endDate : '',
    location : 'pune',
    status : 'registered',
    // userId : ''

}
const [projectData , setProjectData] = useState(data)
const [error , setError] = useState("")
const [success , setSuccess] = useState("")



const handleInputChange = (event) => {
       
     const {name , value} = event.target
    setProjectData((prevProjectData) => ({...prevProjectData , [name] : value}))

}

const clearInput = () => {{
  setProjectData(data)
}}
useEffect(() => {
  clearInput()
} , [])


const handleSubmit = async(e) => {
      e.preventDefault()
    
      // const id =  Cookies.get('id');
     

    // const newData = {
    //   ...projectData ,  userId: id
    // }

      try{
        const response = await fetch("https://sandip-tech-prime-lab.netlify.app/api/project/addproject" , {
            body : JSON.stringify(projectData),
            method : 'POST',
            credentials: 'include',
            headers : {
                "Content-type" : "application/json",
            }
         })
         const data = await response.json()
         if(response.ok) {
          
             clearInput()
             setSuccess(data.message)
             setTimeout(() => {
              setSuccess("")
            }, 5000);
           
          }else{
       
          setError(data.error)
          setTimeout(() => {
            setError("")
          }, 5000);
          }
      }
      catch(error) {
        console.log(error)
      
      }
    
    
       
}




  return (

    <div className='min-h-screen min-w-screen bg-[#e2ecf2]'>
       <Navbar />
       <Sidebar />
       <div className='ml-20 sm:ml-0 px-3 mb-10 sm:mb-1 sm:max-h-[72vh] sm:overflow-auto scrollnone'>
       
       <div className='relative w-[91vw] sm:w-[94.7vw] h-auto , bg-white -mt-7 sm:mt-3 rounded-xl  p-5 pb-32 sm:pb-5 '>
       {success && (
         <div class="p-4 mb-4 text-sm flex gap-2 text-green-900 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-600" role="alert">
           <img src='/image/check.png' className='w-5'></img>
         <span class="font-medium ">{success}</span>
       </div>
      ) }
      {error && (
           <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          
           <span class="font-medium">{error}</span>
         </div>
      ) }
         <div className='flex justify-between'>
           <div className='flex-1'>
             <textarea onChange={handleInputChange} name="projectName"  placeholder='Enter Project Theme'
               className={`bg-white border-secondary border rounded-md p-3  sm:py-4  w-[67.5%] sm:w-full text-sm  mb-5 `}
             />
           </div>
           <div className='sm:hidden'>
             <button onClick={handleSubmit}  class="text-white sm:w-full  bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-10 py-2.5  text-center  mb-2 ">Save Project</button>
           </div>
 
         </div>
 
 
         <div className='w-[90%] sm:w-[100%]'>
 
 
 
           <div className='flex flex-row sm:flex-col  gap-12 sm:gap-0 mb-6 sm:mb-0'>
             <div className='flex-1'>
               <h6 className={'text-secondary '}>Reason</h6>
               <select type="text" value={projectData.reason} name="reason" onChange={handleInputChange}
                 className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
               >
                 <option value='business'>For Business</option>
                 <option value='personal'>For Personal</option>
                 <option value='dealership'>For Dealership</option>
                 <option value='transport'>For Transport</option>
               </select>
             </div>
 
             <div className='flex-1'>
               <h6 className={'text-secondary '}>Type</h6>
               <select type="text" name="type" onChange={handleInputChange} value={projectData.type}
                 className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
               >
                 <option value='internal'>Internal</option>
                 <option value='external'>External</option>
                 <option value='vendor'>Vendor</option>
 
               </select>
             </div>
 
             <div className='flex-1'>
               <h6 className={'text-secondary '}>Division</h6>
               <select type="text" name="division" onChange={handleInputChange} value={projectData.division}
                 className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
               >
                 <option value='filters'>Filters</option>
                 <option value='pumps'>Pumps</option>
                 <option value='compressor'>Compressor</option>
               </select>
             </div>
           </div>
 
           <div className='flex flex-row sm:flex-col  gap-12 sm:gap-0 mb-6'>
             <div className='flex-1'>
               <h6 className={'text-secondary '}>Category</h6>
               <select type="text" name="category" onChange={handleInputChange} value={projectData.category}
                 className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
               >
                 <option value='quality a'>Quality A</option>
                 <option value='quality b'>Quality B</option>
                 <option value='quality c'>Quality C</option>
               </select>
             </div>
 
             <div className='flex-1'>
               <h6 className={'text-secondary '}>Priority</h6>
               <select type="text" name="priority" onChange={handleInputChange} value={projectData.priority}
                 className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
               >
                 <option value='high'>High</option>
                 <option value='medium'>Medium</option>
                 <option value='low'>Low</option>
               </select>
             </div>
 
             <div className='flex-1'>
               <h6 className={'text-secondary '}>Department</h6>
               <select type="text" name="department"  onChange={handleInputChange} value={projectData.department}
                 className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
               > 
                 <option value='strategy'>Strategy</option>
                 <option value='finance'>Finance</option>
                 <option value='quality'>Quality</option>
                 <option value='maintainance'>Maintainance</option>
                 <option value='stores'>Stores</option>
                 <option value='hr'>HR</option>
               </select>
             </div>
 
           </div>
 
           <div className='flex flex-row sm:flex-col  gap-12 sm:gap-0 mb-0'>
             <div className='flex-1' >
               <h6 className={'text-secondary '}>Start date as per Project Plan</h6>
               <input type="date" name="startDate" value={projectData.startDate}  onChange={handleInputChange}
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
               <select type="text" name="location" value={projectData.location}  onChange={handleInputChange}
                 className={`bg-white border-secondary border rounded p-3  sm:py-4  w-full text-sm flex-1 pr-10 mb-5 `}
               >
                 {cities.map(city => (
                   <option value={city.toLocaleLowerCase()}>{city}</option>
                 ))}
               </select>
             </div>
           </div>
           <div className='flex'>
             <p  className='text-secondary ml-auto sm:ml-0'>Status : <span className='font-bold text-[#2d2d2d]'>Registered</span></p>
           </div>
           <div className='sm:visible md:hidden xl:hidden mt-3'>
             <button onClick={handleSubmit}  class="text-white sm:w-full  bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-10 py-2.5  text-center  mb-2 ">Save Project</button>
           </div>
         </div>
        
       </div>

       
 
     </div>
    </div>
 
  )
}

export default Addproject