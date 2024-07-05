import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const images = [
        { link: "/dashboard", alt: "Dashboard", src: "/image/Dashboard.svg" , activesrc : "/image/Dashboard-active.svg" },
        { link: "/project-listing", alt: "Project-list", src: "/image/Project-list.svg" , activesrc : "/image/Project-list-active.svg" },
        { link: "/add-project", alt: "Create-project", src: "/image/create-project.svg" , activesrc : "/image/create-project-active.svg" }
    ]
    const [activeIndex , setActiveIndex] =  useState(null)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        const locationIndex = images.findIndex(img =>  img.link === location.pathname)
        setActiveIndex(locationIndex)
    } , [location.pathname])

    const handleLogout = async() => {
        console.log("first")
        try{
            
             const response = await fetch("http://192.168.0.106:4000/api/user/logout" , {
                method: 'POST',
                headers : {
                    'Content-type' : 'application/json'
                }
             })
             const data = await response.json();

             if(response.ok) {
                navigate('/')
                console.log(data.Message)
             }
             else{
                console.log(data.error)
             }
        }
        catch (error) {
            console.log(error)
        }
    }
    

    return (
           <div className='fixed top-0 sm:top-auto sm:bottom-0 left-0 w-14 sm:w-full h-screen sm:h-[10vh] bg-white shadow-lg rounded-sm xl:rounded-full py-5 '>          
             <div className='flex h-full justify-center sm:justify-evenly items-center flex-col sm:flex-row gap-8 sm:gap-4'>
                {images.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link to={item.link} >
                        <img alt={item.alt} src={index === activeIndex ? item.activesrc  : item.src }></img>
                        </Link>
                        {index === 1 && (
                            <div className='w-6 sm:hidden bg-[#96a1a9] h-[1px]'></div>
                         ) }
                    </React.Fragment>
                ))}

            </div>
            <div className='fixed bottom-5 left-4 sm:top-5 sm:right-4 sm:bottom-auto sm:left-auto'>
              <button onClick={handleLogout}> <img  alt='logout' className='cursor-pointer' src='/image/Logout.svg'></img></button> 
            </div>
        </div>
    )
}

export default Sidebar