import React from 'react'
import { BsEye } from 'react-icons/bs';
import { MdDelete, MdEdit } from 'react-icons/md';
const UserList = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9,];


    return (
        <>
            <div className=' bg-white rounded-md shadow-md border '>
                <div className="overflow-x-auto  mt-6">
                    {
                        // currentItems.length > 0 ?
                        <>
                            <table className="table-auto w-full ">
                                {/* Table header */}
                                <thead className="text-xs font-medium h-[50px]  bg-gradient-to-r from-[#4965E0] to-[#896CDD]    border-b border-slate-200">
                                    <tr className='text-white'>

                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                            <div className="font-medium text-[14px] text-left"></div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                            <div className="font-medium text-[14px] text-left"> ID </div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-center">user name/email</div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-left"></div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-left">Create Date</div>
                                        </th>

                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-left">Role  </div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-center">Action  </div>
                                        </th>

                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm ">
                                    {
                                        items.map((_, i) =>
                                            <tr className=' cursor-pointer  ' >
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap pr-5">
                                                    <input type="checkbox" />
                                                </td>
                                                <td className="px-2 first:pl-5 flex items-center last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989] px-1">john</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className=" flex-col text-[14px] text-[#898989] px-1">
                                                        <div className='flex justify-center  flex-col items-center  '>
                                                            <h2 className='text-[13px] text-left text-[#222B45] font-semibold font-sans'>David Wagner</h2>
                                                            <p className='text-[12px] text-[#8F9BB3] font-sans font-normal'>david_wagner@example.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-center p-1 w-[80%] text-[14px] text-white  rounded-full bg-gradient-to-r from-[#4965E0] to-[#896CDD] ">
                                                        Super Admin</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989] px-1">02-16-2023</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989] px-1">Lorem Ipsum</div>
                                                </td>


                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className='flex justify-between items-center'>
                                                        <BsEye className='text-[20px] text-[#C2C2C2]' />
                                                        <MdEdit className='text-[20px] text-[#C2C2C2]' />
                                                        <MdDelete className='text-[20px] text-red-500' />
                                                    </div>
                                                </td>


                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>



                        </>
                        // :
                        // <div className='p-5 '>
                        //     <h2>Record not found</h2>
                        // </div>
                    }


                    

                </div>

            </div>

        </>
    )
}

export default UserList