import React from 'react'
import logo2 from '../../assests/images/Logo_2.png'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
const Footer = () => {
  const location = useLocation().pathname

  return (
    <>
      <div className={` border border-white relative ${location === "/" && 'lg:mt-[10rem]'} mt-4`}>
        <div className='bg-gradient-to-r mt-[5rem]  from-[#DBE7FA] to-[#F2F6FD] lg:h-[380px] h-full '>
          <div className='lg:mx-20 mx-6'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2   grid-cols-1  pt-[10rem] pb-3'>
              <div>
                <img src={logo2} alt="logo2" />
                <p className='leading-6 mt-3 text-[14px] text-[#8C8E9E]'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className='pt-6 lg:pl-[5rem] w-full'>
                <h2 className='
              font-semibold  text-[16px] text-[#060C3A] 
               '>Offices</h2>
                <p className=' leading-6 mt-3 text-[14px] text-[#8C8E9E] '>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className='pt-6 lg:pl-[7rem]'>
                <h2 className='
              font-semibold  text-[16px] text-[#060C3A] 
               '>Links</h2>
                <ul className='  text-[#8C8E9E]'>
                  <li className='pt-2'>Contact Us</li>
                  <li className='pt-2'>FAQ</li>
                  <li className='pt-2'>Privacy</li>
                  <li className='pt-2'>Terms & Conditions</li>
                </ul>

              </div>
              <div className='pt-6 lg:pl-[5rem]'>
                <h2 className='
              font-semibold  text-[16px] text-[#060C3A] 
               '>Follow Us</h2>
                <ul className=' flex  text-[#8C8E9E]'>
                  <li className='pt-2'>
                    <BsInstagram className='text-[28px]' />
                  </li>
                  <li className='pt-2 mx-2'>
                    <AiFillFacebook className='text-[28px]' />
                  </li>
                  <li className='pt-2 '>
                    <BsYoutube className='text-[28px]' />
                  </li>
                  <li className='pt-2 mx-2'>
                    <AiFillLinkedin className='text-[28px]' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=' lg:mx-20 mx-5 md:w-[95%]  lg:w-[86%] w-[90%] absolute top-0 '>
          <div className=' bg-white shadow-2xl border border-gray-50 rounded-[40px] p-8 pt-[4rem] h-[200px]' >
            <div className='flex lg:justify-between md:justify-between lg:flex-row  md:flex-row flex-col lg:px-7 px-0 items-center'>
                <h2 className='text-[#060C3A] lg:text-[40px] text-[20px]'>
                Ready to join?
                <span className='text-[#896CDD] font-bold px-2 '>Signup today</span>
              </h2>
              <button className='rounded-full lg:my-0 my-2 w-full lg:w-auto md:w-auto text-white font-roboto px-8 py-3 hover:bg-white  hover:border-[#896CDD] border-[#896CDD] border-2 bg-[#896CDD] hover:text-[#896CDD]'>SignUp now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer