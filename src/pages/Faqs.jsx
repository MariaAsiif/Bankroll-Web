import React, { useState } from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import FaqsList from '../components/AdminComp/Faqs/FaqsList'
import Popup from '../utils/popup/Popup'
import AddFaqs from '../components/AdminComp/Faqs/AddFaqs'

const Faqs = () => {
    const [show, setShow] = useState(false)

    return (
        <>
          <Popup modalOpen={show} data={<AddFaqs setShow={() => setShow(false)} />} onClose={() => setShow(false)} />
            <FilterSection setShow={setShow} title={"Audit FAQ's"} buttonTitle={"Add New FAQ's"}/>
            <div className='mt-10'>
                <FaqsList />
            </div>

        </>
    )
}

export default Faqs