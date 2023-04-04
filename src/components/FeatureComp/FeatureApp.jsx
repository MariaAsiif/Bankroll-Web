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

            <h2 className='lg:text-[40px] md:text-[40px] text1820px] px-4 max-w-[620px] mt-[3rem] font-medium text-[#4965E0]  text-center m-auto uppercase'>Some of the feature
                <span className='text-black px-2'>our App have for you</span>
            </h2>
            <div className='lg:mx-20 mx-5 lg:mb-4 mb-[3rem] lg:mt-0 mt-[3rem] '>
                <div className="lg:flex  items-center">
                    <div className=''>
                        <ul>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[15%] object-cover' src={limit} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className='lg:pl-1 px-3   text-[18px] text-[#4965E0]'>Set Your Limits</h2>
                                </div>
                                <p className='lg:max-w-[300px]  pt-2 text-[14px] lg:pl-[2rem] '>Tired of being unable to send or receive the money you want?
                                    With our app, you’re in the driver’s seat. Don’t mind the steering
                                    wheel. We’re not actually going anywhere. Verify your identity
                                    and set your own daily, weekly and monthly limits. Manage your
                                    finances like a boss. Accountants are less inspiring.</p>
                            </li>
                            <li className='py-[3rem]'>
                                <div className='flex items-center'>
                                    <img className='w-[15%] object-cover' src={cash} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className='  lg:px-2 px-3 text-[18px] text-[#4965E0]'>Multiple Coin</h2>
                                </div>
                                <p className='lg:max-w-[300px]  pt-2 text-[14px] lg:pl-[2rem] '>Enjoy having all of the money in the world at your finger tips. Fiat
                                    and cryptocurrency in one place.</p>
                            </li>
                            <li className='lg:pl-5'>
                                <div className='flex items-center '>
                                    <img className='w-[15%] object-cover' src={ref} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>Referrals and Royalties( R &R)</h2>
                                </div>
                                <p className='lg:max-w-[300px]  pt-2  text-[14px] lg:pl-[2rem] '>Who doesn’t love a reward? Honestly, we cannot think of a single
                                    person. Earn extra coin simply by inviting friends, family-
                                    complete strangers, to use BankRoll.  And receive royalties on the
                                    Back End for as long as they use the app.</p>
                            </li>
                        </ul>

                    </div>
                    <div className='bg-featureMobile-img bg-contain bg-center bg-no-repeat '>
                        <img src={ovelImage} alt="ovel_image" />
                    </div>
                    <div className=''>
                        <ul className=''>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[20%]  object-contain lg:-ml-0   -ml-3' src={business} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className=' text-[18px] text-[#4965E0]'>Multiple Rolls</h2>
                                </div>
                                <p className='  pt-2 text-[14px] lg:pl-[2.5rem]   lg:max-w-[300px]'>Where is the fun in only having one handle? With BankRoll you
                                    can create as many “Rolls” as you like under one account. Be
                                    yourself or wear a mask. Just don't go all willy-nilly on us</p>
                            </li>
                            <li className='py-[3rem]'>
                                <div className='flex items-center '>
                                    <img className='w-[15%] object-contain  md:ml-3 ' src={video} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className='pl-2 md:px-4 text-[18px] text-[#4965E0]'>Video & Audio Chat</h2>
                                </div>
                                <p className='pt-2 text-[14px] lg:pl-[2.5rem]   lg:max-w-[300px]'>SUP is a dope way to stay connected to the people you send
                                    money to and receive money from. With video and voice( text
                                    included) in the mix, you are more likely to get it right and less
                                    likely to be scammed. Transact hassle-free knowing who is on the
                                    other end. No catfish allowed.
                                  </p>
                            </li>
                            <li>
                                <div className='flex items-center'>
                                    <img className='w-[20%]  object-cover lg:-ml-0 md:ml-0 -ml-2' src={doller} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className=' text-[18px] text-[#4965E0]'>USDC Payment </h2>
                                </div>
                                <p className=' pt-2 text-[14px] lg:max-w-[300px]  lg:pl-[2.5rem] '> Skeptical about the stability of crypto? The United States Dollar
                                    equivalent stable coin United States Dollar Coin is safe, reliable,
                                    easily transferable. And very patriotic.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FeatureApp