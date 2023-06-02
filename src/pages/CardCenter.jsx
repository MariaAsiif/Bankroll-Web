import React from 'react'
import { BsPlus } from 'react-icons/bs'
import cardlogo from '../assests/images/cardLogo.png'
import w_1 from '../assests/images/Wallet.png'
import w_2 from '../assests/images/money-send.png'
import w_3 from '../assests/images/strongbox.png'
import { IoMdArrowDropup } from 'react-icons/io'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CardCenterLeft from '../components/AdminComp/CardCenter/CardCenterLeft'
const CardCenter = () => {
    return (
        <>
            <div className=''>
                {/* Section 1  */}
                <div className='grid border-b pb-4  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='  xl:col-span-2'>
                        <div className='flex  items-center w-full border-b pb-2  '>
                            <h2 className='text-[#7869DD] text-[24px] font-bold '>Card Center</h2>
                            <div className=' w-fit ml-2 rounded-md py-1.5 text-white text-[16px] font-semibold flex items-center px-4  bg-gradient-to-r from-[#4965E0] to-[#896CDD]'>
                                <h2>Add New Card</h2>
                                <BsPlus />
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className='grid grid-cols-3 gap-5'>
                                <div className='border rounded-2xl relative p-5 '>
                                    <div className='flex items-center'>
                                        <img src={w_1} alt="weights" className='object-cover' />
                                        <h2 className='text-[#9C9C9C] text-[12px] font-normal px-3'>Main Balance</h2>
                                    </div>
                                    <div className='pt-5'>
                                        <h2 className='text-[#1A1A1A] text-[21px] font-medium'>$54,20.01</h2>
                                    </div>

                                    <div className='pt-5 flex items-center '>
                                        <div className='flex items-center'>
                                            <IoMdArrowDropup className="text-[#45C218] text-[15px]" />
                                            <p className='text-[#45C218] font-normal text-[10px]'>+2,04%</p>
                                        </div>
                                        <h2 className='text-[#9C9C9C] px-3 text-[10px]'>this month</h2>
                                    </div>
                                    <div className=' w-[6px] absolute -left-[3px] top-16 rounded-md h-[27px] bg-[#7869DD]' />

                                </div>
                                <div className='border rounded-2xl relative p-5 '>
                                    <div className='flex items-center'>
                                        <img src={w_2} alt="weights" className='object-cover' />
                                        <h2 className='text-[#9C9C9C] text-[12px] font-normal px-3'>Wallet Balance</h2>
                                    </div>
                                    <div className='pt-5'>
                                        <h2 className='text-[#1A1A1A] text-[21px] font-medium'>$34,87.21</h2>
                                    </div>

                                    <div className='pt-5 flex items-center '>
                                        <div className='flex items-center'>
                                            <IoMdArrowDropup className="text-[#45C218] text-[15px]" />
                                            <p className='text-[#45C218] font-normal text-[10px]'>+2,04%</p>
                                        </div>
                                        <h2 className='text-[#9C9C9C] px-3 text-[10px]'>this month</h2>
                                    </div>
                                    <div className=' w-[6px] absolute -left-[3px] top-16 rounded-md h-[27px] bg-[#DDC369]' />

                                </div>
                                <div className='border rounded-2xl relative p-5 '>
                                    <div className='flex items-center'>
                                        <img src={w_3} alt="weights" className='object-cover' />
                                        <h2 className='text-[#9C9C9C] text-[12px] font-normal px-3'>Total Savings</h2>
                                    </div>
                                    <div className='pt-5'>
                                        <h2 className='text-[#1A1A1A] text-[21px] font-medium'>$204,41.23</h2>
                                    </div>

                                    <div className='pt-5 flex items-center '>
                                        <div className='flex items-center'>
                                            <IoMdArrowDropup className="text-[#45C218] text-[15px]" />
                                            <p className='text-[#45C218] font-normal text-[10px]'>+2,04%</p>
                                        </div>
                                        <h2 className='text-[#9C9C9C] px-3 text-[10px]'>this month</h2>
                                    </div>
                                    <div className=' w-[6px] absolute -left-[3px] top-16 rounded-md h-[27px] bg-[#45C218]' />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className=''>
                        <div className='bg-card bg-center bg-cover h-[200px]'>
                            <div className='p-5 relative h-full'>
                                <img src={cardlogo} alt="card" className='object-cover' />
                                <div className='absolute bottom-10 left-5'>
                                    <h2 className='text-[14px] text-white font-normal'>Darrell Steward</h2>
                                    <p className='text-[14px] text-white font-normal'>**** **** **** 4512</p>
                                </div>

                                <div className='absolute right-5 bottom-10'>
                                    <h2 className='text-white opacity-[0.5] font-normal
                                    text-[14px]'>01/24</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Section 2  */}
                <div className='grid   xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='  xl:col-span-2'>
                        <CardCenterLeft />
                    </div>
                    <div>
                        <div className='flex justify-between items-center pt-5'>
                            <h2 className='text-[#1A1A1A] font-semibold text-[16px]'>My Goal</h2>
                            <div className='border text-[14px] text-[#6A64E9] px-3 py-2 flex items-center border-[#4965E0] rounded-xl bg-transparent'>
                                <BsPlus />
                                <h2>Add New </h2>
                            </div>
                        </div>

                        <div className='border p-5  mt-5 rounded-lg'>
                            <div className='flex justify-between '>
                                <div>
                                    <h2 className='text-[#1A1A1A] text-[16px] font-semibold'>Yearly Package Plan</h2>
                                    <p className='text-[12px] text-[#9C9C9C] font-normal'>savings on 6 months</p>

                                    <div className='flex justify-between pt-5'>
                                        <div className='w-full'>
                                            <h2 className='text-[12px] text-[#9C9C9C] font-normal'>Target</h2>
                                            <p className='text-[14px] text-[#9C9C9C] font-normal'>$50,000</p>
                                        </div>
                                        <div>
                                            <div className='flex items-center'>
                                                <div className='w-2 h-2 rounded-full bg-[#4965E0]' />
                                                <p className='text-[12px] px-3 text-[#9C9C9C] font-normal'>New</p>
                                            </div>
                                            <h2></h2>
                                            <p className='text-[14px] font-semibold'>$30,000</p>
                                        </div>
                                    </div>
                                </div>

                                <div >
                                    <div className='h-[96px] overflow-hidden w-[56px] bg-[#0066FF] bg-opacity-[0.2]  rounded-t-xl relative'>
                                        <div className='bg-[#4965E0] h-[76px] flex justify-center items-center text-white w-[56px] text-[12px] absolute bottom-0'>
                                            76%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border p-5  mt-5 rounded-lg'>
                            <div className='flex justify-between '>
                                <div>
                                    <h2 className='text-[#1A1A1A] text-[16px] font-semibold'>New Workplace</h2>
                                    <p className='text-[12px] text-[#9C9C9C] font-normal'>savings on 6 months</p>

                                    <div className='flex justify-between pt-5'>
                                        <div className='w-full'>
                                            <h2 className='text-[12px] text-[#9C9C9C] font-normal'>Target</h2>
                                            <p className='text-[14px] text-[#9C9C9C] font-normal'>$50,000</p>
                                        </div>
                                        <div>
                                            <div className='flex items-center'>
                                                <div className='w-2 h-2 rounded-full bg-[#4965E0]' />
                                                <p className='text-[12px] px-3 text-[#9C9C9C] font-normal'>New</p>
                                            </div>
                                            <h2></h2>
                                            <p className='text-[14px] font-semibold'>$30,000</p>
                                        </div>
                                    </div>
                                </div>

                                <div >
                                    <div className='h-[96px] overflow-hidden w-[56px] bg-[#0066FF] bg-opacity-[0.2]  rounded-t-xl relative'>
                                        <div className='bg-[#4965E0] h-[25px] flex justify-center items-center text-white w-[56px] text-[12px] absolute bottom-0'>
                                            25%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h2 className='text-[#1A1A1A] font-medium text-[29px]'>Account Limit</h2>

                            <div className='border p-5  mt-5 rounded-lg'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h2 className='text-[#9C9C9C] text-[14px] font-normal'>Credit Limit</h2>
                                        <p className='text-[#9C9C9C] pt-2 text-[16px]'><span className='text-[#1A1A1A] font-semibold'>$50,000</span>/150,000</p>
                                    </div>
                                    <div>
                                        <CircularProgressbar styles={buildStyles({ pathColor: '#4965E0', textColor: '#4965E0' })} value={60} text={`${60}%`} className='w-[60px] h-[60px]' />
                                    </div>
                                </div>
                            </div>
                            <div className='border p-5  mt-5 rounded-lg'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h2 className='text-[#9C9C9C] text-[14px] font-normal'>Credit Limit</h2>
                                        <p className='text-[#9C9C9C] pt-2 text-[16px]'><span className='text-[#1A1A1A] font-semibold'>$50,000</span>/150,000</p>
                                    </div>
                                    <div>
                                        <CircularProgressbar styles={buildStyles({ pathColor: '#4965E0', textColor: '#4965E0' })} value={60} text={`${60}%`} className=' w-[60px] h-[60px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default CardCenter