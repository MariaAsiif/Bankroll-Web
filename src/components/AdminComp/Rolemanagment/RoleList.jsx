import React from 'react'
import { BsEye } from 'react-icons/bs';
import { MdDelete, MdEdit } from 'react-icons/md';
const RoleList = () => {
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
                                            <div className="font-medium text-[14px] text-left">  No </div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-center">Roles Title</div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-center">Description</div>
                                        </th>
                                      
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-end mx-5">Action  </div>
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
                                                    <div className="text-center text-[14px] text-[#898989] px-1">Super Admin</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-center text-[14px] text-[#898989] px-1">Lorem Ipsum</div>
                                                </td>


                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className='flex justify-end items-center'>
                                                        <BsEye className='text-[20px] text-[#C2C2C2]' />
                                                        <MdEdit className='text-[20px] mx-4 text-[#C2C2C2]' />
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

export default RoleList