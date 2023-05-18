import React from 'react'
import { BsPlus } from 'react-icons/bs'
import list from '../../../assests/images/bars.png'
const FilterSection = ({ title, buttonTitle, setShow }) => {
    return (
        <>
            <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center'>
                <h2 className='xl:text-[42px] text-[30px] text-[#7869DD]'>{title}</h2>
                <div className='flex  items-center justify-between'>
                    <button onClick={() => setShow(true)} className='flex items-center w-fit xl:px-5 md:px-5 px-2  py-2 text-white xl:text-[16px] text-[14px]   rounded-lg bg-gradient-to-r from-[#4965E0] to-[#896CDD] '>{buttonTitle} <BsPlus className='text-[20px] text-white' /></button>
                    <div className='xl:mx-3 md:mx-3 mx-1'>
                        <select className='focus:outline-none border-0 ' >
                            <option>Sort by</option>
                        </select>
                    </div>
                    <div>
                        <select className='focus:outline-none border-0 ' >
                            <option>Saved search</option>
                        </select>
                    </div>
                    <div className='xl:mx-3 md:mx-3 mx-2'>
                        <img src={list} alt="list" className='object-cover' />
                    </div>
                </div>


            </div>
        </>
    )
}

export default FilterSection