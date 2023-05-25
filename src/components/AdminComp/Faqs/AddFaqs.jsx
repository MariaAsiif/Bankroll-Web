import React from 'react'
import { MdClose } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object({
    title: yup.string().required(),
    desc: yup.string().required()
})
const AddFaqs = ({ setShow }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    const onSubmit = () => {}


    // const Roles = [{}]
    return (
        <>
            <div className='xl:w-[750px] md:w-full w-[300px]'>
                <div className='flex justify-between items-center border-b pb-2 '>
                    <h2 className='text-[17px] text-[#7869DD] font-sans font-medium'>Add FAQs</h2>
                    <MdClose className='text-red-500 text-[20px] cursor-pointer' onClick={setShow} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='pt-5'>
                        <div>
                            <input type="text"  placeholder='Title' {...register('title')} className={`w-full border p-2 rounded-lg focus:outline-none ${errors?.title && 'border-red-500'}`} />
                            {errors.title && (
                                <p className="text-red-500 text-sm ">{errors.title.message}</p>
                            )}
                        </div>
                        <div>
                            <textarea type="text" {...register('desc')} placeholder='Description' className={`w-full border p-2 rounded-lg mt-6 focus:outline-none ${errors.desc && 'border-red-500'}`} rows={10} ></textarea>
                            {errors.desc && (
                                <p className="text-red-500 text-sm ">{errors.desc.message}</p>
                            )}
                        </div>



                        <div className='flex justify-end items-end mt-20'>
                            <button className='flex items-center w-fit px-5 py-2 text-white text-[16px]   rounded-lg bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>Add FAQs </button>
                            <button className='flex items-center w-fit px-5 py-2  text-[16px]   rounded-lg text-[#896CDD] ' type="button" onClick={setShow}>Cancel </button>

                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddFaqs