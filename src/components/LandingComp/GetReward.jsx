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
            <div className=' absolute -bottom-[80px] w-full pb-7'>
                <div className='lg:mx-20 mx-5 '>
                    <div className='rounded-tl-2xl rounded-tr-2xl  bg-white h-[150px] w-full pt-3'>
                        <div className='flex lg:flex-row md:flex-row flex-col pb-[4rem] pt-[1rem]  lg:justify-between lg:px-[5rem] px-[1rem] border-b shadow-md'>
                            <div className='flex items-center w-full '>
                                <img src={reward} className='lg:w-auto w-[20%]' alt="reword" />
                                <h2 className='lg:px-4 px-2 font-bold font-roboto  text-[#060C3A] text-[20px] lg:text-[2rem]'>Sign Up And Get Your Roll On</h2>
                            </div>
                            <div>
                                <p className='text-[#8C8E9E] lg:text-[20px] text-[16px] lg:pt-0 pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia. </p>
                            </div>
                        </div>
                        <div className='flex lg:flex-row md:flex-row flex-col items-center md:justify-between lg:justify-between text-center mt-[5rem]  lg:px-[8rem] md:px-[3rem] '>
                            <div className='flex flex-col items-center mt-4'>
                                <h2 className='text-[22px] max-w-[250px] text-center font-medium text-[#896CDD] font-roboto'>Sign Up And Get Your Roll On</h2>
                                <div className='hover:animate-shake transition ease-in-out delay-150 cursor-pointer'>
                                    <img className='mt-6 hover:animate-shake transition ease-in-out delay-150 block lg:hidden md:hidden' src={f1} alt="icon_image" />
                                </div>

                                <h2 className='max-w-[300px] lg:hidden md:hidden block text-[16px] text-[#8C8E9E] font-roboto'>Join BankRoll today for free before we add a ridiculous
                                    membership fee. Not unless you would actually pay it. Create
                                    your Roll and instantly cash your life. Simply transfer money
                                    anywhere with zero intermediaries using our decentralized
                                    banking app. It’s really that easy.</h2>
                            </div>
                            <div className='flex flex-col items-center mt-4'>
                                <h2 className='text-[22px] max-w-[250px] text-center font-medium text-[#896CDD] font-roboto'>Nothing Like Money In The Bank</h2>
                                <div className='hover:animate-shake transition ease-in-out delay-150 cursor-pointer'>
                                    <img className='mt-6 hover:animate-shake transition ease-in-out delay-150 block lg:hidden md:hidden' src={f2} alt="icon_image" />
                                </div>
                                <h2 className='max-w-[300px] lg:hidden md:hidden block text-[16px] text-[#8C8E9E] font-roboto'>With BankRoll you have complete control of your finances. It's
                                    your coin. Send it. Spend it. Invest it. Lend it to another
                                    BankRoller. Set your own terms and interest rates. Manage
                                    multiple accounts at once. Make international transfers with ease.
                                    Increase your daily limit with biometric identity verification. And
                                    so much more.</h2>
                            </div>
                            <div className='flex flex-col items-center mt-4'>
                                <h2 className='text-[22px]  max-w-[250px] text-center font-medium text-[#896CDD] font-roboto'>Blink Of An Eye Registration</h2>
                                <div className='hover:animate-shake transition ease-in-out delay-150 cursor-pointer'>
                                    <img className='mt-6 hover:animate-shake transition ease-in-out delay-150 block lg:hidden md:hidden' src={f3} alt="icon_image" />
                                </div>
                                <h2 className='max-w-[300px] lg:hidden md:hidden block text-[16px] text-[#8C8E9E] font-roboto'>Quickly create an account with facial recognition. 2 minutes tops.
                                    Biometrics are a fun way to verify your identity and gives an
                                    added layer of security to your profile. Your twin doesn't stand a
                                    chance. #BlinkwithBankRoll.</h2>

                            </div>




                        </div>
                        <div className='lg:flex md:flex  items-center text-center   px-[10rem] hidden '>
                            <div className=''>
                                <div className='flex items-center justify-center'>
                                    <div className='hover:animate-shake transition ease-in-out delay-150 cursor-pointer'>
                                        <img className='mt-6 ' src={f1} alt="icon_image" />
                                    </div>
                                    <img className='mt-1 lg:block hidden md:block' src={path} alt="icon_image" />
                                </div>

                            </div>
                            <div className=''>

                                <div className='flex items-center justify-center'>
                                    <div className='hover:animate-shake transition ease-in-out delay-150 cursor-pointer'>
                                        <img className='mt-6 ' src={f2} alt="icon_image" />
                                    </div>
                                    <img className='mt-[6rem] lg:block hidden md:block' src={path2} alt="icon_image" />
                                </div>

                            </div>
                            <div className=''>

                                <div className='flex items-center '>
                                    <div className='hover:animate-shake transition ease-in-out delay-150 cursor-pointer'>
                                        <img className='mt-6 hover:animate-shake transition ease-in-out delay-150 lg:!w-[70px] md:!w-[120px]' src={f3} alt="icon_image" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='lg:flex md:flex  justify-between text-center   px-[4rem] hidden'>
                            <h2 className='max-w-[300px] text-[16px] text-[#8C8E9E] font-roboto'>Join BankRoll today for free before we add a ridiculous
                                membership fee. Not unless you would actually pay it. Create
                                your Roll and instantly cash your life. Simply transfer money
                                anywhere with zero intermediaries using our decentralized
                                banking app. It’s really that easy.</h2>
                            <h2 className='max-w-[300px] text-[16px] text-[#8C8E9E] font-roboto'>With BankRoll you have complete control of your finances. It's
                                your coin. Send it. Spend it. Invest it. Lend it to another
                                BankRoller. Set your own terms and interest rates. Manage
                                multiple accounts at once. Make international transfers with ease.
                                Increase your daily limit with biometric identity verification. And
                                so much more.</h2>
                            <h2 className='max-w-[300px] text-[16px] text-[#8C8E9E] font-roboto'>Quickly create an account with facial recognition. 2 minutes tops.
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