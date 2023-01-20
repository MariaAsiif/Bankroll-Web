import React from 'react'
import control from '../../assests/images/control.png'
const Control = () => {
  return (
    <>

      <div className='bg-control-img bg-cover bg-no-repeat h-[900px] mt-[30rem]'>
        <div className='flex justify-between items-center '>
          <div className='w-full h-full flex justify-center ml-[12rem] mt-[1rem]'>
            <img src={control} className='w-full h-[800px]  object-cover' alt="control" />
          </div>
          <div className='w-full px-[7rem]'>
            <h2 className='text-[#060C3A] pt-7 leading-[50px] font-bold font-roboto text-[50px] w-full'>
              Complete control of your money
            </h2>
            <p className='max-w-[400px] leading-[30px] text-[18px] mt-5'>
              Sign up now for your free Mastercard debit card
              and digital wallet. Spend, send and withdraw cash
              without fees.

            </p>

            <button className='rounded-full mt-[3rem] text-white font-roboto px-8 py-3 hover:bg-white  hover:border-[#896CDD] border-[#896CDD] border-2 bg-[#896CDD] hover:text-[#896CDD]'>Get Started</button>


          </div>
        </div>
      </div>

    </>
  )
}

export default Control