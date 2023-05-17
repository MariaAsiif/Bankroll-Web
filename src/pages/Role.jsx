import React, { useState } from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import RoleList from '../components/AdminComp/Rolemanagment/RoleList'
import Popup from '../utils/popup/Popup'
import AddRole from '../components/AdminComp/Rolemanagment/AddRole'

const RoleManagement = () => {
    const [show , setShow] = useState(false)
    return (
        <>
            <Popup modalOpen={show} data={<AddRole setShow={() => setShow(false)} />} onClose={() => setShow(false)} />
            <FilterSection setShow={setShow} title={"Role"} buttonTitle={"Add Role"} />
            <div className='mt-10'>
                <RoleList />
            </div>

        </>
    )
}

export default RoleManagement