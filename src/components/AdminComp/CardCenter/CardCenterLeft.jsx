import React from 'react'
import CardCenterChart from './Chart'
import RecentActivity from './RecentActivity'

const CardCenterLeft = () => {
    return (
        <>
            <div className='flex justify-between items-center p-8'>
                <h2 className='text-[#1A1A1A] font-semibold text-[16px]'>Money Status</h2>
                <select className='border focus:outline-none rounded-md py-2 px-2 text-[#7869DD] border-[#7869DD]'>
                    <option>Monthly</option>
                </select>
            </div>

            <div className='border-b pb-5'>
                <CardCenterChart />
            </div>

            <div className='pt-5'>
                <RecentActivity />
            </div>
        </>
    )
}

export default CardCenterLeft