import React from 'react'
import right from '../../assests/images/BankAPP.gif'
const SayGoodby = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#DBE7FA] to-[#F2F6FD] h-full pb-5'>
                <div className='flex  mx-20 pt-[2rem]'>
                    <div className='w-full px-3'>
                        <h2 className='text-[#060C3A] pt-7 font-medium font-roboto text-[60px] w-full'>
                            Say goodbye to
                            <br />
                            <span className='text-[#4965E0]'>long hold time.</span>
                        </h2>
                        <p className='max-w-[400px] leading-[30px] text-[18px] mt-5'>
                            Sign up now for your free Mastercard debit card
                            and digital wallet. Spend, send and withdraw cash
                            without fees.

                        </p>

                        <button className='rounded-full mt-[3rem] text-white font-roboto px-8 py-3 bg-gradient-to-r from-[#4965E0] to-[#896CDD]'>Get Started</button>


                    </div>
                    <div className='w-full bg-gradient-to-r from-[#DBE7FA] to-[#F2F6FD]'>
                        <img src={right} className='w-full h-[99%] ' alt='right_img' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SayGoodby