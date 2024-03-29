import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import SidebarObj from './SidebarObj'
// import { MdArrowForwardIos } from 'react-icons/md'
import logo from '../../../assests/images/Logo.png';
// import company from '../../../assests/company.png';
function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {
  const sidebaritems = SidebarObj()

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

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
    // let expand = localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);



  return (
    <div className='relative'>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" ></div>

      {/* Sidebar */}
      <div id="sidebar" ref={sidebar} className={`flex overflow-hidden flex-col absolute z-40 left-0 top-0 px-2 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen  no-scrollbar w-64 lg:w-64 lg:sidebar-expanded:!w-64 xl:sidebar-expanded:!w-64 2xl:sidebar-expanded:!w-64   shrink-0 bg-[#FAFBFC] border-r  py-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} >
        {/* Sidebar header */}
        <div className="flex justify-between mb-5 pr-3 sm:px-2">
          {/* Close button */}
          <button ref={trigger} className="lg:hidden text-black shadow-md  border rounded-full w-[50px] mt-3 mr-5 bg-white flex justify-center items-center h-[40px]" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}  >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/dashboard" className="block  w-full">
            {sidebarExpanded ?
              <div className='flex items-center justify-start pt-2 '>
                <img src={logo} alt="logo" className=" object-over" />
                {/* <img src={company} alt="logo" className="object-over mt-2 mx-1" /> */}

              </div>

              :
              <div className='flex items-center justify-start pt-2 '>
                <img src={logo} alt="logo" className=" object-over ml-2" />

              </div>
            }
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8 pt-20">
          {sidebaritems.map((group, i) => {
            return (
              <div key={i}>
                {/* <h3 className="text-xs uppercase text-[white] font-semibold pl-3">
                  <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">{group.groupname}</span>
                </h3> */}
                <ul className=" lg:max-h-[600px] overflow-x-hidden md:h-full h-full 2xl:max-h-full  admin_sidrbar_scroll lg:overflow-auto pb-4">
                  {group.menuitems?.map((item, index) => {
                    if (item.subMenuItems.length === 0) {
                      return (
                        <li key={index} className={`px-3 border-b py-2 flex items-center ${pathname.includes(item.pathname) && 'rounded-md border' } mb-0.5 last:mb-0 ${pathname.includes(item.pathname) && 'bg-[#7869DD] bg-opacity-[0.1]'}`}>
                           <div className={`${pathname.includes(item.pathname) ? 'block':'hidden  ' } w-[10px] h-[10px] rounded-full bg-[#4965E0] `}></div>
                          <NavLink end to={item.path} className={`block   pl-2  ${pathname.includes(item.pathname) ? '!text-[#4965E0] ' : 'text-black'}  truncate transition duration-150 ${pathname.includes(item.pathname) ? '' : ""}`} >
                            <div className="flex items-center justify-start  ">
                              <p className={`contents w-[60%] ${pathname.includes(item.pathname) ? '!text-[#4965E0] ' : 'text-black'}  `}>{pathname.includes(item.pathname) ? item.activeLeftIcon : item.leftIcon}</p>
                              <span style={{ paddingLeft: '10px' }} className={({ isActive }) => "text-[16px] font-medium  lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100  duration-200" + (isActive ? '!text-[#4965E0]' : '!text-black')}>
                                {item.label}
                              </span>

                            </div>
                          </NavLink>
                        </li>
                      )
                    }
                    else {
                      return (
                        <SidebarLinkGroup key={index} activecondition={pathname.includes(item.pathname)} level={1}>
                          {(handleClick, open) => {
                            return (
                              <React.Fragment>
                                <div onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true); }} className={`block !text-black  truncate transition duration-150  `}  >
                                  <Link to="/usermanagment" className="flex items-center  justify-between">

                                    <div className={`${pathname.includes(item.pathname) ? 'block':'hidden' } w-[10px] h-[10px] rounded-full bg-[#4965E0] `}></div>
                                    <div className="flex items-center justify-start">
                                      <p className='contents w-[60%] '>{pathname.includes(item.pathname) ? item.activeLeftIcon : item.leftIcon}</p>
                                      <span className={`text-[16px] pl-2 font-medium lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${pathname.includes(item.pathname) ? '!text-[#4965E0]' : '!text-black'}`}>
                                        {item.label}
                                      </span>
                                    </div>
                                    <div className={` flex shrink-0 ml-2`}>
                                      <svg className={`w-3 h-3 shrink-0 ml-1 fill-current ${pathname.includes(item.pathname) ? '!text-[#4965E0]' : '!text-black'} ${open && 'rotate-180'}`} viewBox="0 0 12 12"><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" /> </svg>
                                    </div>
                                  </Link>
                                </div>
                                <div className="lg:block 2xl:hidden 2xl:sidebar-expanded:block lg:sidebar-expanded:block ">
                                  <ul className={` mt-2  ${!open && 'hidden '}`}>
                                    {item.subMenuItems.map((subitem, s_index) => {
                                      if (subitem.subMenuItems.length === 0) {
                                        return (
                                          <li key={s_index} className="mb-1 border-b last:mb-0 ">

                                            <NavLink end to={subitem.path} className={({ isActive }) => ' text-black  pl-5 py-2 flex items-center  sdfdsf w-full   transition duration-150 truncate ' + (isActive ? '!text-[#4965E0]  rounded-md   font-bold' : '')}>
                                              <p className='contents w-[60%]'>{pathname.includes(subitem.pathname) ? subitem.activeLeftIcon : subitem.leftIcon}</p>
                                              <span className="text-[16px] px-2 font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                {subitem.label}
                                              </span>
                                            </NavLink>
                                          </li>
                                        )
                                      }
                                      else {
                                        return (
                                          <SidebarLinkGroup key={index} activecondition={pathname.includes(subitem.pathname)} level={2} >
                                            {(handleClick, open) => {
                                              return (
                                                <React.Fragment>
                                                  <a onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true); }} className={`block    truncate transition duration-150 ${pathname.includes(item.pathname) ? 'border ' : ""}`} href="#0" >
                                                    <div className="flex items-center justify-between">

                                                      <div className="flex items-center">
                                                        {pathname.includes(subitem.pathname) ? subitem.activeLeftIcon : subitem.leftIcon}
                                                        <span className="text-sm  font-medium ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                          {subitem.label}
                                                        </span>
                                                      </div>
                                                      <div className="flex shrink-0 ml-2">
                                                        <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12"><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" /> </svg>
                                                      </div>
                                                    </div>
                                                  </a>
                                                  <div className="lg:block lg:sidebar-expanded:block 2xl:block ">
                                                    <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                                      {subitem.subMenuItems.map((subitem, s_index) => {

                                                        return (
                                                          <li key={s_index} className="mb-1 last:mb-0">
                                                            <NavLink end to={subitem.path} className={({ isActive }) => 'block text-red-500 transition duration-150 truncate ' + (isActive ? '!text-[#444444] font-bold' : '')}>
                                                              <span className="text-[16px]  font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ">
                                                                {subitem.label}
                                                              </span>
                                                            </NavLink>
                                                          </li>
                                                        )

                                                      })}
                                                    </ul>
                                                  </div>
                                                </React.Fragment>
                                              );
                                            }}
                                          </SidebarLinkGroup>
                                        )
                                      }

                                    }
                                    )

                                    }
                                  </ul>
                                </div>
                              </React.Fragment>
                            );
                          }}
                        </SidebarLinkGroup>
                      )
                    }

                  })}
                </ul>



              </div>

            )
          })}

        </div>


      </div>
      {/* Expand / collapse button */}
      {/* <div className="pt-3 hidden absolute top-2   transition-all duration-200 ease-in-out -right-[25px] z-40 lg:inline-flex justify-end mt-auto ">
        <div className="px-3 py-2">
          <button onClick={() => setSidebarExpanded(!sidebarExpanded)} className='shadow-md p-[5px] flex justify-center items-center bg-white rounded-full'>
            <MdArrowForwardIos className='sidebar-expanded:rotate-180 text-[#FF8C00]' />
          
          </button>
        </div>
      </div> */}

    </div>
  );
}

export default Sidebar;