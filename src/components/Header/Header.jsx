import React, { useState, useEffect } from 'react'
import logo from '../../assests/images/Logo.png'
import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import Sidebar from '../../utils/Sidebar'
const Header = () => {
    const location = useLocation().pathname
    const [scrollTop, setScrollTop] = useState(0)
    const [auto, setAuto] = useState(false)
    const [sideNavShow, setSideNavShow] = useState(false);

    const isSticky = () => {
        const scrollData = window.scrollY;
        setScrollTop(scrollData)
        if (scrollData > 0) {
            setAuto(true)
        }
        else {
            setAuto(false)

        }
    };


    useEffect(() => {

        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);

        };
    }, [scrollTop]);


    return (
        <>
            <div className=''>
                <Sidebar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
                <div className={`${location === "/" && auto === false ? 'bg-gradient-to-r w-full from-[#DBE7FA] to-[#F2F6FD] ' : 'bg-white border-b  fixed top-0 w-full z-40 '}`}>
                    <div className="lg:mx-20 mx-0 ">
                        <div className='flex justify-between items-center px-3 py-2 '>
                            <div className='lg:hidden block w-[80%]'>
                                <FaBars className='text-[25px]' onClick={() => setSideNavShow(true)}/>
                            </div>
                            <div className='w-full '>
                                <img src={logo} alt="logo" className='object-cover lg:w-full ' />
                            </div>
                            <div className='lg:block hidden'>
                                <ul className='lg:flex justify-between items-center '>
                                    <li className={`${location === "/" ? 'text-[#4965E0]' : 'text-[#8C8E9E]'} px-5  font-roboto font-normal`}>
                                        <Link to="/">Home</Link></li>
                                    <li className={`${location === "/feature" ? 'text-[#4965E0]' : 'text-[#8C8E9E]'} px-5  font-roboto font-normal`}>
                                        <Link to="/feature">Feature</Link></li>
                                    <li className={`${location === "/faq" ? 'text-[#4965E0]' : 'text-[#8C8E9E]'} px-5  font-roboto font-normal`}>
                                        <Link to="/faq">Faq</Link></li>
                                    <li className={`${location === "/contactUs" ? 'text-[#4965E0]' : 'text-[#8C8E9E]'} px-5  font-roboto font-normal`}>
                                        <Link to="/contactUs">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className='w-full flex justify-end'>
                                <button className='rounded-full text-white font-roboto lg:px-6  px-3 py-2 lg:text-[16px] text-[10px] bg-gradient-to-r from-[#4965E0] to-[#896CDD]'>Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header