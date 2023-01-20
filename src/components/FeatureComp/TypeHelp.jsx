import React from 'react'
import fram1 from '../../assests/images/Frame.png'
import fram2 from '../../assests/images/Frame2.png'
import fram3 from '../../assests/images/Frame3.png'
const TypeHelp = () => {
    return (
        <>
            <div className="mx-20 mt-[6rem]">
                <div className="grid grid-cols-3">
                    <div className=' flex flex-col items-center'>
                        <div className=' px-3 shadow-md w-[40%]'>
                            <img src={fram1} className='w-[300px] h-[150px] object-contain' alt="fram_image" />
                        </div>
                        <div className='pt-8 text-center'>
                            <h2 className='pb-3 text-[#4965E0] text-[18px] font-roboto font-semibold'>Using Bodrum</h2>
                            <p className='text-[#77838F] font-semibold font-roboto leading-[30px] max-w-[300px] tracking-[0.6px]'>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.</p>
                        </div>
                    </div>
                    <div className=' flex flex-col items-center'>
                        <div className=' px-3 shadow-md w-[40%]'>
                            <img src={fram2} className='w-[300px] h-[150px] object-contain' alt="fram_image" />
                        </div>
                        <div className='pt-8 text-center'>
                            <h2 className='pb-3 text-[#4965E0] text-[18px] font-roboto font-semibold'>Account Help</h2>
                            <p className='text-[#77838F] font-semibold font-roboto leading-[30px] max-w-[300px] tracking-[0.6px]'>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.</p>
                        </div>
                    </div>
                    <div className=' flex flex-col items-center'>
                        <div className=' px-3 shadow-md w-[40%]'>
                            <img src={fram3} className='w-[300px] h-[150px] object-contain' alt="fram_image" />
                        </div>
                        <div className='pt-8 text-center'>
                            <h2 className='pb-3 text-[#4965E0] text-[18px] font-roboto font-semibold'>Pricing Help</h2>
                            <p className='text-[#77838F] font-semibold font-roboto leading-[30px] max-w-[300px] tracking-[0.6px]'>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TypeHelp