import React from 'react'
import right from '../../assests/images/right3.png'
const SayGoodby = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#DBE7FA] to-[#F2F6FD] h-full'>
                <div className='flex  justify-between mx-20 pt-[2rem]'>
                    <div className='w-full'>
                        <h2 className='text-[#060C3A] pt-7 font-medium font-roboto text-[60px] w-full'>
                            Say goodbye to
                            <br/>
                            <span className='text-[#4965E0]'>long hold time.</span>
                        </h2>
                    </div>
                    <div className='w-full bg-transparent'>
                        <img src={right} className='w-full ' alt='right_img'/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SayGoodby