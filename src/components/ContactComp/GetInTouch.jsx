import React from 'react'
import c_1 from '../../assests/images/125910-bkk-user.png'
import c_2 from '../../assests/images/85620-contact.png'
import c_3 from '../../assests/images/call 1.png'
const GetInTouch = () => {
    return (
        <>
            <div className='lg:px-20 mx-5 mb-[4rem]'>
                <div className='grid xl:grid-cols-3 md:grid-cols-3 gap-5'>
                    <div className='border border-gray-100 shadow-md rounded-md p-5'>
                        <div className='flex justify-center flex-col  items-center'>
                            <div className='bg-gradient-to-r from-[#4965E0] to-[#896CDD] flex justify-center items-center w-[116px] h-[116px] rounded-full'>
                                <img src={c_1} alt={"contact_img"} className="object-cover" />
                            </div>
                            <div className='pt-5 text-center'>
                                <h2 className='text-[#262B40] xl:text-[30px] md:text-[25px] text-[20px] font-medium'>Have an Account?</h2>
                                <p className='text-center max-w-[200px] m-auto py-3'>Please log in if you need account-specific support.</p>
                                <button className='bg-gradient-to-r from-[#4965E0] to-[#896CDD] mt-3 py-2 text-white rounded-3xl text-[15px] w-full'>Log In </button>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-100 shadow-md rounded-md p-5'>
                        <div className='flex justify-center flex-col   items-center'>
                            <div className='bg-gradient-to-r from-[#4965E0] to-[#896CDD] flex justify-center items-center w-[116px] h-[116px] rounded-full'>
                                <img src={c_2} alt={"contact_img"} className="object-cover" />
                            </div>
                            <div className='pt-5 text-center'>
                                <h2 className='text-[#262B40] xl:text-[30px] md:text-[25px] text-[20px] font-medium'>Get in Touch</h2>
                                <p className='text-center max-w-[200px] m-auto py-3'>PSend us questions, comments,
                                    or a poem.</p>
                                <button className='bg-gradient-to-r from-[#4965E0] to-[#896CDD] mt-3 py-2 text-white rounded-3xl text-[15px] w-full'>Contact Us </button>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-100 shadow-md rounded-md p-5'>
                        <div className='flex justify-center flex-col  items-center'>
                            <div className='bg-gradient-to-r from-[#4965E0] to-[#896CDD] flex justify-center items-center w-[116px] h-[116px] rounded-full'>
                                <img src={c_3} alt={"contact_img"} className="object-cover" />
                            </div>
                            <div className='pt-5 text-center'>
                                <h2 className='text-[#262B40] xl:text-[30px] md:text-[25px] text-[20px] font-medium'>Help Center</h2>
                                <p className='text-center max-w-[200px] m-auto py-3'>Advice and answers from the
                                    Winden Team</p>
                                <button className='bg-gradient-to-r from-[#4965E0] to-[#896CDD] mt-3 py-2 text-white rounded-3xl text-[15px] w-full'>Help Center </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default GetInTouch