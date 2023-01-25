import React from 'react'
import transfer from '../../assests/images/Mockup.png'
import social from '../../assests/images/social.png'

const Transfer = () => {
    return (
        <>
            <div>
                <div className='bg-transfer-img lg:bg-contain md:bg-contain bg-cover bg-no-repeat lg:h-[900px]  h-full '>
                    <div className='flex lg:flex-row  md:flex-row flex-col lg:justify-between items-center lg:mx-20 mx-5'>
                        <div className='w-full px-3 lg:order-0 md:order-0 order-1'>
                            <h2 className='text-[#060C3A] pt-7 lg:leading-[50px] font-bold font-roboto text-[20px] lg:text-[40px] w-full'>
                                Accept international transfers
                                from 45 countries around the world
                            </h2>
                            <p className='max-w-[400px] leading-[30px] text-[18px] mt-5'>
                                Sign up now for your free Mastercard debit card
                                and digital wallet. Spend, send and withdraw cash
                                without fees.

                            </p>

                            <button className='rounded-full mt-[2rem] text-white font-roboto px-8 py-3 hover:bg-transparent  hover:border-[#896CDD] border-[#896CDD] border-2 bg-[#896CDD] hover:text-[#896CDD]'>Download</button>


                        </div>
                        <div className='w-full h-full lg:order-1 md:order-1 order-0 '>
                            <img src={transfer}  className='w-full lg:h-[730px] h-[400px] object-cover' alt="control" />

                        </div>
                    </div>
                    <div className='lg:mx-[8rem] md:mx-[4rem] mt-8'>
                        <img src={social} alt="social" />

                    </div>
                </div>

            </div>

        </>
    )
}

export default Transfer