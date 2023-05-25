import React from 'react'
import { BsEye } from 'react-icons/bs';
import { MdDelete, MdEdit } from 'react-icons/md';
const EditDeleteViewButtons = ({handleClick}) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <BsEye onClick={() => handleClick('view')} className='text-[20px] text-[#C2C2C2]' />
                <MdEdit onClick={() => handleClick('edit')} className='text-[20px] text-[#C2C2C2]' />
                <MdDelete onClick={() => handleClick('delete')}  className='text-[20px] text-red-500' />
            </div>
        </>
    )
}

export default EditDeleteViewButtons