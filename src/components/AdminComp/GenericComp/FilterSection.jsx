import React from 'react'
import { BsPlus } from 'react-icons/bs'

const FilterSection = ({ title }) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <h2 className='text-[42px] text-[#7869DD]'>{title}</h2>
                <div className='flex items-center justify-between'>
                    <button className='flex items-center w-fit px-5 py-2 text-white text-[16px]   rounded-lg bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>Add User <BsPlus className='text-[20px] text-white' /></button>
                    <div className='mx-3'>
                        <select className='focus:outline-none border-0 ' >
                            <option>Sort by</option>
                        </select>
                    </div>
                    <div>
                        <select className='focus:outline-none border-0 ' >
                            <option>Saved search</option>
                        </select>
                    </div>
                </div>


            </div>
        </>
    )
}

export default FilterSection