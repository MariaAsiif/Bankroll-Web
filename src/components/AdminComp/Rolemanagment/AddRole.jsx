import React from 'react'
import { MdClose } from 'react-icons/md'

const AddRole = ({ setShow }) => {

    // const Roles = [{}]
    return (
        <>
            <div className='w-[750px]'>
                <div className='flex justify-between items-center border-b pb-2 '>
                    <h2 className='text-[17px] text-[#7869DD] font-sans font-medium'>Add Role</h2>
                    <MdClose className='text-red-500 text-[20px] cursor-pointer' onClick={setShow} />
                </div>

                <div className='pt-5'>
                    <label className='text-[#222B45] text-[13px] font-bold'>Name *</label>
                    <select className='w-full border p-2 rounded-lg focus:outline-none'>
                        <option>Select Role Type</option>
                    </select>


                    <div className=' mt-5'>
                        <h2 className='text-[#222B45] text-[18px] font-bold pt-2 px-2'> Permission *</h2>
                    </div>

                    <div className='mt-5'>

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left ">
                                <thead className="text-[#C2C2C2] text-[13px] border-b ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 tracking-[2px]">
                                            User
                                        </th>
                                        <th scope="col" className="px-6 py-3 tracking-[2px]">
                                            Role
                                        </th>
                                        <th scope="col" className="px-6 py-3 tracking-[2px]">
                                            Permission
                                        </th>
                                        <th scope="col" className="px-6 py-3 tracking-[2px]">
                                            Post
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Array(4).fill(4).map((_, i) => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className='flex items-center'>
                                                        <input type="checkbox" />
                                                        <h2 className='text-[#222B45] px-2 text-[12px] font-semibold'>user List</h2>
                                                    </div>
                                                </th>
                                                <td className="px-6 py-4">
                                                    <div className='flex items-center'>
                                                        <input type="checkbox" />
                                                        <h2 className='text-[#222B45] px-2 text-[12px] font-semibold'>user List</h2>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className='flex items-center'>
                                                        <input type="checkbox" />
                                                        <h2 className='text-[#222B45] px-2 text-[12px] font-semibold'>user List</h2>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className='flex items-center'>
                                                        <input type="checkbox" />
                                                        <h2 className='text-[#222B45] px-2 text-[12px] font-semibold'>user List</h2>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='flex justify-end items-end mt-20'>
                        <button className='flex items-center w-fit px-5 py-2 text-white text-[16px]   rounded-lg bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>Add Role </button>
                        <button className='flex items-center w-fit px-5 py-2  text-[16px]   rounded-lg text-[#896CDD] '>Cancel </button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AddRole