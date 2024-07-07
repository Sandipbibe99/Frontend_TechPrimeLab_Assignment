import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
const Navbar = () => {
  const location = useLocation();

  const pageTitles = {
    '/dashboard': 'Dashboard',
    '/add-project': 'Add Project',
    '/project-listing' : 'Project List'
  };

  const currentPageTitle = pageTitles[location.pathname]
  
  return (
    <div className="relative top-0 ml-14 sm:ml-0">
    <img alt="nav-image" src="/image/Header-bg.svg" className="w-full sm:w-full sm:h-20 object-cover rounded-bl-3xl " />
    <img alt="logo" src="/image/Logo.svg" className="absolute sm:hidden top-6 md:top-3 sm:top-2 sm:w-12 ml-[50%] md:w-16 xl:w-18"/>
    <div className="flex items-center text-white text-2xl font-normal absolute top-10 md:top-7 sm:top-4 sm:text-xl ml-10">
        {currentPageTitle !== "Dashboard" && (
          <Link to={"/dashboard"}>
          <IoIosArrowBack className="text-white text-2xl mr-2" />
          </Link>
        )}
        <h1 className="text-white text-2xl font-normal sm:text-xl">{currentPageTitle}</h1>
      </div>
</div>

  )
}
export default Navbar