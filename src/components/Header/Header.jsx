import React from 'react'
import logo from '../../assests/images/Logo.png'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation().pathname
    return (
        <>
            <div className={`${location === "/" ? 'bg-gradient-to-r from-[#DBE7FA] to-[#F2F6FD]' : 'bg-white border-b'}`}>
                <div className="mx-20  ">
                    <div className='flex justify-between items-center px-3 py-2'>
                        <div>
                            <img src={logo} alt="logo" className='object-cover' />
                        </div>
                        <div>
                            <ul className='flex justify-between items-center'>
                                <li className={`${location === "/" ? 'text-[#4965E0]' : 'text-[#8C8E9E]' } px-5  font-roboto font-normal`}>
                                    <Link to="/">Home</Link></li>
                                <li className={`${location === "/feature" ? 'text-[#4965E0]' : 'text-[#8C8E9E]' } px-5  font-roboto font-normal`}>
                                    <Link to="/feature">Feature</Link></li>
                                <li className={`${location === "/faq" ? 'text-[#4965E0]' : 'text-[#8C8E9E]' } px-5  font-roboto font-normal`}>
                                    <Link to="/faq">Faq</Link></li>
                                <li className={`${location === "/contactUs" ? 'text-[#4965E0]' : 'text-[#8C8E9E]' } px-5  font-roboto font-normal`}>
                                    <Link to="/contactUs">Contact Us</Link></li>
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