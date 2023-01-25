import React, { useState } from 'react'

const Query = () => {
    const [active, setActive] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const lists = ["Does the card work for international purchases?", "Do you offer a payment gateway?", "Do you provide virtual cards?"]
    return (
        <>
            <div className='max-w-[700px] lg:m-auto mx-5 !mt-[7rem] !mb-[3rem] '>
                <hr />
                <div className='flex justify-center mt-7'>
                    <button className='border text-white rounded-full text-[17px] bg-gradient-to-l to-[#4965E0] from-[#896CDD] w-[20%] py-1'>F.A.Q</button>
                </div>
                <div className='text-center pt-7'>
                    <h2 className='text-[#1E2022] lg:text-[32px] md:text-[30px] text-[25px] font-roboto font-semibold'>Frequently Asked Questions</h2>
                    <p className='text-[#77838F] font-medium pt-3 font-roboto text-[17px] leading-[27px] max-w-[400px] m-auto'>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>
                </div>

                <div className=' pt-7 px-[4rem]'>
                    <ul className='list-disc flex flex-wrap justify-between text-[20px] font-medium'>
                        <li className={`${activeIndex === 0 && 'text-[#4965E0]'} cursor-pointer`} onClick={() => setActiveIndex(0)}>Features</li>
                        <li className={`${activeIndex === 1 && 'text-[#4965E0]'} cursor-pointer`} onClick={() => setActiveIndex(1)} >Payment & Charges</li>
                        <li className={`${activeIndex === 2 && 'text-[#4965E0]'} cursor-pointer`} onClick={() => setActiveIndex(2)} >Security</li>
                    </ul>
                </div>
                {
                    lists.map((item, i) => (

                        <div className='border mt-[2rem] p-5 rounded-md cursor-pointer' key={i} onClick={() => setActive(i)}>
                            <h2 className={` ${active === i && 'text-[#4965E0]'} p-3 text-[18px] font-medium`}>{item}</h2>
                            {
                                active === i &&
                                <div>
                                    <hr />
                                    <p className='text-[#77838F] font-roboto text-[17px] leading-7 pt-4 font-medium '>
                                        Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.

                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum.
                                    </p>
                                </div>
                            }

                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default Query
