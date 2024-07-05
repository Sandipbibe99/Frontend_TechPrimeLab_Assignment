import React from 'react'

import LoginCard from './LoginCard';
const Login = () => {
  return (
    <div className="flex gap-5 flex-col justify-center  items-center min-h-screen  bg-[#f3f5f7] sm:bg-[#ffffff]  bg-contain sm:bg-40%Y   bg-no-repeat " style={{backgroundImage: `url('/image/login-bg-1.svg')`  }}>
     
         <img alt='logo' src='/image/Logo.svg' className='mt-16 sm:mt-10 '></img>
         <h5 className='text-white font-extralight mb-5'> Online Project Management</h5>
         <LoginCard />
         
  </div>
  
  )
}

export default Login