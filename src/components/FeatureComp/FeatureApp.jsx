import React from 'react'
import limit from '../../assests/images/limit.png'
import cash from '../../assests/images/cash.png'
import ref from '../../assests/images/ref.png'
import business from '../../assests/images/Group 57.png'
import video from '../../assests/images/video.png'
import doller from '../../assests/images/doller.png'
import budges from '../../assests/images/Vector (26).png'
import sub from '../../assests/images/Vector (27).png'
import peer from '../../assests/images/Vector (28).png'
import app from '../../assests/images/Vector (29).png'
import bankroll from '../../assests/images/Vector (30).png'
import stash from '../../assests/images/Vector (31).png'
import bankcards from '../../assests/images/Vector (33).png'
import chat from '../../assests/images/Vector (32).png'
import ovelImage from '../../assests/images/featurePhone.png'
import ss from '../../assests/images/sss.png'
const FeatureApp = () => {

    // let features = [{ heading:'Badges Of Honor' , pic:budges , desc:'A good reputation is better than being rich. Maybe. Become a verified BankRoller and receive your first profile badge. Level up by doing good business and conducting yourself like you are supposed to within the app. Other users will take notice and feel safer dealing with you.' }]
    return (
        <>

            <h2 className='lg:text-[43px] md:text-[40px] text-[20px] px-4  mt-[3.5rem] font-medium text-[#4965E0]  text-center m-auto uppercase'>Some of the feature
                <span className='text-black px-2'>our App have for you</span>
            </h2>
            <p className='text-[#000000] text-[16px] max-w-[850px] mx-auto text-center'>We take securing the bag to another level. Our decentralized
                banking app offers a double wide range of features that are
                designed to help BankRollers run it up.</p>
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
                                <div className='flex items-center '>
                                    <img className='w-[15%] object-contain  md:ml-3 ' src={video} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className='pl-2 md:px-4 text-[18px] text-[#4965E0]'>Video & Audio Chat</h2>
                                </div>
                                <p className='pt-2 text-[14px] lg:pl-[2rem]   lg:max-w-[300px]'>SUP is a dope way to stay connected to the people you send
                                    money to and receive money from. With video and voice( text
                                    included) in the mix, you are more likely to get it right and less
                                    likely to be scammed. Transact hassle-free knowing who is on the
                                    other end. No catfish allowed.
                                </p>
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
                                    <img className='w-[10%] object-contain  md:ml-3  ' src={business} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className=' pl-2 text-[18px] text-[#4965E0]'>Multiple Rolls</h2>
                                </div>
                                <div className='flex items-start '>
                                    <img className=' object-contain mt-2' src={ss} alt="icon" />
                                    <p className='  pt-2 text-[14px] pl-3  lg:max-w-[300px]'>Where is the fun in only having one handle? With BankRoll you
                                        can create as many “Rolls” as you like under one account. Be
                                        yourself or wear a mask. Just don't go all willy-nilly on us</p>

                                </div>
                            </li>
                            {/*  */}
                            <li className='py-[5rem]'>
                                <div className='flex items-center'>
                                    <img className='w-[15%] object-cover' src={cash} alt="icon" />
                                    <h2 style={{ fontWeight: '700' }} className='  lg:px-2 px-3 text-[18px] text-[#4965E0]'>Multiple Coin</h2>
                                </div>


                                <p className='lg:max-w-[300px]  pt-2 text-[14px] lg:pl-[2rem] '>Enjoy having all of the money in the world at your finger tips. Fiat
                                    and cryptocurrency in one place.</p>

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
                <div className="grid lg:grid-cols-3  pt-3">
                    <div className="flex flex-col justify-center items-start lg:pb-0 lg:pt-0 md:pb-0 md:pt-0 pb-20 pt-20 ">
                        <div className='flex items-center '>
                            <img className='lg:w-[15%] md:w-[20%] object-cover' src={budges} alt="icon" />
                            <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>Badges Of Honor</h2>
                        </div>
                        <p className='lg:max-w-[300px]  pt-2  text-[14px] lg:pl-[2rem] '>A good reputation is better than being rich. Maybe. Become a verified BankRoller and receive your first profile badge. Level up by doing good business and conducting yourself like you are supposed to within the app. Other users will take notice and feel safer dealing with you.</p>
                    </div>
                    <div className=" lg:pb-0pb-20 ">
                        <div className='flex items-center '>
                            <img className='w-[10%] object-cover' src={sub} alt="icon" />
                            <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>Sub Life</h2>
                        </div>
                        <p className='lg:max-w-[300px]  pt-2  text-[14px] lg:pl-[2rem] '>Subscription payments keep life interesting. Setup recurring payments for the things you can't live without. Hulu. Netflix. Only Fans. A dozen or so maxed out credit cards.</p>
                    </div>
                    <div className="flex lg:pb-0pb-20 justify-end items-end ">
                        <div className=" ">
                            <div className='flex items-center '>
                                <img className='w-[10%] object-cover' src={peer} alt="icon" />
                                <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>Peer To Peer</h2>
                            </div>
                            <p className='lg:max-w-[300px]  pt-2  text-[14px] lg:pl-[2rem] '>What do you do when someone asks for a loan? If you can't change your phone number then you can always use our Front feature. Front allows BankRollers to create smart contracts detailing the terms and interest rates they are most comfortable with. Our app makes it worth the risk if you can afford it.</p>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3  pt-3">
                    <div className="flex flex-col justify-center items-start lg:pb-0pb-20 ">
                        <div className='flex items-center '>
                            <img className='w-[15%] object-cover' src={app} alt="icon" />
                            <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>App To App</h2>
                        </div>
                        <p className='lg:max-w-[300px]  pt-2  text-[14px] lg:pl-[2rem] '>BankRoll is just one of many of hundreds of Fintech apps out there. It can be hard to settle on just one. So we decided to allow app to app payments so our users can send or receive their coin regardless of whether the other party is a BankRoller or not. The epicenter of online transactions and mobile payments and being the center of attention is the same thing.</p>
                    </div>
                    <div className="lg:pb-0pb-20 ">
                        <div className='flex items-center '>
                            <img className='w-[10%] object-cover' src={bankroll} alt="icon" />
                            <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>BankRoll Community</h2>
                        </div>
                        <p className='pt-2  text-[14px] lg:pl-[2rem] '>Pull up on a financial coach to get your mind right, money right. Tap in to receive updates on the latest investment opportunities. Zone out with like minded BankRollers.</p>
                    </div>
                    <div className="lg:pb-0pb-20">
                        <div className="lg:pl-20 md:pl-20 ">
                            <div className='flex items-center '>
                                <img className='w-[8%] object-cover' src={stash} alt="icon" />
                                <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>Stash</h2>
                            </div>
                            <p className='lg:max-w-[300px] pt-2 text-[14px] lg:pl-[2rem] '>Stash savings in a safe place that is FDIC insured. Participate in BankRoll community investment opportunities and earn interest on your coin.</p>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3  pt-3">
                    <div className="flex flex-col justify-center items-start lg:pb-0pb-20 ">
                        <div className='flex items-center justify-start self-start '>
                            <img className='w-[15%] object-cover' src={bankcards} alt="icon" />
                            <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>BankRoll Cards</h2>
                        </div>
                        <p className='lg:max-w-[300px]  pt-2  text-[14px] lg:pl-[2rem] '>Instantly create virtual cards and set them up to manage various expenses.
                            Exclusive/Premium users will be introduced to our bronze metal cards.</p>
                    </div>
                    <div className=" lg:pb-0pb-20">
                        <div className='flex items-center '>
                            <img className='w-[10%] object-cover' src={chat} alt="icon" />
                            <h2 style={{ fontWeight: '700' }} className=' pt-3 lg:pl-1 px-3 text-[18px] text-[#4965E0]'>Chat Support</h2>
                        </div>
                        <p className='lg:max-w-[300px]  pt-2  text-[14px] lg:pl-[2rem] '>Reach out to us anytime for help with anything related to your BankRoll account.</p>
                    </div>
                    <div className="flex flex-col justify-center items-end ">

                    </div>
                </div>
            </div>

        </>
    )
}

export default FeatureApp