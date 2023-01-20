import React from 'react'
import transfer from '../../assests/images/Mockup.png'
import social from '../../assests/images/social.png'

const Transfer = () => {
    return (
        <>
            <div>
                <div className='bg-transfer-img bg-contain bg-no-repeat h-[900px] '>
                    <div className='flex justify-between items-center mx-20'>
                        <div className='w-full px-3'>
                            <h2 className='text-[#060C3A] pt-7 leading-[50px] font-bold font-roboto text-[40px] w-full'>
                                Accept international transfers
                                from 45 countries around the world
                            </h2>
                            <p className='max-w-[400px] leading-[30px] text-[18px] mt-5'>
                                Sign up now for your free Mastercard debit card
                                and digital wallet. Spend, send and withdraw cash
                                without fees.

                            </p>

                            <button className='rounded-full mt-[2rem] text-white font-roboto px-8 py-3 hover:bg-white  hover:border-[#896CDD] border-[#896CDD] border-2 bg-[#896CDD] hover:text-[#896CDD]'>Download</button>


                        </div>
                        <div className='w-full h-full'>
                            <img src={transfer}  className='w-full h-[730px] object-cover' alt="control" />

                        </div>
                    </div>
                    <div className='mx-[8rem] mt-8'>
                        <img src={social} alt="social" />

                    </div>
                </div>

            </div>

        </>
    )
}

export default Transfer