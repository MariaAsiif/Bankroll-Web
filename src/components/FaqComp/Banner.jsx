import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Banner = () => {
    return (
        <>
            <div className='bg-faq-img bg-cover h-[430px]'>
                <div className='text-center pt-[8.5rem]'>
                    <h2 className='lg:text-[38px] text-[25px] text-white font-roboto font-medium'>How can we help?</h2>
                    <div className='max-w-[500px] md:m-auto lg:m-auto mx-3'>
                        <div className=' bg-white flex items-center  h-[45px] rounded-md mt-[2rem]'>
                            <input type="text" placeholder='Ask a question' className='focus:outline-none w-full h-full placeholder:text-[14px] placeholder:font-roboto rounded-md placeholder:font-normal px-3 ' />
                            <div className='border mr-1 bg-gradient-to-l rounded-md to-[#4965E0] from-[#896CDD] p-[10px]'>
                                <BsSearch className='text-white font-bold' />
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center mt-6'>
                            <h2 className=' text-white px-2 text-[17px]'>Populer help topics:</h2>
                            <ul className='flex items-center'>
                                <li className='underline text-white px-2 text-[17px]'>Account,</li>
                                <li className='underline text-white px-2 text-[17px]'>Pricing,</li>
                                <li className='underline text-white px-2 text-[17px]'>Payment,</li>
                                <li className='underline text-white px-2 text-[17px]'>Update</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Banner