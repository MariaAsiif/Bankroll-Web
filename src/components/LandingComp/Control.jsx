import React from 'react'
import control from '../../assests/images/control.png'
import cirle1 from '../../assests/images/circle-03.png'
const Control = () => {
  return (
    <>
      <div className='relative'>
        <div className='bg-control-img bg-cover bg-no-repeat lg:h-[900px] lg:pb-0 pb-4 h-full md:mt-[30rem] lg:mt-[40rem] mt-[55rem]'>
          <div className='flex lg:flex-row md:flex-row flex-col lg:justify-between items-center '>
            <div className='w-full h-full flex justify-center lg:ml-[12rem] md:ml-[5rem] lg:mt-[1rem] mt-[20px]'>
              <img src={control} className='w-full lg:h-[800px] h-[400px]  object-cover ' alt="control" />
            </div>
            <div className='w-full lg:px-[7rem] px-5'>
              <h2 className='text-[#060C3A] lg:pt-7 leading-[50px] font-bold font-roboto lg:text-[50px] text-[20px] w-full'>
                Simple Money Transfer
              </h2>
              <p className='max-w-[400px] leading-[30px] text-[18px] lg:mt-5 mt-2'>
                BankRoll simplify money transfers via seamless integration of
                traditional banking methods and an innovative cryptosystem.
                With just a few clicks, you can securely and efficiently transfer
                money internationally at optimal exchange rates internationally
                without fees. Sorry, low fees.

              </p>

              <button className='rounded-full lg:mt-[3rem] mt-[20px] text-white font-roboto px-8 py-3 hover:bg-transparent  hover:border-[#896CDD] border-[#896CDD] border-2 bg-[#896CDD] hover:text-[#896CDD]'>Get Started</button>


            </div>
          </div>
        </div>
        <div className='absolute -top-3 right-[25%] '>
          <img src={cirle1} className='object-cover animate-move-img w-[45%]' alt="cirlc" />
        </div>
        <div className='absolute bottom-[30%] left-[8%] '>
          <img src={cirle1} className='object-cover animate-move-img w-[60%]' alt="cirlc" />
        </div>
        <div className='absolute bottom-[30%] right-[3%] '>
          <img src={cirle1} className='object-cover animate-move-img-2 w-[60%]' alt="cirlc" />
        </div>
      </div>

    </>
  )
}

export default Control