import React, { useEffect, useRef, useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleVisibility = () => {
        setVisible(!visible)
    }
    const loginCredentials = {
        email: '',
        password: '',
    }
    const [loginData, setLoginData] = useState(loginCredentials)
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setLoginData((prevLoginData) => ({ ...prevLoginData, [name]: value }))
        if (name === 'email') {
            setEmailError('');
        } else if (name === 'password') {
            setPasswordError('');
        }
    }
    const handleLogin = async (event) => {
        let formIsValid = true;
        if (!loginData.email) {
            setEmailError('Please fill the email.');
            formIsValid = false;
        }
        if (!loginData.password) {
            setPasswordError('Please fill the password.');
            formIsValid = false;
        }
        if (!formIsValid) {
            return;
        }
        try {
            const response = await fetch("http://localhost:4000/api/user/login", {
                body: JSON.stringify(loginData),
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                credentials: 'include',
            })
            const data = await response.json()
            if (response.ok) {
                navigate('/dashboard');
            } else {
                if (response.status === 400) {
                    console.log("ok")
                }
                setErrorMessage(data.error)
                setTimeout(() => {
                    setErrorMessage('')
                }, 4000);
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    const errorMessageRef = useRef(null)
    useEffect(() => {
        if (errorMessage && errorMessageRef.current) {
            errorMessageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [errorMessage])
    return (
        <div className='flex flex-col gap-4 items-center w-full '>
            <div className="shadow-lg sm:shadow-none w-[410px] sm:mt-24 sm:w-full  px-8 sm:px-2  bg-[#ffffff] sm:bg-transparent  rounded-2xl  mb-1 sm:mb-0">
                <div className="py-8 px-3">
                    <h2 className="text-xl   text-center sm:text-left text-gray-900  font-normal mb-8">Login to get started</h2>

                    <div className="flex flex-col items-center sm:items-start">
                        <div className="bg-white w-full  p-2  mb-3">
                            <h6 className={emailError ? 'text-red-600' : 'text-secondary'}>Email</h6>
                            <input type="email" onChange={handleInputChange} name="email"
                                className={`bg-white ${emailError ? 'border-red-700 shadow-red-900' : 'border-secondary'} border rounded p-3 w-full text-sm flex-1 pr-10 `}
                            />
                            {emailError && <span className="text-red-600 text-xs mt-1">{emailError}</span>}
                        </div>
                        <div className="bg-white w-full  text-sm p-2 mb-1 relative">
                            <h6 className={passwordError ? 'text-red-600' : 'text-secondary'}>Password</h6>
                            <div className="relative">
                                <input
                                    type={visible ? "text" : "password"}
                                    onChange={handleInputChange}
                                    name="password"
                                    className={`bg-white ${passwordError ? 'border-red-700' : 'border-secondary'} border rounded p-3 w-full text-sm flex-1 pr-10 `}
                                />
                                {!visible ? (
                                    <IoEyeOutline onClick={handleVisibility} className="text-gray-800 text-2xl m-2 absolute top-0 right-0 mt-3 mr-3 cursor-pointer" />
                                ) : (
                                    <IoEyeOffOutline onClick={handleVisibility} className="text-gray-800 text-2xl m-2 absolute top-0 right-0 mt-3 mr-3 cursor-pointer" />
                                )}

                            </div>
                            {passwordError && <span className="text-red-600 text-xs mt-1">{passwordError}</span>}
                        </div>

                        <div className="flex w-full  px-2 mb-5 justify-between">
                            <label className=" text-xs ml-auto text-blue-700">
                                Forgot Password?
                            </label>
                        </div>
                        <button onClick={handleLogin} type="button" class="text-white sm:w-full  mt-4 bg-[#035fb2] hover:bg-[#0360b2f1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-20 py-2.5 text-center me-2 mb-2 ">Login</button>
                    </div>
                </div>
            </div>
            <p ref={errorMessageRef} className='text-red-600 mb-20'>{errorMessage}</p>
        </div>
    )
}
export default LoginCard