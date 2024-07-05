import React from 'react'

const Navbar = () => {
  return (
    <div className="relative top-0 ml-14 sm:ml-0">
    <img alt="nav-image" src="/image/Header-bg.svg" className="w-full sm:w-full sm:h-20 object-cover rounded-bl-3xl " />
    <img alt="logo" src="/image/Logo.svg" className="absolute sm:hidden top-6 md:top-3 sm:top-2 sm:w-12 ml-[50%] md:w-16 xl:w-18"/>
    <h1 className="text-white text-2xl font-normal absolute top-9 md:top-7 sm:top-4 sm:text-xl ml-10">Dashboard</h1>
</div>

  )
}

export default Navbar