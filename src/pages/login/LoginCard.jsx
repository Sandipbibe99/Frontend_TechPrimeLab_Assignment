import React, { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const LoginCard = () => {

    const [visible, setVisible] = useState(false)

    const handleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <div className="shadow-lg sm:shadow-none w-[410px] sm:mt-24 sm:w-full  px-8 sm:px-2  bg-[#ffffff] sm:bg-transparent  rounded-2xl  mb-20 sm:mb-0">
            <div className="py-8 px-3">
                <h2 className="text-xl  text-center sm:text-left text-gray-900  font-normal mb-8">Login to get started</h2>

                <div className="flex flex-col items-center sm:items-start">
                    <div className="bg-white w-full  p-2  mb-3">
                        <h6 className='text-secondary text-sm'>Email</h6>
                        <input type="email" name="email" className="bg-white border border-secondary rounded p-3 w-full text-sm flex-1" />

                    </div>
                    <div className="bg-white w-full  text-sm p-2 mb-1 relative">
                        <h6 className="text-secondary">Password</h6>
                        <div className="relative">
                            <input
                                type={visible ? "text" : "password"}
                                name="password"
                                className="bg-white border border-secondary rounded p-3 w-full text-sm flex-1 pr-10"
                            />
                            {!visible ? (
                                <IoEyeOutline onClick={handleVisibility} className="text-gray-800 text-2xl m-2 absolute top-0 right-0 mt-3 mr-3 cursor-pointer" />
                            ) : (
                                <IoEyeOffOutline onClick={handleVisibility} className="text-gray-800 text-2xl m-2 absolute top-0 right-0 mt-3 mr-3 cursor-pointer" />
                            )}

                        </div>
                    </div>

                    <div className="flex w-full  px-2 mb-5 justify-between">
                        <label className=" text-xs ml-auto text-blue-700">
                            Forgot Password?
                        </label>
                    </div>
                    <button type="button" class="text-white sm:w-full  bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-20 py-2.5 text-center me-2 mb-2 ">Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginCard