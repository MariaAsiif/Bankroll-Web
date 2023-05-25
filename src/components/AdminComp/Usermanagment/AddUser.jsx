import React from 'react'
import { MdClose } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    user_id: yup.string().required(),
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email("Invalid email format").required(),
    phone: yup.string().required(),
    role: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    c_password: yup.string().required(),
});

const AddUser = ({ type, setShow }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = () => { }

    return (
        <>
            <div className='xl:w-[750px] '>
                <div className='flex justify-between items-center border-b pb-2 '>
                    <h2 className='text-[17px] text-[#7869DD] font-sans font-medium'>{type === "view" ? "view Uer" : "Add User"}</h2>
                    <MdClose className='text-red-500 text-[20px] cursor-pointer' onClick={setShow} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='pt-5'>
                        {
                            type === "view" ?
                                <h2>User Id</h2>
                                :
                                <>
                                    <input type="text" {...register('user_id')} placeholder='User ID *' className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.user_id && 'border-red-500'}`} />
                                    {errors.user_id && (
                                        <p className="text-red-500 text-sm ">{errors.user_id.message}</p>
                                    )}
                                </>
                        }
                        <div className='grid xl:grid-cols-2 md:grid-cols-2 xl:gap-10 md:gap-10 gap-3 xl:pt-5 pt-3'>
                            <div>
                                {
                                    type === "view" ?
                                        <h2>First Name</h2>
                                        :
                                        <>
                                            <input type="text" placeholder='First Name *' {...register('fname')} className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.fname && 'border-red-500'}`} />
                                            {errors.fname && (
                                                <p className="text-red-500 text-sm ">{errors.fname.message}</p>
                                            )}
                                        </>
                                }
                            </div>
                            <div>
                                {
                                    type === "view" ?
                                        <h2>Last  Name</h2>
                                        :
                                        <>
                                            <input type="text" placeholder='Last Name *' {...register('lname')} className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.lname && 'border-red-500'}`} />
                                            {errors.lname && (
                                                <p className="text-red-500 text-sm ">{errors.lname.message}</p>
                                            )}
                                        </>
                                }
                            </div>
                        </div>
                        <div className='grid xl:grid-cols-3 md:grid-cols-3  gap-3 xl:pt-5  pt-3'>
                            <div>
                                {
                                    type === "view" ?
                                        <h2>Email</h2>
                                        :
                                        <>
                                            <input type="email" {...register('email')} placeholder='Email ID *' className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.email && 'border-red-500'}`} />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm ">{errors.email.message}</p>
                                            )}
                                        </>
                                }
                            </div>
                            <div>
                                {
                                    type === "view" ?
                                        <h2>Phone Number</h2>
                                        :
                                        <>
                                            <input type="tel" placeholder='Mobile No *' {...register('phone')} className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.user_id && 'border-red-500'}`} />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm ">{errors.phone.message}</p>
                                            )}
                                        </>
                                }
                            </div>
                            <div>
                                {
                                    type === "view" ?
                                        <h2>Role</h2>
                                        :
                                        <>
                                            <select {...register('role')} className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.role && 'border-red-500'}`}>
                                                <option type="">Select Role Type</option>
                                                <option>Super Admin</option>
                                                <option>Admin</option>
                                                <option>User</option>
                                                <option>Employee</option>
                                            </select>
                                            {errors.role && (
                                                <p className="text-red-500 text-sm ">{errors.role.message}</p>
                                            )}
                                        </>
                                }
                            </div>
                        </div>
                        <div className='grid xl:grid-cols-3 md:grid-cols-3 gap-3 xl:pt-5  pt-3'>
                            <div>
                                {
                                    type === "view" ?
                                        <h2>UserName</h2>
                                        :
                                        <>
                                            <input type="text"  {...register('username')} placeholder='Username *' className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.username && 'border-red-500'}`} />
                                            {errors.role && (
                                                <p className="text-red-500 text-sm ">{errors.role.message}</p>
                                            )}
                                        </>
                                }
                            </div>
                            <div>
                                {
                                    type === "view" ?
                                        <h2>Password</h2>
                                        :
                                        <>
                                            <input type="password" placeholder='Password *' {...register('password')} className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.user_id && 'border-red-500'}`} />
                                            {errors.password && (
                                                <p className="text-red-500 text-sm ">{errors.password.message}</p>
                                            )}
                                        </>
                                }
                            </div>
                            <div>
                                {
                                    type === "view" ?
                                        <h2>Confirm Password</h2>
                                        :
                                        <>
                                            <input type="password" {...register('c_password')} placeholder='Confirm Password *' className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.user_id && 'border-red-500'}`} />
                                            {errors.c_password && (
                                                <p className="text-red-500 text-sm ">{errors.c_password.message}</p>
                                            )}
                                        </>
                                }
                            </div>
                        </div>

                        {/* <div className='h-[40px]  bg-[#7869DD] bg-opacity-[0.1] mt-5'>
                            <h2 className='text-[#7869DD] text-[18px] pt-2 px-2'>Role Permission</h2>
                        </div> */}

                        {/* <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center mt-5 border-b pb-3'>
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
                        </div> */}

                        <div className='flex justify-end items-end mt-20'>
                            {type !== "view" &&
                                <button className='flex items-center w-fit px-5 py-2 text-white text-[16px]   rounded-lg bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>
                                    {type === "edit" ?
                                        "Update User"
                                        :
                                        "Add User"
                                    }
                                </button>
                            }
                            <button className='flex items-center w-fit px-5 py-2  text-[16px]   rounded-lg text-[#896CDD] ' type="button" onClick={setShow}>Cancel </button>

                        </div>
                    </div>
                </form >
            </div >

        </>
    )
}

export default AddUser