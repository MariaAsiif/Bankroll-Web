import React, { useState, useRef, useEffect } from 'react';
import Transition from '../Transition/Transition';
import master from '../../assests/images/master.png'
import paypal from '../../assests/images/pay.png'
import debit from '../../assests/images/ss.png'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';


const DropdownCreditCard = ({ align }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // const handleSignout = () => {
  //   dispatch(signout())
  // }

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const cards = [{pic:master , title:"master"},{pic:debit , title:"debit"},{pic:paypal , title:"paypal"}]
  return (
    <div className="relative inline-flex w-full">
      <button
        ref={trigger}
        className="inline-flex bg-white shadow-md w-full p-5 border border-gray-100 rounded-md  justify-between items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {/* <div className='bg-white shadow-md rounded-xl border border-gray-100 mt-3 p-5'> */}

        <div className='flex items-center'>
          <img src={master} alt="master-card"  className={`object-cover`} />
          <h2 className='px-3 font-normal text-[16px]'>master</h2>
        </div>
        <div className='flex  items-center'>
          <MdKeyboardArrowDown className='text-[#A5B4CB] text-[20px]' />
        </div>

        {/* </div> */}


      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >

          <ul>
            {
              cards?.map((item, i) => (
                <div  key={i} className='flex justify-between items-center p-2 border-b last:border-b-0'>
                  <div className='flex items-center'>
                    <img src={item?.pic} alt="master-card" className={`object-cover ${item.pic === debit && 'w-[15%]'}`} />
                    <h2 className='px-3 font-normal text-[16px]'>{item?.title}</h2>
                  </div>
                  <div className='flex  items-center'>
                    <MdKeyboardArrowRight className='text-[#A5B4CB] text-[20px]' />
                  </div>
                </div>

              ))
            }
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default DropdownCreditCard