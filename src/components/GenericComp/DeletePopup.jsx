import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const DeletePopup = ({permition, Toggle}) => {
   const [show] = useState(permition)

    const handleClose = (info) => {
        if (info === "yes") {
            Toggle(false)
            // callback()
        }
        else {
            Toggle(false)

        }
    };


    return (
        <div>
            <Modal open={show} onClose={() => handleClose("no")} center>
                <div className='p-2 w-[300px] h-[250px]' >
                    <h1 className='text-[30px] font-bold'> Are You Sure! </h1>
                    <p className='text-[15px] font-samibold mt-2'> Your want to delete this. </p>
                    <div className='flex flex-col mt-5'>
                        <button onClick={() => handleClose("yes")} className='bg-gradient-to-r from-[#4965E0] to-[#896CDD] w-[100%] p-3  text-white'>Yes </button>
                        <button onClick={() => handleClose("no")} className=' bg-transparent text-[#4965E0] p-3 mt-3 border-[#4965E0] border'>No</button>
                    </div>
                </div>
            </Modal>


        </div >
    )
}

export default DeletePopup
