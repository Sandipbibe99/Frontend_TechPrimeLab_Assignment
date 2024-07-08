import React, {  useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Json/Json'


    const Sidebar = () => {

        const navigate = useNavigate();
      

        const images = useMemo(() => [
            { link: "/dashboard", alt: "Dashboard", src: "/image/Dashboard.svg" , activesrc : "/image/Dashboard-active.svg" },
            { link: "/project-listing", alt: "Project-list", src: "/image/Project-list.svg" , activesrc : "/image/Project-list-active.svg" },
            { link: "/add-project", alt: "Create-project", src: "/image/create-project.svg" , activesrc : "/image/create-project-active.svg" }
        ], []);
        const [activeIndex , setActiveIndex] =  useState(null)
        const location = useLocation();
       

        useEffect(() => {
             const locationIndex = images.findIndex(img =>  img.link === location.pathname)
            setActiveIndex(locationIndex)
        } , [location.pathname , images])

        const handleLogout = async() => {
            try{
                  const response = await fetch(`${BASE_URL}/api/user/logout` , {
                    method: 'POST',
                    headers : {
                        'Content-type' : 'application/json'
                    },
                    credentials: "include"
                })
               await response.json();
                if(response.ok) {
                    navigate('/')
                   }
                else{
                  
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        
         return (
            <div className='fixed top-0 sm:top-auto sm:bottom-0 left-0 w-14 sm:w-full h-screen sm:h-[9vh] bg-white shadow-lg rounded-sm sm:rounded-full' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <div className='flex h-full justify-center sm:justify-evenly items-center flex-col sm:flex-row gap-8 sm:gap-4'>
                {images.map((item, index) => (
                    <div key={index} className='relative flex flex-col items-center'>
                        <Link to={item.link}>
                            <img alt={item.alt} src={index === activeIndex ? item.activesrc : item.src}></img>
                        </Link>
                        {index === 1 && (
                            <div className='w-6 mt-6 sm:hidden bg-[#96a1a9] h-[1px]'></div>
                        )}
                        {index === activeIndex && (
                             <>
                             <div className='hidden sm:block absolute bottom-[-16px]  transform -translate-y-1/2 w-11 h-2 bg-blue-500 rounded-t-full'></div>
                             <div className='block sm:hidden absolute left-[-14px] top-[-6px] transform -translate-x-1/2 w-2 h-10 bg-blue-500 rounded-r-full'></div>
                         </>
                        )}
                    </div>
                ))}
            </div>
            <div className='fixed bottom-5 left-4 sm:top-5 sm:right-4 sm:bottom-auto sm:left-auto'>
                <button onClick={handleLogout}>
                    <img alt='logout' className='cursor-pointer' src='/image/Logout.svg'></img>
                </button>
            </div>
        </div>
        
        )
    }

export default Sidebar