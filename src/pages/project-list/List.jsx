import React, { useContext } from 'react'
import { ProjectContext } from '../../context/ProjectContext';

const List = ({ handleStatus }) => {
    const { currentPageData } = useContext(ProjectContext);
    return (
        <div className='p-1 space-y-3'>
            {currentPageData.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
                    <div className="text-gray-900 ">
                        <div className="flex justify-between">
                            <span className="font-semibold text-[14.5]">{item.projectName[0].toUpperCase() + item.projectName.slice(1)}</span>
                            <span className="hidden sm:inline font-semibold text-[14.5px] ml-auto">
                                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>
                        </div>
                        <div className="-mt-3 text-[12.5px]   py-4 whitespace-nowrap text-gray-900 ">
                            {item.startDate} to {item.endDate}
                        </div>
                    </div>
                    <div className="mt-2 text-capitalize text-[12.5px] text-gray-900 ">
                        <div className="flex sm:block text-sm font-medium">
                            <span className="px-1 py-4 whitespace-nowrap text-gray-500  mr-1">Reason :</span> {item.reason}
                        </div>
                        <div className="flex sm:block text-sm font-medium">
                            <span className="px-1 py-4 whitespace-nowrap text-gray-500  mr-1">Type:</span> {item.type}
                        </div>
                        <div className="flex sm:block text-sm font-medium">
                            <span className="px-1 py-4 whitespace-nowrap text-gray-500  mr-1">Division:</span> {item.division}
                        </div>
                        <div className="flex sm:block text-sm font-medium">
                            <span className="px-1 py-4 whitespace-nowrap text-gray-500  mr-1">Category:</span> {item.category}
                        </div>
                        <div className="flex sm:block text-sm font-medium">
                            <span className="px-1 py-4 whitespace-nowrap text-gray-500  mr-1">Priority:</span> {item.priority}
                        </div>
                        <div className="flex sm:block text-sm font-medium">
                            <span className="px-1 py-4 whitespace-nowrap text-gray-500  mr-1">Department:</span> {item.department}
                        </div>
                        <div className="flex sm:block text-sm font-medium">
                            <span className="px-1 py-4 whitespace-nowrap text-gray-500  mr-1">Location:</span> {item.location}
                        </div>
                        <div className="sm:hidden font-bold text-[13px] text-gray-500 ">
                            <span className="px-1 py-4 whitespace-nowrap text-gray-500  mr-1">Status:</span> {item.status}
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-4 space-x-2">
                        <button onClick={() => handleStatus("running", item._id)} type="button" className="text-white sm:w-full bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none font-normal rounded-full text-sm px-4 py-1 text-center">
                            Start
                        </button>
                        <button onClick={() => handleStatus("closed", item._id)} type="button" className="text-[#035fb2] sm:w-full bg-white border border-[#035fb2] hover:bg-blue-50 focus:outline-none font-normal rounded-full text-sm px-4 py-[2px] text-center">
                            Close
                        </button>
                        <button onClick={() => handleStatus("cancelled", item._id)} type="button" className="text-[#035fb2] sm:w-full bg-white border border-[#035fb2] hover:bg-blue-50 focus:outline-none font-normal rounded-full text-sm px-4 py-[2px] text-center">
                            Cancel
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List