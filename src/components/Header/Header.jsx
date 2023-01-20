import React from 'react'
import logo from '../../assests/images/Logo.png'
import { useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation().pathname
    return (
        <>
            <div className={`${location === "/" ?  'bg-gradient-to-r from-[#DBE7FA] to-[#F2F6FD]' : 'bg-white border-b'}`}>
                <div className="mx-20  ">
                    <div className='flex justify-between items-center px-3 py-2'>
                        <div>
                            <img src={logo} alt="logo" className='object-cover' />
                        </div>
                        <div>
                            <ul className='flex justify-between items-center'>
                                <li className='px-5 text-[#8C8E9E] font-roboto font-normal'>Home</li>
                                <li className='px-5 text-[#8C8E9E] font-roboto font-normal'>Feature</li>
                                <li className='px-5 text-[#8C8E9E] font-roboto font-normal'>Faq</li>
                                <li className='px-5 text-[#8C8E9E] font-roboto font-normal'>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <button className='rounded-full text-white font-roboto px-6 py-2 bg-gradient-to-r from-[#4965E0] to-[#896CDD]'>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header