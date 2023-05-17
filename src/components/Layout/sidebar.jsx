import React, { useState, useEffect, useRef } from 'react';
import {useLocation , Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signout } from '../../Redux/UserAuthSlice/UserAuthSlice';
function Sidebar({
    sidebarOpen,
    setSidebarOpen,
    list 
}) {

    const location = useLocation().pathname;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(signout())
    }


    // const location = useLocation().pathname


    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
     
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded');
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded');
        }
    }, [sidebarOpen]);



    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div className={`fixed inset-0 border bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" ></div>

            {/* Sidebar */}
            <div id="sidebar" ref={sidebar} className={`flex overflow-hidden flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0  ${location === '/flash-pass' ? 'h-[170vh]' :location === "/rental/rental_property" ? 'h-[170vh]' :'h-screen' } border-gray-200 border-r no-scrollbar w-64  lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#fcf8f4] transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} >
                {/* Sidebar header */}
                <div className="flex justify-between mb-5 pr-3 sm:px-2">
                    {/* Close button */}
                    <button ref={trigger} className="lg:hidden mt-5 mx-5 border rounded-full text-slate-500 hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}  >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}

                </div>

                {/* Links */}
                <div className="space-y-8 ">
                    <ul className='pt-[2rem] '>
                                <Link to={item.link}>
                                    <li className={`${location === item.link  && 'bg-[#F7E6CB] border-l-4 border-[#F79F15] bg-opacity-[0.5]'} w-full flex cursor-pointer justify-center items-center py-4 `} key={i}>
                                        <div className='flex items-start justify-start w-full px-8'>
                                            <img src={item.image} alt="heart_image" className='w-[15%]' />
                                            <h2 className='mx-2 max-w-[200px] font-semibold'>{item.heading}</h2>
                                        </div>
                                    </li>
                                </Link>
                          
                    </ul>
                    <div className='flex justify-center mt-[5rem]'>
                        <button className='px-[5rem] py-2 bg-[#F63030] text-white rounded-md' onClick={() => logout()} >Logout</button>
                    </div>

                </div>


            </div>
           

        </div>
    );
}

export default Sidebar;
