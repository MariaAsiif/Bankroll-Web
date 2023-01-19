import React from 'react'
import reward from '../../assests/images/cup.png'
import f1 from '../../assests/images/f1.png'
import f2 from '../../assests/images/f2.png'
import f3 from '../../assests/images/f3.png'
import path from '../../assests/images/Path.png'
import path2 from '../../assests/images/Path2.png'
const GetReward = () => {
    return (
        <>
            <div className=' absolute -bottom-[50px] w-full pb-7'>
                <div className='mx-20 '>
                    <div className='rounded-tl-xl rounded-tr-xl  bg-white h-[150px] w-full pt-3'>
                        <div className='flex pt-[3rem] pb-8  justify-between px-[5rem] border-b shadow-md'>
                            <div className='flex items-center w-full '>
                                <img src={reward} alt="reword" />
                                <h2  className='px-4 font-bold font-roboto text-[#060C3A] text-[2rem]'>Sign up and Get Reward</h2>
                            </div>
                            <div>
                                <p className='text-[#8C8E9E] text-[20px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia. </p>
                            </div>
                        </div>
                        <div className='flex  items-center justify-between text-center mt-[5rem]  px-[8rem]'>
                            <h2 className='text-[22px] font-medium text-[#896CDD] font-roboto'>2-Minute Registration</h2>
                            <h2 className='text-[22px] font-medium text-[#896CDD] font-roboto'>Simple Payments</h2>
                            <h2 className='text-[22px] font-medium text-[#896CDD] font-roboto'>100% Transparency</h2>
                        </div>
                        <div className='flex  items-center text-center   px-[10rem]'>
                            <div className=''>
                                <div className='flex items-center justify-center'>
                                    <img className='mt-6' src={f1} alt="icon_image" />
                                    <img className='mt-1' src={path} alt="icon_image" />
                                </div>

                            </div>
                            <div className=''>

                                <div className='flex items-center justify-center'>
                                    <img className='mt-6' src={f2} alt="icon_image" />
                                    <img className='mt-[6rem]' src={path2} alt="icon_image" />
                                </div>

                            </div>
                            <div className=''>

                                <div className='flex items-center '>
                                    <img className='mt-6' src={f3} alt="icon_image" />
                                </div>

                            </div>
                        </div>
                        <div className='flex  justify-between items-center text-center mt-[3rem]  px-[4rem]'>
                            <h2 className='max-w-[300px] text-[16px] text-[#8C8E9E] font-roboto'>Sign up from your phone with just a selfie, a photo of your CNIC, and some basic information. No paperwork.</h2>
                            <h2 className='max-w-[300px] text-[16px] text-[#8C8E9E] font-roboto'>Sign up from your phone with just a selfie, a photo of your CNIC, and some basic information. No paperwork.</h2>
                            <h2 className='max-w-[300px] text-[16px] text-[#8C8E9E] font-roboto'>Sign up from your phone with just a selfie, a photo of your CNIC, and some basic information. No paperwork.</h2>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GetReward