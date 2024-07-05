import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { IoSearchOutline } from "react-icons/io5";
const Projectlist = () => {
  const [searchData, setSearchData] = useState("")
  const handleInputChange = (e) => {
    setSearchData(e.target.value)
  }

  const tableHeaders = [ 'Project Name', 'Reason' , 'Type', 'Division' , 'Category' , 'Priority' , 'Dept.' , 'Location' , 'Status' , '' , '' , ''  ]
  
  const tableData = [
    { projectName: 'Apple MacBook Pro 17', startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' , reason: 'Silver', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'High', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'Dell XPS 15"',  startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' , reason: 'Black', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'Medium', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'HP Spectre x360"',  startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' ,reason: 'Blue', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'Low', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'Lenovo ThinkPad X1 Carbon',  startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' ,reason: 'Black', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'High', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'Asus ZenBook 14"', startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' , reason: 'Gray', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'Medium', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'Microsoft Surface Laptop 4', startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' , reason: 'Silver', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'Low', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'Acer Swift 5"', startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' , reason: 'Gold', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'High', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'Samsung Galaxy Book Pro', startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' , reason: 'Silver', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'Medium', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'Google Pixelbook Go"', startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' , reason: 'Black', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'Low', dept: 'Tech', location: 'USA', status: 'Active' },
    { projectName: 'Razer Blade 15"', startDate: 'Jun-21,2023' , endDate: 'Jul-22,2023' , reason: 'Black', type: 'Laptop', division: 'IT', category: 'Hardware', priority: 'High', dept: 'Tech', location: 'USA', status: 'Active' }
];

  return (
    <div className='w-[100vw] h-[100vh] bg-slate-100'>

      <Navbar />
      <Sidebar />

      <div className='ml-14 sm:ml-0 px-3 mb-10 sm:mb-1 sm:max-h-[72vh] sm:overflow-auto scrollnone'>

        <div className='relative w-[94vw] sm:w-[94.7vw] h-auto , bg-white -mt-10 sm:mt-3 rounded-lg   sm:pb-5 '>
          <div className='flex justify-between items-center mb-4 px-4'>
          <div class="relative h-11 w-[20%] min-w-[200px] cursor-pointer ">

            {!searchData && (
              <IoSearchOutline className="absolute left-2 top-[18px] text-lg text-gray-400 " />
            )}
              <input
                type="text"
                onChange={handleInputChange}
                placeholder="Search"
                className="pl-2  pr-4 peer h-full w-full border-b border-blue-gray-200 bg-transparent border-gray-400 pt-4 pb-1.5 text-base font-normal text-blue-gray-700 outline-none transition-all placeholder:pl-6 placeholder-blue-gray-700 placeholder-opacity-50 focus:border-gray-600 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
              />

           
          </div>
          <div className='flex gap-4 justify-center items-center'>
          <p className='text-secondary'>Sortby: </p>
          <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500  ">
              <option selected>Select sort</option>
      
           </select>
          </div>
          </div>
          
           

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700  bg-[#ebf5ff] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHeaders.map((item , index) => (
                  <React.Fragment key={index}>
                       <th scope="col" class="px-6 py-3">
                             {item}
                        </th>
                 </React.Fragment>
              ))}
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {tableData.map((item, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white ">
                            <span className='font-semibold text-base'>{item.projectName} </span><br></br>
                             {item.startDate} to {item.endDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                            {item.reason}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                            {item.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                            {item.division}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                            {item.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                            {item.priority}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                            {item.dept}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                            {item.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                            {item.status}
                        </td>
                        <td>
                        <button  type="button" class="text-white sm:w-full   bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-4 py-1 text-center  ">
                          Start</button>
                        </td>
                        <td>
                        <button  type="button" 
                         className="text-[#035fb2] sm:w-full bg-white border border-[#035fb2] hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-[#035fb2] font-normal rounded-full text-sm px-4 py-[2px] text-center">
                          Close
                          </button>
                          </td>
                          <td>
                          <button  type="button" 
                         className="text-[#035fb2] sm:w-full bg-white border border-[#035fb2] hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-[#035fb2] font-normal rounded-full text-sm px-4 py-[2px] text-center">
                          Cancel
                          </button>
                          
                        </td>
                    </tr>
                ))}
            </tbody>
        {/* <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody> */}
    </table>
</div>
 

        </div>

      </div>

    



    </div>
  )
}

export default Projectlist