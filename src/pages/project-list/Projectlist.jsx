import React, { useContext, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { IoSearchOutline } from "react-icons/io5";
import Pagination from '../../components/Pagignation';
import { ProjectContext } from '../../context/ProjectContext';
import { RxCross2 } from "react-icons/rx";
import List from './List';
import { PiListMagnifyingGlassLight } from "react-icons/pi";
import Drawer from '../../components/Drawer';

const Projectlist = () => {
    const {
      
        getProjectData,
        currentPage,
        currentPageData,
        handleNextPage,
        handlePreviousPage,
        handlePageClick,
        handleFirstPage,
        handleLastPage,
        totalPages,
        searchInput,
        handleSelectChange,
        handleInutChange,
        handleClearInput,
        handleClearSelect , 
        handleOpenDrawer ,
         drawer
    } = useContext(ProjectContext);

   
   

    const tableHeaders = ['Project Name', 'Reason', 'Type', 'Division', 'Category', 'Priority', 'Dept.', 'Location', 'Status', '', '', '']


   const sortSelectArray = [
        {name: "Project name" , value : 'projectName'},
        {name: "Reason" , value : 'reason'},
        {name: "Type" , value : 'type'},
        {name: "Division" , value : 'division'},
        {name: "Category " , value : 'category'},
        {name: "Priority" , value : 'priority'},
        {name: "Department" , value : 'department'},
        {name: "Location" , value : 'location'},
        {name: "Status" , value : 'status'},

   ]


    const handleStatus = async (status, projectId) => {
        try {
            const response = await fetch(`https://sandip-tech-prime-lab.netlify.app/api/project/updatestatus?_id=${projectId}&status=${status}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'

                },
                credentials: "include"
            });

            const data = await response.json();
            if (response.ok) {
                getProjectData()
                console.log(data.message)
            } else {
                console.log(data.error)
            }
        } catch (error) {
            console.error('Error updating status:', error);

        }

    };

    useEffect(() => {
        getProjectData(); 
        handleClearInput();
        handleClearSelect();
      }, [])

     
 

    return (
        <div className='w-[100vw] h-[100vh] bg-[#e2ecf2] '>

            <Navbar />
            <Sidebar />

            <div className='ml-14 sm:ml-0 px-3 mb-10 sm:mb-1 sm:max-h-[72vh] sm:overflow-auto scrollnone'>

                <div className='relative w-[94vw] sm:w-[94.7vw] h-auto , bg-white sm:bg-transparent -mt-10 sm:mt-3 rounded-lg   sm:pb-5 '>
                    <div className='flex justify-between items-center mb-4 px-4'>
                        <div class="relative h-11 w-[20%] min-w-[200px] sm:min-w-[90%] cursor-pointer ">

                            {!searchInput && (
                                <IoSearchOutline className="absolute left-2 top-[18px] text-lg text-gray-400 " />
                            )}
                            <input
                                type="text"
                                onChange={handleInutChange}
                                name='searchInput'
                                value={searchInput}
                                placeholder="Search"
                                className="pl-2  pr-4 peer h-full w-full border-b border-blue-gray-200 bg-transparent border-gray-400 pt-4 pb-1.5 text-base font-normal text-blue-gray-700 outline-none transition-all placeholder:pl-6 placeholder-blue-gray-700 placeholder-opacity-50 focus:border-gray-600 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            {searchInput && (
                                <RxCross2 onClick={handleClearInput} className="absolute left-[90%] top-[18px] text-lg text-gray-800 " />
                            )}

                        </div>
                        <div className='hidden sm:block'  >
                            <PiListMagnifyingGlassLight onClick={handleOpenDrawer} className='text-3xl mt-2 text-gray-600' />
                        </div>
                         {drawer &&  <Drawer />  }
                        <div className='flex sm:hidden gap-4 justify-center items-center'>
                            <p className='text-secondary'>Sortby: </p>
                            <select onChange={handleSelectChange}  id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500  ">
                                {sortSelectArray.map(item => (
                                    <React.Fragment>
                                    <option value={item.value}>{item.name}</option>
                                    </React.Fragment>
                                ))}
                             </select>
                        </div>
                    </div>



                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs sm:hidden text-gray-700  bg-[#ebf5ff] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {tableHeaders.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <th scope="col" class="px-2 py-3 text-[13.5px]">
                                                {item}
                                            </th>
                                        </React.Fragment>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white sm:hidden divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 ">
                                {currentPageData.map((item, index) => (
                                    <tr key={index} className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-3 text-[12.5px]   py-4 whitespace-nowrap text-gray-900 dark:text-white ">
                                            <span className='font-semibold text-[14.5px]'>{item.projectName} </span><br></br>
                                            {item.startDate} to {item.endDate}
                                        </td>
                                        <td className="px-1 text-[12.5px]  py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                            {item.reason}
                                        </td>
                                        <td className="px-1 text-[12.5px]  py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                            {item.type}
                                        </td>
                                        <td className="px-1 text-[12.5px]  py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                            {item.division}
                                        </td>
                                        <td className="px-1 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                            {item.category}
                                        </td>
                                        <td className="px-1 text-[12.5px]  py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                            {item.priority}
                                        </td>
                                        <td className="px-1 text-[12.5px]  py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                            {item.department}
                                        </td>
                                        <td className="px-1 text-[12.5px]  py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                            {item.location}
                                        </td>
                                        <td className="px-1 text-[13px] font-bold  py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                            {item.status}
                                        </td>
                                        <td className="px-1 text-[12.5px]  py-4 whitespace-nowrap ">
                                            <button onClick={() => handleStatus("running", item._id)} type="button" class="text-white sm:w-full   bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none   font-normal rounded-full text-sm px-4 py-1 text-center  ">
                                                Start</button>
                                        </td>
                                        <td className="px-1 py-4 whitespace-nowrap ">
                                            <button onClick={() => handleStatus("closed", item._id)} type="button"
                                                className="text-[#035fb2] sm:w-full bg-white border border-[#035fb2] hover:bg-blue-50 focus:outline-none   font-normal rounded-full text-sm px-4 py-[2px] text-center">
                                                Close
                                            </button>
                                        </td>
                                        <td className="px-1 py-4 whitespace-nowrap ">
                                            <button onClick={() => handleStatus("cancelled", item._id)} type="button"
                                                className="text-[#035fb2] sm:w-full bg-white border border-[#035fb2] hover:bg-blue-50 focus:outline-none   font-normal rounded-full text-sm px-4 py-[2px] text-center">
                                                Cancel
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                 


                </div>

                <div class="relative overflow-x-auto sm:block xl:hidden md:hidden">
                        <List handleStatus={handleStatus}/>
                        </div>
               
            </div>


            <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageClick={handlePageClick}
                    handleNextPage={handleNextPage}
                    handleFirstPage={handleFirstPage}
                    handleLastPage={handleLastPage}
                    handlePreviousPage={handlePreviousPage}
                />


        </div>
    )
}

export default Projectlist