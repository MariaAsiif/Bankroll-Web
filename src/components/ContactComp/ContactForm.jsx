import React from 'react'
import Contact from '../../assests/images/contactUs.png'
const ContactForm = () => {
    return (
        <>
            <div className='mx-20 '>
                <div className=' relative mt-5'>
                    <div className=' shadow-md  ml-[10rem] h-[600px] '>
                        <div className='pl-[20rem] pt-[2rem]'>
                            <h2 className='text-[32px] font-normal font-roboto'>
                                Send us a
                                <br />
                                <span className='text-black font-medium  '>Message</span>
                            </h2>
                            <div className='grid grid-cols-2 gap-10 w-full pr-10 pt-[2rem]'>
                                <div className='border-b w-full flex flex-col'>
                                    <label>First Name</label>
                                    <input type="text" placeholder='John' />
                                </div>
                                <div className='border-b w-full flex flex-col'>
                                    <label>First Name</label>
                                    <input type="text" placeholder='John' />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-10 w-full pr-10 pt-[4rem]'>
                                <div className='border-b w-full flex flex-col'>
                                    <label>First Name</label>
                                    <input type="text" placeholder='John' />
                                </div>
                                <div className='border-b w-full flex flex-col'>
                                    <label>First Name</label>
                                    <input type="text" placeholder='John' />
                                </div>
                            </div>
                            <div className='pr-10'>
                                <div className='border-b w-full flex flex-col  pt-[4rem]'>
                                    <label>First Name</label>
                                    <input type="text" placeholder='John' />
                                </div>
                            </div>
                            <div>
                                <button className='border '>Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0'>
                        <img src={Contact} className='object-cover w-full h-[600px]' alt="left_imge" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactForm