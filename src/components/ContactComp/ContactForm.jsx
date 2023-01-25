import React from 'react'
import Contact from '../../assests/images/contactUs.png'
import call from '../../assests/images/call.png'
import location from '../../assests/images/location.png'
import globel from '../../assests/images/global.png'
import facebook from '../../assests/images/Facebook.png'
import insta from '../../assests/images/Instagram.png'
import linkd from '../../assests/images/Linkedin.png'
import twit from '../../assests/images/Twitter.png'
import yout from '../../assests/images/Youtube.png'
import or from '../../assests/images/or.png'
const ContactForm = () => {
    return (
        <>
            <div className='lg:mx-20 mx-5 mb-[4rem]'>
                <div className=' relative mt-5 mr-4'>
                    <div className=' shadow-md border border-gray-100  lg:ml-[10rem] lg:h-[650px] h-full pb-3 '>
                        <div className='lg:pl-[20rem] pl-5 lg:pt-[2rem] lg:mt-0  mt-[40rem] md:pl-[8rem] md:pt-2'>
                            <h2 className='text-[32px] font-mons' style={{fontWeight:'300'}}>
                                Send us a
                                <br />
                                <span className='text-black  font-mons ' style={{fontWeight:'600'}}>Message</span>
                            </h2>
                            <div className='grid lg:grid-cols-2 gap-10 w-full pr-10 pt-[3rem]'>
                                <div className='border-b w-full flex flex-col'>
                                    <label className='text-[#828282]'>First Name</label>
                                    <input className='outline-none' type="text" placeholder='John' />
                                </div>
                                <div className='border-b w-full flex flex-col'>
                                    <label className='text-[#828282]'>Last Name</label>
                                    <input className='outline-none' type="text" placeholder='John' />
                                </div>
                            </div>
                            <div className='grid g:grid-cols-2 gap-10 w-full pr-10 pt-[4rem]'>
                                <div className='border-b w-full flex flex-col'>
                                    <label className='text-[#828282]'>Email Address</label>
                                    <input className='outline-none' type="email" placeholder='John@gmail.com' />
                                </div>
                                <div className='border-b w-full flex flex-col'>
                                    <label className='text-[#828282]'>Phone</label>
                                    <input className='outline-none' type="number" placeholder='+31 555 444 444' />
                                </div>
                            </div>
                            <div className='pr-10'>
                                <div className='border-b w-full flex flex-col  pt-[4rem]'>
                                    <label className='text-[#828282]'>Message</label>
                                    <input className='outline-none' type="text" placeholder='What is it?' />
                                </div>
                            </div>
                            <div className='pt-[2rem]'>
                                <button className='border w-[40%] py-2 text-white font-roboto  rounded-md bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-0 -left-4 '>
                        <img src={Contact} className='object-cover lg:w-[100%] md:w-[800px] w-full h-[650px] ' alt="left_imge" />
                        <div className=' absolute top-[15%] lg:left-[15%] md:left-[15%] left-5'>
                            <h2 className='text-[32px]  font-mons' style={{fontWeight:'300'}}>
                                Contact
                                <br />
                                <span className='text-black   ' style={{fontWeight:'600'}}>Directly</span>
                            </h2>
                            <ul className='pt-8'>
                                <li className='flex items-center'>
                                    <img src={call} className='w-[25px] object-cover' alt="call" />
                                    <h2 className='px-2 text-[20px]'>(480) 555-0103</h2>
                                </li>
                                <li className='flex items-center py-8'>
                                    <img src={location} className='w-[25px] object-cover' alt="call" />
                                    <h2 className='px-2 text-[20px]'>Canberra, Australia</h2>
                                </li>
                                <li className='flex items-center  '>
                                    <img src={globel} className='w-[25px] object-cover' alt="call" />
                                    <h2 className='px-2 text-[20px] '>michelle.rivera@example.com</h2>
                                </li>
                            </ul>

                            <div className='flex items-center mt-[3rem]'>
                                <img className='object-cover ' src={insta} alt="instagram" />
                                <img className='object-cover mx-4' src={facebook} alt="facebook" />
                                <img className='object-cover ' src={linkd} alt="linkdin" />
                                <img className='object-cover mx-4' src={twit} alt="twitter" />
                                <img className='object-cover ' src={yout} alt="youtube" />
                            </div>
                        </div>
                        <div className='absolute lg:top-[40%] md:left-[40%] md:-bottom-8 -bottom-2 lg:left-[85%]'>
                            <img src={or} className='object-cover w-[50%] lg:w-full md:w-full' alt="or" />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactForm