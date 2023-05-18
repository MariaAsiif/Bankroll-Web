import React from 'react'
import { MdClose } from 'react-icons/md'

const AddUser = ({setShow}) => {
    return (
        <>
            <div className='xl:w-[750px] '>
                <div className='flex justify-between items-center border-b pb-2 '>
                        <h2 className='text-[17px] text-[#7869DD] font-sans font-medium'>Add User</h2>
                    <MdClose className='text-red-500 text-[20px] cursor-pointer'  onClick={setShow}/>
                </div>

                <div className='pt-5'>
                    <input type="text" placeholder='User ID *' className='w-full border p-2 rounded-lg focus:outline-none' />
                    <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10 gap-3 xl:pt-5 md:pl-5 pt-3'>
                        <input type="text" placeholder='First Name *' className='w-full border p-2 rounded-lg focus:outline-none' />
                        <input type="text" placeholder='Last Name *' className='w-full border p-2 rounded-lg focus:outline-none' />
                    </div>
                    <div className='grid xl:grid-cols-3 md:grid-cols-3  gap-3 xl:pt-5 md:pl-5 pt-3'>
                        <input type="email" placeholder='Email ID *' className='w-full border p-2 rounded-lg focus:outline-none' />
                        <input type="tel" placeholder='Mobile No *' className='w-full border p-2 rounded-lg focus:outline-none' />
                        <select className='w-full border p-2 rounded-lg focus:outline-none'>
                            <option>Select Role Type</option>
                        </select>
                    </div>
                    <div className='grid xl:grid-cols-3 md:grid-cols-3 gap-3 xl:pt-5 md:pl-5 pt-3'>
                        <input type="text" placeholder='Username *' className='w-full border p-2 rounded-lg focus:outline-none' />
                        <input type="password" placeholder='Password *' className='w-full border p-2 rounded-lg focus:outline-none' />
                        <input type="password" placeholder='Confirm Password *' className='w-full border p-2 rounded-lg focus:outline-none' />
                    </div>

                    <div className='h-[40px]  bg-[#7869DD] bg-opacity-[0.1] mt-5'>
                        <h2 className='text-[#7869DD] text-[18px] pt-2 px-2'>Role Permission</h2>
                    </div>

                    <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center mt-5 border-b pb-3'>
                        <div className='flex items-center'>
                            <input type="checkbox" />
                            <h2 className='text-[#222B45] px-2 font-sans text-[12px] font-medium'>SuperAdmin</h2>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" />
                            <h2 className='text-[#222B45] px-2 font-sans text-[12px] font-medium'>Admin</h2>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" />
                            <h2 className='text-[#222B45] px-2 font-sans text-[12px] font-medium'>User</h2>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" />
                            <h2 className='text-[#222B45] px-2 font-sans text-[12px] font-medium'>Employee</h2>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" />
                            <h2 className='text-[#222B45] px-2 font-sans text-[12px] font-medium'>Other</h2>
                        </div>
                    </div>

                    <div className='flex justify-end items-end mt-20'>
                        <button className='flex items-center w-fit px-5 py-2 text-white text-[16px]   rounded-lg bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>Add User </button>
                        <button className='flex items-center w-fit px-5 py-2  text-[16px]   rounded-lg text-[#896CDD] '>Cancel </button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AddUser