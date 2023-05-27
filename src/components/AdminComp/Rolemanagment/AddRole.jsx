import React from 'react'
import { MdClose } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    role: yup.string().required(),
});

const AddRole = ({ setShow, type }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = () => { }
    const RolesName = ["Dashboard", " Customer Mangement", "Contact detail", "FAQ", "Feature", "Tax ", "Referral"]


  

     

    return (
        <>
        
            <div className='xl:w-[750px] md:w-full w-[300px]'>
                <div className='flex justify-between items-center border-b pb-2 '>
                    <h2 className='text-[17px] text-[#7869DD] font-sans font-medium'>{type === "view" ? 'View Roles' : type === "edit" ? "Edit Roles" : "Add Role"}</h2>
                    <MdClose className='text-red-500 text-[20px] cursor-pointer' onClick={setShow} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='pt-5'>
                        <label className='text-[#222B45] text-[13px] font-bold'>Name *</label>
                        {
                            type === "view" ?
                                <h2>Role Name</h2>
                                :
                                <>
                                    <input  {...register('role')} type="text" placeholder='Role Name' className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.role && 'border-red-500'}`} />
                                    {errors.role && (
                                        <p className="text-red-500 text-sm ">{errors.role.message}</p>
                                    )}
                                </>
                        }

                        <div className=' mt-5'>
                            <h2 className='text-[#222B45] text-[18px] font-bold pt-2 px-2'> Permission *</h2>
                        </div>

                        <div className='mt-5'>

                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left ">
                                    <thead className="text-[#C2C2C2] text-[13px] border-b ">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 tracking-[2px]">
                                                ModuleName
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-[2px]">
                                                View
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-[2px]">
                                                Post
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-[2px]">
                                                Edit
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-[2px]">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            RolesName.map((item, i) => (
                                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                                    <td className="px-6 py-4">
                                                        <div className='flex items-center'>

                                                            <h2 className='text-[#222B45] px-2 text-[12px] font-semibold'>{item}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className='flex items-center'>
                                                            <input type="checkbox" checked={type === "view" ? true :false } />

                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className='flex items-center'>
                                                            <input type="checkbox" checked={type === "view" ? true :false } />

                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className='flex items-center'>
                                                            <input type="checkbox" checked={type === "view" ? true :false } />

                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className='flex items-center'>
                                                            <input type="checkbox" checked={type === "view" ? true :false } />

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
                            <button type='submit' className='flex items-center w-fit px-5 py-2 text-white text-[16px]   rounded-lg bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>Add Role </button>
                            <button className='flex items-center w-fit px-5 py-2  text-[16px]   rounded-lg text-[#896CDD] ' type="button" onClick={setShow}>Cancel </button>

                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddRole