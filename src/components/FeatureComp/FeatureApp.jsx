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

            <h2 className='lg:text-[40px] md:text-[40px] text-[20px] px-4 max-w-[620px] mt-[3rem] font-medium text-[#4965E0]  text-center m-auto uppercase'>Some of the feature
                <span className='text-black px-2'>our App have for you</span>
            </h2>
            <div className='lg:mx-20 mx-5 mt-[4rem]'>
                <div className="lg:flex  items-center">
                    <div className=''>
                        <ul>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[10%] object-cover' src={limit} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className='lg:pl-1 px-3   text-[18px] text-[#4965E0]'>Set your own limits</h2>
                                </div>
                                <p className='lg:max-w-[300px]  pt-2 text-[14px] pl-[3rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                            <li className='py-5'>
                                <div className='flex items-center'>
                                    <img className='w-[10%] object-cover' src={cash} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className='  lg:px-2 px-3 text-[18px] text-[#4965E0]'>Multiple cash</h2>
                                </div>
                                <p className='lg:max-w-[300px]  pt-2 text-[14px] pl-[3rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[10%] object-cover' src={ref} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>Referrals and Royalties( R &R)</h2>
                                </div>
                                <p className='lg:max-w-[300px]  pt-2  text-[14px] pl-[3rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                        </ul>

                    </div>
                    <div className='bg-featureMobile-img bg-contain bg-center bg-no-repeat '>
                        <img src={ovelImage} alt="ovel_image" />
                    </div>
                    <div className='lg:px-2 w-full '>
                        <ul className=''>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[15%]  object-cover lg:-ml-0   -ml-3' src={business} alt="icon" />
                                    <h2 style={{fontWeight:'700'}} className=' text-[18px] text-[#4965E0]'>Cash ( Personal and Business)</h2>
                                </div>
                                <p className='  pt-2 text-[14px] pl-[3rem] md:pl-[6rem] lg:max-w-[300px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                            <li className='py-5'>
                                <div className='flex items-center '>
                                    <img className='w-[10%] object-cover md:w-[8%] md:ml-3 ' src={video} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className='px-2 md:px-4 text-[18px] text-[#4965E0]'>Video & Audio Chat</h2>
                                </div>
                                <p className='pt-2 text-[14px] pl-[3rem] md:pl-[6rem] lg:max-w-[300px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[15%] md:w-[11%] object-cover lg:-ml-0 md:ml-0 -ml-2' src={doller} alt="icon" />
                                     <h2 style={{fontWeight:'700'}} className=' text-[18px] text-[#4965E0]'>USDC Payment </h2>
                                </div>
                                <p className=' pt-2 text-[14px] lg:max-w-[300px] md:pl-[5.5rem] pl-[3rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FeatureApp