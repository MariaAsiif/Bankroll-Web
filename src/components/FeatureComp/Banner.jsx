import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='bg-feature-img lg:bg-cover bg-contain lg:bg-no-repeat lg:h-[430px] md:h-[300px] h-[200px]'>
                <div className='text-center lg:pt-[12rem] md:pt-[10rem] pt-[7rem]'>
                    <h2 className='lg:text-[38px] md:text-[30px] text-[20px] text-white font-roboto font-medium uppercase'>Features</h2>
                </div>
            </div>
        </>
    )
}

export default Banner