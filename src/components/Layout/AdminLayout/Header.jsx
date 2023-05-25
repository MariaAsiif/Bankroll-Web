import React from 'react';

// import SearchModal from '../components/ModalSearch';
// import Notifications from '../../../util/dropdowns/DropdownNotifications';
// import Help from '../../../util/dropdowns/DropdownHelp';
// import UserMenu from '../../../util/dropdowns/DropdownProfile';
import { MdSearch } from 'react-icons/md';
import { GrNotification } from 'react-icons/gr';
// import user from '../../../assests/images/User.png'
import DropdownProfile from '../../../utils/dropdown/DropdownProfile';
// import { useSelector } from 'react-redux';

function Header({
  sidebarOpen,
  setSidebarOpen
}) {





  return (
    <header className="sticky top-0 bg-white border-b mx-5 border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-20 -mb-px">

          {/* Header: Left side */}
          <div className="flex lg:hidden">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 "
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>

          <div>
            <div className='bg-white  hidden shadow-sm rounded-full border lg:flex items-center px-2 w-[380px] py-2'>
              <MdSearch className='text-[25px] ' />
              <input type="text" className='focus:outline-none mx-2 w-full placeholder:text-[#ACACAC] placeholder:text-[16px]' placeholder='Search...' />
            </div>
          </div>

          <div className='flex items-center'>
            <select className='border-0 focus:outline-none'>
              <option>EN</option>
            </select>

            <GrNotification className='mx-4' />
            <DropdownProfile />
            {/* <img src={user} alt="user" className='objet-cover' /> */}
          </div>

          {/* Header: Right side */}
          {/* <div className="flex items-center space-x-3">
            <div className='lg:block hidden'>
              <Notifications align="right" />
            </div>
            <Help align="right" />
            <UserMenu align="right" />

          </div> */}

        </div>
      </div>
    </header>
  );
}

export default Header;