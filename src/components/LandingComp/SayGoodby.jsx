import React from 'react'
import right from '../../assests/images/BankAPP.gif'
import reward from '../../assests/images/cup.png'

const SayGoodby = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#DBE7FA] to-[#F2F6FD] h-full '>
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

                {/* <div className='rounded-tl-xl rounded-tr-xl max-w-[1200px]  m-auto bg-white h-[150px] w-full pt-3'>
                    <div className='flex pt-[3rem] pb-[2rem]  justify-between px-[5rem] border-b'>
                        <div className='flex items-center w-full '>
                            <img src={reward} alt="reword" />
                            <h2 className='px-4 font-bold font-roboto text-[#060C3A] text-[2rem]'>Sign up and Get Reward</h2>
                        </div>
                        <div>
                            <p className='text-[#8C8E9E] text-[20px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia. </p>
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default SayGoodby