import React from 'react'
import Tilt from 'react-parallax-tilt'

const Login = () => {
  return (
    <div className='bg-black h-screen w-screen relative overflow-hidden flex justify-center items-center'>
        <div className="h-40-r w-40-r bg-gradient-to-r from-[#5cb270] to-[#f4f269] rounded-full absolute left-2/3 -top-96 transform rotate-160 animate-pulse"></div>
        <div className=' h-35-r w-35-r bg-gradient-to-r from-[#f24389] to-[#f4e784] rounded-full absolute top-96 -left+72 transform rotate-180 animate-pulse'></div>
            <Tilt>
                <div className='container h-96 w-96 bg-white bg-opacity-20 rounded-2xl shadow-5xl relative z-2  backdrop-filter backdrop-blur-sm'>
                    <form className='h-full flex flex-col justify-evenly items-center'>
                        <div className='text-white font-poppins text-3xl font-bold tracking-widest'>Login Here</div>
                        <input type='text' placeholder='username' className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide'></input>
                        <input type='password' placeholder='password' className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide'></input>
                        <input type='submit' className='cursor-pointer font-bold text-white hover:text-gray-900 font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80'></input>
                        <div className=' cursor-pointer font-bold text-xs  hover:text-gray-900 text-gray-400'>Forgot Password?</div>
                    </form>
                </div>
            </Tilt>
    </div>
  )
}

export default Login