import React from 'react'
import right from '../../assests/images/mobile.png'
// import reward from '../../assests/images/cup.png'
import f1 from '../../assests/images/01.gif'
import f2 from '../../assests/images/02.gif'
import f3 from '../../assests/images/03.gif'
import f4 from '../../assests/images/04.gif'
import f5 from '../../assests/images/05.gif'
const SayGoodby = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#DBE7FA] to-[#F2F6FD] h-full pb-[7rem] '>
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

                        <button className='rounded-full mt-[3rem] text-white font-roboto px-8 py-3 hover:bg-white  hover:border-[#896CDD] border-2 bg-[#896CDD] hover:text-[#896CDD]'>Get Started</button>


                    </div>
                    <div className='w-full bg-Oval-img bg-no-repeat bg-contain relative'>
                        <img src={right} className='w-[90%]' alt="mobile" />
                        <div className='absolute top-[35%] -left-6'>
                            <img src={f1} className='bg-white w-[90%]' alt="left_gif" />
                        </div>
                        <div className='absolute top-5 left-[13%]'>
                            <img src={f2} className='bg-white w-[90%]' alt="left_gif" />
                        </div>
                        <div className='absolute top-1 right-[20%]'>
                            <img src={f3} className='bg-white w-[90%]' alt="left_gif" />
                        </div>
                        <div className='absolute top-[30%] -right-8'>
                            <img src={f4} className='bg-white w-[90%]' alt="left_gif" />
                        </div>
                        <div className='absolute top-[70%] right-[5%]'>
                            <img src={f5} className='bg-white w-[90%]' alt="left_gif" />
                        </div>
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