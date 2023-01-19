import React from 'react'
import control from '../../assests/images/control.png'
const Control = () => {
  return (
    <>

      <div className='bg-control-img bg-cover bg-no-repeat h-[900px] mt-[30rem]'>
        <div className='flex justify-between'>
          <img src={control} className='w-[60%]' alt="control" />
          <div className='mt-[3rem]'>
            <h2 className='text-[2rem]'>Complete control of your money</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Control