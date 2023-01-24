import React, { useEffect, useRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assests/images/Logo.png'

function Sidebar({
    sidebarOpen,
    setSidebarOpen
}) {

    const location = useLocation();

    // const trigger = useRef(null);
    const sidebar = useRef(null);




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
        if (sidebarOpen === true) {
            if (typeof window != "undefined" && window.document) {
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = "auto";
        }
    }, [sidebarOpen]);




    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-90  transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" ></div>

            {/* Sidebar */}



            <div id="sidebar" ref={sidebar} className={`flex flex-col  absolute z-50  left-0 top-0 lg:left-0  
      ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white  border-l py-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} >
                {/* Sidebar header */}
                <div className=" mb-10 pr-6 sm:px-2">
                    {/* Close button */}
                    <div className='flex justify-start mx-3 items-start '>
                        <BsArrowLeft className='border text-[30px] rounded-full border-[#4965E0]  text-[#4965E0] p-1' onClick={() => setSidebarOpen(!sidebarOpen)} />
                    </div>
                    {/* <button ref={trigger} className=" text-black border  rounded-full border-black hover:underline" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}  >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button> */}
                    {/* Logo */}

                    <div className="flex items-center justify-center  pt-6 ">
                        <img src={logo} alt="logo" className='object-cover w-[90%] ' />
                    </div>
                </div>

                {/* Links */}
                <div>
                    <div className="h-full pb-2">

                        <ul className=" text-start flex flex-col items-center justify-center ">
                            <li
                                className={`${location === "/partner" ? "border-b border-white  " : " w-full  my-3 px-6 cursor-pointer group hover:bg-black hover:underline uppercase "
                                    } `}
                            >
                                <Link to="/businessLogin">
                                    <h2 className="text-[20px] pt-2 font-medium font-roboto text-black group-hover:underline">
                                        Home
                                    </h2>
                                </Link>
                            </li>
                            <li
                                className={`${location === "/customer" ? "border-b border-white  " : "w-full  my-3 px-6 cursor-pointer group hover:bg-black hover:underline uppercase "
                                    } `}
                            >
                                <Link to="/signin">
                                    <h2 className="text-[20px] pt-2 font-medium font-roboto text-black hover:underline">
                                        {" "}
                                        Feature
                                    </h2>
                                </Link>
                            </li>
                            <li
                                className={`${location === "/ourservices" ? "border-b border-white  " : "w-full  my-3 px-6 cursor-pointer group hover:bg-black hover:underline uppercase "
                                    } `}
                            >
                                <Link to="/categoryLists">

                                    <h2 className="text-[20px] pt-2 font-medium font-roboto text-black group-hover:underline">
                                        FAQ
                                    </h2>
                                </Link>
                            </li>
                            <li
                                className={`${location === "/aboutus" ? "border-b border-white  " : "w-full  my-3 px-6 cursor-pointer group hover:bg-black hover:underline uppercase "
                                    } `}
                            >
                                <Link to="/signin">
                                    <h2 className="text-[20px] pt-2 font-medium font-roboto text-black group-hover:underline">
                                     contact Us
                                    </h2>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Expand / collapse button */}
                {/* <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div> */}
            </div>
        </div>
    );
}

export default Sidebar;