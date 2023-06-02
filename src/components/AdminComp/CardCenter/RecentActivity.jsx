import React from 'react'
import { BsEye } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import user from '../../../assests/images/User.png'
const RecentActivity = () => {
    return (
        <>

            <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Our products
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3 border boder-l-0">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3 border boder-l-0">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3 border">
                                Card type
                            </th>
                            <th scope="col" className="px-6 py-3 border">
                                card number
                            </th>
                            <th scope="col" className="px-6 py-3 border">
                                Exp Date
                            </th>
                            <th scope="col" className="px-6 py-3 border">
                                Card status
                            </th>
                            <th scope="col" className="px-6 py-3 border">
                                action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 border">
                                #4FE21
                            </td>
                            <th scope="row" className="pl-3 pr-10 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center'>
                                    <img src={user} alt="user" className='object-cover w-[30%]' />
                                    <h2 className='px-3'>Ronald Richards</h2>
                                </div>
                            </th>
                            <td className="px-6 py-4 border">
                                Gold
                            </td>
                            <th scope="row" className="px-6 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                **** **** **** 6281
                            </th>
                            <td className="px-6 py-4 border">
                                03/12/2026
                            </td>
                            <td className="px-6 py-4 border ">
                                <div className='bg-[#45C218] text-green-200 rounded-md px-5 py-2'>
                                    Active
                                </div>
                            </td>
                            <td className="px-6 py-4 border ">
                                <div className='flex '>
                                    <BsEye className='text-[20px] text-gray-400 ' />
                                    <AiFillEdit className='text-[20px] text-gray-400 mx-3 ' />
                                    <RiDeleteBin5Fill className='text-[20px] text-red-500' />
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 border">
                                #4FE21
                            </td>
                            <th scope="row" className="pl-3 pr-10 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center'>
                                    <img src={user} alt="user" className='object-cover w-[30%]' />
                                    <h2 className='px-3'>Ronald Richards</h2>
                                </div>
                            </th>
                            <td className="px-6 py-4 border">
                                Gold
                            </td>
                            <th scope="row" className="px-6 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                **** **** **** 6281
                            </th>

                            <td className="px-6 py-4 border">
                                03/12/2026
                            </td>
                            <td className="px-6 py-4 border ">
                                <div className='bg-[#45C218] text-green-200 rounded-md px-5 py-2'>
                                    Active
                                </div>
                            </td>
                            <td className="px-6 py-4 border ">
                                <div className='flex '>
                                    <BsEye className='text-[20px] text-gray-400 ' />
                                    <AiFillEdit className='text-[20px] text-gray-400 mx-3 ' />
                                    <RiDeleteBin5Fill className='text-[20px] text-red-500' />
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 border">
                                #4FE21
                            </td>
                            <th scope="row" className="pl-3 pr-10 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center'>
                                    <img src={user} alt="user" className='object-cover w-[30%]' />
                                    <h2 className='px-3'>Ronald Richards</h2>
                                </div>

                            </th>
                            <td className="px-6 py-4 border">
                                Gold
                            </td>
                            <th scope="row" className="px-6 py-4 border font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                **** **** **** 6281
                            </th>

                            <td className="px-6 py-4 border">
                                03/12/2026
                            </td>
                            <td className="px-6 py-4 border ">
                                <div className='bg-[#45C218] text-green-200 rounded-md px-5 py-2'>
                                    Active
                                </div>
                            </td>
                            <td className="px-6 py-4 border ">
                                <div className='flex '>
                                    <BsEye className='text-[20px] text-gray-400 ' />
                                    <AiFillEdit className='text-[20px] text-gray-400 mx-3 ' />
                                    <RiDeleteBin5Fill className='text-[20px] text-red-500' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default RecentActivity