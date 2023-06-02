import React from 'react'
import mapImg from '../../assests/images/Huge Global.png'
const LocationMap = () => {
    return (
        <>
            <div className='lg:px-20 mx-5 mb-[4rem]'>
                <div className='text-center'>
                    <h2 className='text-[#181818] xl:text-[48px] md:text-[38px] text-[30px] font-semibold max-w-[700px] mx-auto'>We have creative users from around the world</h2>
                    <p className='text-[16px] pt-5 font-normal max-w-[950px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Tortor est urna risus eu enim. Vivamus in morbi elementum ultrices lectus non adipiscing. Arcu viverra dictum urna ut dolor sed dignissim aenean vel.</p>
                </div>

                <div className='pt-9'>
                    <img src={mapImg} alt="map" className="object-cover"/>
                </div>
            </div>
        </>
    )
}

export default LocationMap