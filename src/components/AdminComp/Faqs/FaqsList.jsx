import React, { useState } from 'react'
const FaqsList = () => {

    const [active, setActive] = useState(0)

    const list = [{ heading: "Where can I watch?" }, { heading: "Tempus magna risus interdum ultricies sed urna?" }, { heading: "Augue in nibh urna volutpat mattis?" }, { heading: "Eu egestas sed sed posuere ultrices ?" }, { heading: " Elementum facilisi aliquam, nisi, orci vulputate?" }, { heading: "Nibh at odio dolor etiam neque in vel id orci?" }, { heading: "Non dolor at velit lorem erat maecenas?" },]

    return (
        <>
            <div className=' bg-white rounded-md shadow-md border '>

                <div className='border-t p-3 mt-14'>
                    {
                        list.map((item, i) => (
                            <div onClick={() => setActive(i)} className='flex mb-3 pt-4 cursor-pointer' key={i}>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div className='px-3 border-b pb-2 w-full'>
                                    <h2  className='text-[18px] font-intr font-bold '>{item?.heading}</h2>

                                    <p className={`text-[16px] pt-3 font-normal ${active === i ? 'block  delay-100 ease-in-out' : 'hidden'}`}>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.</p>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </div>

        </>
    )
}

export default FaqsList