import React from 'react'
import { BsEye } from 'react-icons/bs';
import { MdDelete, MdEdit } from 'react-icons/md';
const AuditList = () => {
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

                                        <th colSpan={7} className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                            <h2 className='text-[22px] text-left w-full font-intr font-medium text-white'>List of Audit Logs</h2>

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
                                                    <div className="text-left text-[14px] text-[#898989] px-1">1234</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className=" flex-col text-[14px] text-[#898989] px-1">
                                                        <div className='flex justify-center  flex-col items-center  '>
                                                            <h2 className='text-[13px] text-left text-[#222B45] font-semibold font-sans'>David Wagner</h2>
                                                            <p className='text-[12px] font-normal font-sans text-[#464E5F]'>Sep 27, 2016</p>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-2 first:pl-5  last:pr-5 py-3  whitespace-nowrap">
                                                    <div className="text-left  text-[14px]  text-[#898989] px-1">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore.
                                                    </div>
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

export default AuditList