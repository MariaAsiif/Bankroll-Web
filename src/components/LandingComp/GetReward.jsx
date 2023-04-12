import React from 'react'
import reward from '../../assests/images/cup.png'
import f1 from '../../assests/images/f1.png'
import f2 from '../../assests/images/f2.png'
import f3 from '../../assests/images/f3.png'
import path from '../../assests/images/Path.png'
import path2 from '../../assests/images/Path2.png'
const GetReward = () => {
    return (
        <>
            <div className=' absolute lg:-bottom-[80px] md:bottom-[40px] w-full  pb-7'>
                <div className='lg:mx-20 mx-5 '>
                    <div className='rounded-tl-2xl rounded-tr-2xl  bg-white h-[150px] w-full pt-3'>
                        <div className='flex lg:flex-row md:flex-row flex-col lg:pb-[4rem] md:pb-[3rem] pb-2 pt-[1rem]  lg:justify-between lg:px-[5rem] px-[1rem] border-b shadow-md'>
                            <div className='flex items-center w-full '>
                                <img src={reward} className='lg:w-auto w-[10%]' alt="reword" />
                                <h2 className='lg:px-4 px-2 font-bold font-roboto  text-[#060C3A] text-[20px] lg:text-[2rem]'>Sign Up And Get Your Roll On</h2>
                            </div>
                            <div>
                                <p className='text-[#8C8E9E] lg:text-[20px] text-[16px] lg:pt-0 pt-4'>Spend, send and receive funds with low fees. </p>
                            </div>
                        </div>

                        <div className='flex lg:flex-row md:flex-row flex-col  items-center md:justify-between lg:justify-between text-center mt-[5rem]  lg:px-[7rem] md:px-0   '>
                            <div className='flex flex-col lg:items-start items-center mt-4 '>
                                <h2 className='text-[22px] max-w-[250px] text-center font-medium text-[#896CDD] font-roboto'>Sign Up And Get Your Roll On</h2>
                                <div className='hover:animate-shake block lg:hidden md:hidden transition ease-in-out delay-150 cursor-pointer'>
                                    <img className='mt-6 hover:animate-shake transition ease-in-out delay-150' src={f1} alt="icon_image" />
                                </div>

                                <h2 className='max-w-[300px] lg:hidden md:hidden block text-[16px] text-[#8C8E9E] font-roboto'>Join BankRoll today for free before we add a ridiculous
                                    membership fee. Not unless you would actually pay it. Create
                                    your Roll and instantly cash your life. Simply transfer money
                                    anywhere with zero intermediaries using our decentralized
                                    banking app. It’s really that easy.</h2>
                            </div>
                            <div className='flex flex-col items-center mt-4'>
                                <h2 className='text-[22px] max-w-[250px] text-center font-medium text-[#896CDD] font-roboto'>Nothing Like Money In The Bank</h2>
                                <div className='hover:animate-shake block lg:hidden md:hidden transition ease-in-out delay-150 cursor-pointer'>
                                    <img className='mt-6 hover:animate-shake transition ease-in-out delay-150 ' src={f2} alt="icon_image" />
                                </div>
                                <h2 className='max-w-[300px] lg:hidden md:hidden block text-[16px] text-[#8C8E9E] font-roboto'>With BankRoll you have complete control of your finances. It's
                                    your coin. Send it. Spend it. Invest it. Lend it to another
                                    BankRoller. Set your own terms and interest rates. Manage
                                    multiple accounts at once. Make international transfers with ease.
                                    Increase your daily limit with biometric identity verification. And
                                    so much more.</h2>
                            </div>
                            <div className='flex flex-col items-center mt-4 '>
                                <h2 className='text-[22px]  max-w-[250px] text-center font-medium text-[#896CDD] font-roboto'>Blink Of An Eye Registration</h2>
                                <div className='hover:animate-shake block lg:hidden md:hidden transition ease-in-out delay-150 cursor-pointer'>
                                    <img className='mt-6 hover:animate-shake transition ease-in-out delay-150 block lg:hidden md:hidden' src={f3} alt="icon_image" />
                                </div>
                                <h2 className='max-w-[300px] lg:hidden md:hidden block text-[16px] text-[#8C8E9E] font-roboto'>Quickly create an account with facial recognition. 2 minutes tops.
                                    Biometrics are a fun way to verify your identity and gives an
                                    added layer of security to your profile. Your twin doesn't stand a
                                    chance. #BlinkwithBankRoll.</h2>

                            </div>




                        </div>
                        <div className='lg:flex md:flex  items-center text-center justify-center  px-[7rem] hidden '>
                            <div className=''>
                                <div className='flex items-center justify-center'>
                                    <div className='hover:animate-shake  transition ease-in-out delay-150 cursor-pointer'>
                                        <img className=' w-[60px] h-[60px] ' src={f1} alt="icon_image" />
                                        <div className="text-white">sdsdfsd</div>
                                    </div>
                                    <img className='mt-1 lg:block hidden md:block' src={path} alt="icon_image" />
                                </div>

                            </div>
                            <div className=''>

                                <div className='flex items-center justify-center'>
                                    <div className='hover:animate-shake transition ease-in-out delay-150 cursor-pointer'>
                                    <img className=' w-[60px] h-[60px] ' src={f2} alt="icon_image" />
                                        <div className="text-white">sdsdfsd</div>
                                    </div>
                                    <img className='mt-[3rem] lg:block hidden md:block' src={path2} alt="icon_image" />
                                </div>

                            </div>
                            <div className=''>

                            <div className='flex items-center justify-center'>
                                    <div className='hover:animate-shake transition ease-in-out delay-150 cursor-pointer'>
                                    <img className=' w-[60px] h-[60px] ' src={f2} alt="icon_image" />
                                        <div className="text-white">sdsdfsd</div>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                        <div className='lg:flex md:flex  lg:px-20  text-center  justify-between   hidden'>
                            <h2 className='lg:max-w-[300px]  max-w-[250px] text-[16px] text-[#8C8E9E] font-roboto'>Join BankRoll today for free before we add a ridiculous
                                membership fee. Not unless you would actually pay it. Create
                                your Roll and instantly cash your life. Simply transfer money
                                anywhere with zero intermediaries using our decentralized
                                banking app. It’s really that easy.</h2>
                            <h2 className='  lg:max-w-[300px]  max-w-[250px] text-[16px] text-[#8C8E9E] font-roboto'>With BankRoll you have complete control of your finances. It's
                                your coin. Send it. Spend it. Invest it. Lend it to another
                                BankRoller. Set your own terms and interest rates. Manage
                                multiple accounts at once. Make international transfers with ease.
                                Increase your daily limit with biometric identity verification. And
                                so much more.</h2>
                            <h2 className=' lg:max-w-[300px] max-w-[250px] text-[16px] text-[#8C8E9E] font-roboto'>Quickly create an account with facial recognition. 2 minutes tops.
                                Biometrics are a fun way to verify your identity and gives an
                                added layer of security to your profile. Your twin doesn't stand a
                                chance. #BlinkwithBankRoll.</h2>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default GetReward