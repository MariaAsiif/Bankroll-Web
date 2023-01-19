import React from 'react'
import logo2 from '../../assests/images/Logo_2.png'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <>
      <div className=' border border-white relative mt-[12rem]'>
        <div className='bg-gradient-to-r mt-[5rem]  from-[#DBE7FA] to-[#F2F6FD] h-[380px] '>
          <div className='mx-20'>
            <div className='grid grid-cols-4 gap-10 pt-[10rem]'>
              <div>
                <img src={logo2} alt="logo2" />
                <p className='leading-6 mt-3 text-[14px] text-[#8C8E9E]'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className='pt-6'>
                <h2 className='
              font-semibold  text-[16px] text-[#060C3A] 
               '>Offices</h2>
                <p className=' leading-6 mt-3 text-[14px] text-[#8C8E9E] '>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className='pt-6'>
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
              <div className='pt-6'>
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
        <div className=' mx-20 w-[86%] absolute top-0'>
          <div className=' bg-white shadow-md border border-gray-50 rounded-[40px] p-8 pt-[4rem] h-[200px]'>
            <div className='flex justify-between px-7 items-center'>
                <h2 className='text-[#060C3A] text-[40px]'>
                Ready to join?
                <span className='text-[#896CDD] font-bold px-2'>Signup today</span>
              </h2>
              <button className='rounded-full text-white font-roboto px-8 py-3 bg-gradient-to-r from-[#4965E0] to-[#896CDD]'>SignUp now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer