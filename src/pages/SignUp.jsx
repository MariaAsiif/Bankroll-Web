import React, { useEffect, useState } from 'react'
import loginImg from '../assests/images/login.png'
import loginImg2 from '../assests/images/login2.png'
import circle1 from '../assests/images/circle1.png'
// import circle2 from '../assests/images/cirlce2.png'
import logo from '../assests/images/Logo.png'
import facebook from '../assests/images/FA.png'
import google from '../assests/images/GOG.png'
import apple from '../assests/images/Fit.png'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { LoadingSpinner } from '../utils/LoaderSpinner'
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
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
          <img src={loginImg} alt={loginImg} className='object-cover h-full first_img' />
          <div className='relative'>
            <img src={loginImg2} alt={loginImg2} className='object-cover second_img' />
            <img src={circle1} alt="topleft" className='object-cover absolute bottom-0 right-0  ' />
            <img src={circle1} alt="topleft" className='object-cover absolute top-0 rotate-180 ' />
          </div>

          <div className='absolute z-30 left-0 right-0 top-[20%] login_box max-w-lg  m-auto '>
            <div className='border shadow-md bg-white rounded-md xl:px-14 md:px-14 px-6 py-5'>
              <div className='flex justify-center items-center pt-2'>
                <img src={logo} alt="topleft" className='object-cover' />
              </div>
              <div className='pt-5'>
                <input type="text" className='border rounded-md h-[45px] px-3 focus:outline-none w-full placeholder:text-[#C2C2C2]  ' placeholder='UserName' />
                <input type="email" className='border rounded-md h-[45px] px-3 mt-4 focus:outline-none w-full placeholder:text-[#C2C2C2]  ' placeholder='Email' />
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

                <div className='pt-4'>
                  <button onClick={() => setLoading(true)} className='bg-gradient-to-r text-[16px] font-normal from-[#4965E0] to-[#896CDD] text-white rounded-md w-fit px-10 py-2.5'>Sign Up</button>
                </div>

                <div className='pt-4 flex items-center justify-center'>
                  <img src={google} alt="topleft" className='object-contain w-[12.5%]' />
                  <img src={facebook} alt="topleft" className='object-contain w-[12%] mx-4' />
                  <img src={apple} alt="topleft" className='object-contain w-[12%]' />
                </div>

                <div className='pt-5 flex justify-center items-center'>
                  <Link to="/login" className='text-[16px] text-[#B5BBC2] font-normal'>Don have Account? <span className='text-[#7869DD] '>Sign In!</span></Link>
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

export default SignUp