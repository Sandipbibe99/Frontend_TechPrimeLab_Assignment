import React, { useContext } from 'react'
import { ProjectContext } from '../context/ProjectContext'

const Drawer = () => {
    const {handleDrawerSelect } = useContext(ProjectContext)
  return (
 
 
    <div id="drawer-bottom-example" class="hidden sm:block fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none" tabindex="-1" aria-labelledby="drawer-bottom-label">
     <h5 id="drawer-bottom-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Sort Project By</h5>
     <p className='py-3 text-gray-500' data-value="priority" onClick={handleDrawerSelect}>Priority</p>
    <p className='py-3 text-gray-500' data-value="category" onClick={handleDrawerSelect}>Category</p>
    <p className='py-3 text-gray-500' data-value="department" onClick={handleDrawerSelect}>Department</p>
    <p className='py-3 text-gray-500' data-value="status" onClick={handleDrawerSelect}>Status</p>
    <p className='py-3 text-gray-500' data-value="location" onClick={handleDrawerSelect}>Location</p>
 </div>
  )
}

export default Drawer