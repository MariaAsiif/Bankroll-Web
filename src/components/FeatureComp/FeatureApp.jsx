import React from 'react'
import limit from '../../assests/images/limit.png'
import cash from '../../assests/images/cash.png'
import ref from '../../assests/images/ref.png'
import business from '../../assests/images/business.png'
import video from '../../assests/images/video.png'
import doller from '../../assests/images/doller.png'
import ovelImage from '../../assests/images/featurePhone.png'

const FeatureApp = () => {
    return (
        <>

            <h2 className='text-[40px] max-w-[620px] mt-[3rem] font-medium text-[#4965E0]  text-center m-auto uppercase'>Some of the feature
                <span className='text-black px-2'>our App have for you</span>
            </h2>
            <div className='mx-20 mt-[4rem]'>
                <div className="flex items-center">
                    <div className=''>
                        <ul>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[10%] object-cover' src={limit} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className='pl-1  text-[18px] text-[#4965E0]'>Set your own limits</h2>
                                </div>
                                <p className='max-w-[300px] pt-2 text-[14px] pl-[3rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                            <li className='py-5'>
                                <div className='flex items-center'>
                                    <img className='w-[10%] object-cover' src={cash} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className='  px-2 text-[18px] text-[#4965E0]'>Multiple cash</h2>
                                </div>
                                <p className='max-w-[300px] pt-2 text-[14px] pl-[3rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[10%] object-cover' src={ref} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className=' pt-3 pl-1 text-[18px] text-[#4965E0]'>Referrals and Royalties( R &R)</h2>
                                </div>
                                <p className='max-w-[300px] pt-2  text-[14px] pl-[3rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                        </ul>

                    </div>
                    <div className='bg-featureMobile-img bg-contain bg-center bg-no-repeat '>
                        <img src={ovelImage} alt="ovel_image" />
                    </div>
                    <div className='px-2 '>
                        <ul className='m-0 p-0'>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[20%] object-cover' src={business} alt="icon" />
                                    <h2 style={{fontWeight:'700'}} className=' text-[18px] text-[#4965E0]'>Cash ( Personal and Business)</h2>
                                </div>
                                <p className='  pt-2 text-[14px] pl-[3rem] max-w-[300px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                            <li className='py-5'>
                                <div className='flex items-center'>
                                    <img className='w-[10%] object-cover' src={video} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className='px-2 text-[18px] text-[#4965E0]'>Video & Audio Chat</h2>
                                </div>
                                <p className=' pt-2 text-[14px] pl-[3rem] max-w-[300px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[15%] object-cover' src={doller} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className=' text-[18px] text-[#4965E0]'>USDC Payment </h2>
                                </div>
                                <p className=' pt-2 text-[14px] max-w-[300px] pl-[3rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FeatureApp