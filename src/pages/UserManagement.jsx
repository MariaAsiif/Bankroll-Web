import React, { useState } from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import UserList from '../components/AdminComp/Usermanagment/UserList'
import Popup from '../utils/popup/Popup'
import AddUser from '../components/AdminComp/Usermanagment/AddUser'

const UserManagement = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <Popup modalOpen={show} data={<AddUser setShow={() => setShow(false)} />} onClose={() => setShow(false)} />
            <FilterSection setShow={setShow} title={"User Management"} buttonTitle={"Add User"} />
            <div className='mt-10'>
                <UserList />
            </div>

        </>
    )
}

export default UserManagement