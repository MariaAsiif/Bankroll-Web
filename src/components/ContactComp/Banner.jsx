import React from 'react'
import cotactus from '../../assests/images/19948-contact-us.png'
const Banner = () => {
    return (
        <>
            <div className=' lg:px-20 px-5 mb-[4rem] lg:pt-[5rem] md:pt-[2rem] pt-[4rem]'>
                <div className=' flex xl:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center'>
                    <div>
                        <h2 className='xl:text-[75px] md:text-[50px] text-[40px] font-medium max-w-[600px] font-intr'>Got A Question?
                            <span className='text-[#4965E0]'>Let's Talk!</span></h2>
                            <p className='xl:text-[16px] md:text-[16px] text-[14px] text-[#262B40] font-normal'>Contact us to learn more or request a demo.</p>
                    </div>
                    <div>
                        <img src={cotactus} alt={cotactus} className='object-cover xl:w-full w-full'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner