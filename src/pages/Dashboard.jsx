import React from 'react'
import card from '../assests/images/card.png'
import visa from '../assests/images/visa.png'
import master from '../assests/images/master.png'
import user from '../assests/images/man (1).png'
import g1 from '../assests/images/g1.png'
import g2 from '../assests/images/g2.png'
import g3 from '../assests/images/g3.png'
import g4 from '../assests/images/g4.png'
import flag from '../assests/images/fl.png'
import statics from '../assests/images/Group (4).png'
import statics2 from '../assests/images/Group 942 (1).png'
import save from '../assests/images/Group 886.png'
import static2 from '../assests/images/Group (5).png'
import bitcoin from '../assests/images/bitcoin.png'
import st1 from '../assests/images/st1.png'
import st2 from '../assests/images/st2.png'
import st3 from '../assests/images/st3.png'
import st4 from '../assests/images/st4.png'
import { MdEdit, MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { BsPlusCircleFill, BsSearch } from 'react-icons/bs'
import DashboardChart from '../components/AdminComp/DashboardComp/Chart'
const Dashboard = () => {
  return (
    <>
      <div className=''>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {/* Left  */}
          <div className=''>
            <h1>My Card</h1>
            {/* Card  */}
            <div className='relative pt-3'>
              <img src={card} alt="card" className='object-cover w-full' />
              <div className="">
                <img src={visa} alt="card" className='object-cover absolute right-8 bottom-8' />
                <div className='absolute top-[18%] left-5 '>
                  <p style={{ fontWeight: '100' }} className='italic text-[8px] font-roboto text-white'>Name</p>
                  <h2 style={{ fontWeight: '100' }} className='italic text-white text-[13px] pt-3 font-roboto'>Carla Rosser</h2>
                </div>
                <div className='absolute bottom-[8%] left-5 '>
                  <h2 style={{ fontWeight: '100' }} className='italic text-white text-[10px]  font-roboto'>1200 01452 54215</h2>
                  <p style={{ fontWeight: '100' }} className='italic text-[8px] font-roboto text-white pt-1'>08/23</p>
                </div>
              </div>
            </div>
            {/* Money */}
            <div className='pt-5'>
              <h1 className='text-[22px] font-medium font-intr '>My Card</h1>
              <div className='bg-white shadow-md rounded-xl border border-gray-100 mt-3 p-5'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <img src={master} alt="master-card" className='object-cover' />
                    <h2 className='px-3 font-normal text-[16px]'>Debit</h2>
                  </div>
                  <div className='flex  items-center'>
                    <h2 className='text-[16px] font-normal text-[#131635] px-2'><span className='text-[#A4B4CB] px-2'>$</span>1080</h2>
                    <MdKeyboardArrowDown className='text-[#A5B4CB] text-[20px]' />
                  </div>
                </div>
              </div>
              <div className='bg-white shadow-md rounded-xl border border-gray-100 mt-3 p-5'>
                <div className='flex items-center'>
                  <img src={user} alt="master-card" className='object-cover' />
                  {/* <h2 className='px-3 text-[#798BA3] font-normal font-roboto text-[16px]'> Enter the amount</h2> */}
                  <input type="text" placeholder='Enter the amount ' className='focus:outline-none border-0 mx-3' />
                </div>
                <div className='flex justify-between items-center pt-2'>
                  <div className='flex  items-center'>
                    <h2 className='text-[21px]  font-normal text-[#131635] px-2'><span className='text-[#A4B4CB] px-3'>$</span>1080</h2>
                  </div>
                  <div>
                    <div className='h-[40px] border-[#0177FD] border'></div>
                  </div>
                  <div>
                    <img src={flag} alt="master-card" className='object-cover' />

                  </div>
                </div>
              </div>
            </div>

            {/* Send Money  */}

            <div className='pt-6'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <img src={user} alt="master-card" className='object-cover' />
                  <h2 className='px-3 font-medium font-intr  text-[22px]'>Ahmad Farhan</h2>
                </div>
                <div>
                  <BsPlusCircleFill className='text-[30px] text-[#4965E0]' />
                </div>
              </div>
              <div className='pt-5'>
                <button className='bg-gradient-to-r w-full py-4 rounded-2xl from-[#4965E0] to-[#896CDD] text-[16px] font-roboto font-normal text-white'>Send Money</button>
              </div>
            </div>

            {/* Quick Transfer */}
            <div className='mt-10 p-5 border rounded-lg'>
              <h1 className='text-[22px] font-medium font-intr '>Quick  Transfer</h1>
              <div className='flex mt-2 justify-between items-center border rounded-lg p-3'>
                <div className='flex items-center'>
                  <img src={master} alt="master-card" className='object-cover' />
                  <h2 className='px-3 font-normal text-[16px]'>Debit</h2>
                </div>
                <div className='flex  items-center'>
                  <h2 className='text-[10px] font-roboto italic font-normal text-[#131635] px-2'><span className='text-[#A4B4CB] '>$</span>1080</h2>
                  <MdKeyboardArrowDown className='text-[#A5B4CB] text-[20px]' />
                </div>
              </div>
              <div className='bg-white shadow-md rounded-xl border border-gray-100 mt-3 py-3'>
                <div className='flex items-center'>

                  <input type="text" placeholder='Enter the amount ' className='focus:outline-none italic text-[10px] border-0 mx-3' />
                </div>
                <div className='flex justify-between items-center pt-2'>
                  <div className='flex  items-center border-[#0177FD] border-r-2 pr-4'>
                    <h2 className='text-[14px] italic font-normal text-[#131635] px-2'><span className='text-[#A4B4CB] px-1'>$</span>1080</h2>
                  </div>

                  <div className='mx-3'>
                    <img src={flag} alt="master-card" className='object-cover' />

                  </div>
                </div>
              </div>

              <div className='flex justify-between items-center mt-5'>
                <div className='text-center'>
                  <img src={g1} alt="master-card" className='object-cover' />
                  <h2 className='text-[10px] text-[#798BA3] pt-2 font-normal font-roboto '>Send</h2>
                </div>
                <div className='text-center'>
                  <img src={g2} alt="master-card" className='object-cover' />
                  <h2 className='text-[10px] text-[#798BA3] pt-2 font-normal font-roboto '>Receive</h2>
                </div>
                <div className='text-center'>
                  <img src={g3} alt="master-card" className='object-cover' />
                  <h2 className='text-[10px] text-[#798BA3] pt-2 font-normal font-roboto '>Invoicing</h2>
                </div>
                <div className='text-center'>
                  <img src={g4} alt="master-card" className='object-cover' />
                  <h2 className='text-[10px] text-[#798BA3] pt-2 font-normal font-roboto '>More</h2>
                </div>
              </div>
            </div>

          </div>
          {/* Right */}
          <div className='xl:col-span-2 xl:border-l md:border-l'>
            <div className='grid xl:grid-cols-2 gap-5 border-b pb-4'>
              <div className='px-2 border-r'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-[22px] font-medium font-intr'>Money Flow</h2>
                  <div className='flex items-center'>
                    <img src={statics} alt="dash_pic" className='object-cover mx-2' />
                    <img src={statics2} alt="dash_pic" className='object-cover' />
                  </div>
                </div>
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex items-center'>
                    <img src={save} alt="dash_pic" className='object-cover mx-2' />
                    <h2 className='text-[10px] font-medium font-intr'>Savings</h2>
                    <div className='flex items-center mx-2 '>
                      <img src={static2} alt="dash_pic" className='object-cover' />
                      <h2 className='text-[10px] font-medium font-intr px-2 '>+6,79%</h2>
                    </div>

                  </div>

                  <div>
                    <select className='border border-gray-100 text-[#141736] p-2 rounded-xl focus:outline-none'>
                      <option>week</option>
                    </select>
                  </div>
                </div>
                <div className='mt-5'>
                  <DashboardChart />
                </div>
              </div>
              <div className=''>
                <div className='flex justify-between items-center'>
                  <div>
                    <h2 className='text-[22px] font-medium font-intr'>Recent Contacts</h2>
                    <p className='text-[#7D8DA6] text-[11px]'>18 recipients</p>
                  </div>
                  <div className='flex items-center'>
                    <MdEdit className='mx-2 text-[#1E1F20]' />
                    <BsSearch className='' />
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}

            <div className='p-3 '>
              <div className='flex justify-between pt-3'>
                <h2 className='text-[22px] font-medium font-intr'>Recent Contacts</h2>
                <div className='flex items-center'>
                  <h2 className='text-[10px] italic font-roboto text-[#5E636A] '>View all</h2>
                  <MdKeyboardArrowRight className='text-[20px] ml-2' />
                </div>
              </div>

              <div className="relative overflow-x-auto mt-7">
                <table className="w-full text-sm text-left ">
                  <thead className="text-[#C2C2C2] text-[13px] border-b ">
                    
                  </thead>
                  <tbody>
                    {
                      Array(5).fill(5).map((_, i) => (
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className='flex items-center'>
                              <img src={bitcoin} alt="coin" className='object-cover' />
                              <h2 className='text-[11px] px-2 font-roboto italic text-[#343744]'>Bitcoin Transactions</h2>
                            </div>
                          </th>
                          <td className="px-6 py-4">
                            <h2 className='text-[11px] font-roboto italic text-[#000000]'>Jan 16, 2020</h2>

                          </td>
                          <td className="px-6 py-4">
                            <h2 className='text-[11px] font-roboto italic text-[#343744]'>*****45242</h2>

                          </td>
                          <td className="px-6 py-4">
                            <h2 className='text-[11px] font-roboto italic text-[#343744]'>B-$853.00</h2>

                          </td>
                          <td className="px-6 py-4">
                            <button className='w-fit px-3 py-2 text-[11px] font-roboto italic rounded-lg text-[#61BB84] bg-[#EBFFF3]'>Success</button>


                          </td>
                        </tr>
                      ))
                    }


                  </tbody>
                </table>
              </div>
              {/* {
                Array(5).fill(5).map((_, i) => (


                  <div key={i} className='flex justify-between items-center pt-3 border-b pb-4'>
                    <div className='flex items-center'>
                      <img src={bitcoin} alt="coin" className='object-cover' />
                      <h2 className='text-[11px] px-2 font-roboto italic text-[#343744]'>Bitcoin Transactions</h2>
                    </div>
                    <div className=''>
                      <h2 className='text-[11px] font-roboto italic text-[#000000]'>Jan 16, 2020</h2>
                    </div>
                    <div className=''>
                      <h2 className='text-[11px] font-roboto italic text-[#343744]'>*****45242</h2>
                    </div>
                    <div className=''>
                      <h2 className='text-[11px] font-roboto italic text-[#343744]'>B-$853.00</h2>
                    </div>
                    <div className=''>
                      <button className='w-fit px-3 py-2 text-[11px] font-roboto italic rounded-lg text-[#61BB84] bg-[#EBFFF3]'>Success</button>
                    </div>
                  </div>
                ))
              } */}

            </div>

            {/* Statistics */}

            <div className='p-5 bg-white shadow-lg rounded-lg mt-6 ml-2'>
              <h2 className='text-[22px] font-medium font-intr pt-5'>Statistics</h2>
              <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5 py-8'>
                <div className='flex items-center'>
                  <img src={st1} alt="static_pic" className='object-cover' />
                  <div className='pl-2'>
                    <h2 className='text-[22px] font-intr font-medium'>220k</h2>
                    <p className='text-[11px]'>customers</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src={st2} alt="static_pic" className='object-cover' />
                  <div className='pl-2'>
                    <h2 className='text-[22px] font-intr font-medium'>220k</h2>
                    <p className='text-[11px]'>Remittance</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src={st3} alt="static_pic" className='object-cover' />
                  <div className='pl-2'>
                    <h2 className='text-[22px] font-intr font-medium'>220k</h2>
                    <p className='text-[11px]'>Donation</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src={st4} alt="static_pic" className='object-cover' />
                  <div className='pl-2'>
                    <h2 className='text-[22px] font-intr font-medium'>220k</h2>
                    <p className='text-[11px]'>Watchtime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard