import React, { useEffect, useState } from 'react'
import loginImg from '../assests/images/login.png'
import loginImg2 from '../assests/images/login2.png'
import circle1 from '../assests/images/circle1.png'
import circle2 from '../assests/images/cirlce2.png'
import logo from '../assests/images/Logo.png'
import facebook from '../assests/images/FA.png'
import google from '../assests/images/GOG.png'
import apple from '../assests/images/Fit.png'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { LoadingSpinner } from '../utils/LoaderSpinner'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false)
        navigate('/dashboard')
      }, 2000);
    }
  }, [loading])
  return (
    <>
      <div className='relative'>
        <div className="relative">
          <img src={loginImg} alt={loginImg} className='object-cover object-center h-full' />
          <div className='relative'>
            <img src={loginImg2} alt={loginImg2} className='object-cover h-screen object-center' />
            <img src={circle1} alt="topleft" className='object-cover absolute bottom-0 right-0  ' />
            <img src={circle2} alt="topleft" className='object-cover absolute top-0 border ' />
          </div>

          <div className='absolute z-30 left-0 right-0 top-[20%] max-w-lg  m-auto '>
            <div className='border shadow-md bg-white rounded-md px-14 py-5'>
              <div className='flex justify-center items-center pt-2'>
                <img src={logo} alt="topleft" className='object-cover' />
              </div>
              <div className='pt-5'>
                <input type="text" className='border rounded-md h-[45px] px-3 focus:outline-none w-full placeholder:text-[#C2C2C2]  ' placeholder='UserName' />
                <div className='flex mt-4 justify-between items-center border rounded-md h-[45px]'>
                  <input type={showPass ? 'text' : 'password'} className=' px-3 focus:outline-none w-full placeholder:text-[#C2C2C2]' placeholder='Password' />
                  <div className='mx-2 '>
                    {showPass ?
                      <BsEye onClick={() => setShowPass(false)} className='text-[20px] text-[#C2C2C2] cursor-pointer' />
                      :
                      <BsEyeSlash onClick={() => setShowPass(true)} className='text-[20px] text-[#C2C2C2] cursor-pointer' />
                    }
                  </div>

                </div>
                <div className='pt-3 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input type="checkbox" className='w-[20px] h-[17px]' />
                    <h2 className='text-[#C2C2C2] text-[14px] mx-1 font-normal'>Keep me loged in</h2>
                  </div>
                  <div>
                    <h2 className='text-[#7869DD] font-normal text-[16px]'>Forgot Password</h2>
                  </div>
                </div>

                <div className='pt-4'>
                  <button onClick={() => setLoading(true)} className='bg-gradient-to-r text-[16px] font-normal from-[#4965E0] to-[#896CDD] text-white rounded-md w-fit px-10 py-2.5'>Login</button>
                </div>

                <div className='pt-4 flex items-center justify-center'>
                  <img src={google} alt="topleft" className='object-contain w-[12.5%]' />
                  <img src={facebook} alt="topleft" className='object-contain w-[12%] mx-4' />
                  <img src={apple} alt="topleft" className='object-contain w-[12%]' />
                </div>

                <div className='pt-5 flex justify-center items-center'>
                  <h2 className='text-[16px] text-[#B5BBC2] font-normal'>Don't have Account? <span className='text-[#7869DD] '>Create Account!</span></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          loading &&
          <div className='absolute z-50 top-0 bg-black bg-opacity-[0.5] w-full h-full'>
            <div className='flex justify-center items-center pt-[20rem]'>
              <LoadingSpinner />
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Login