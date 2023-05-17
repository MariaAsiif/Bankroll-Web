import React from 'react'
import { MdClose } from 'react-icons/md'

const AddFaqs = ({ setShow }) => {

    // const Roles = [{}]
    return (
        <>
            <div className='w-[750px]'>
                <div className='flex justify-between items-center border-b pb-2 '>
                    <h2 className='text-[17px] text-[#7869DD] font-sans font-medium'>Add FAQs</h2>
                    <MdClose className='text-red-500 text-[20px] cursor-pointer' onClick={setShow} />
                </div>

                <div className='pt-5'>
                <input type="text" placeholder='Title' className='w-full border p-2 rounded-lg focus:outline-none' />
                <textarea type="text" placeholder='Description' className='w-full border p-2 rounded-lg mt-6 focus:outline-none' rows={10} ></textarea>



                 

                    <div className='flex justify-end items-end mt-20'>
                        <button className='flex items-center w-fit px-5 py-2 text-white text-[16px]   rounded-lg bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>Add FAQs </button>
                        <button className='flex items-center w-fit px-5 py-2  text-[16px]   rounded-lg text-[#896CDD] '>Cancel </button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AddFaqs