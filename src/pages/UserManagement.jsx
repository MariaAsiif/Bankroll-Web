import React from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import UserList from '../components/AdminComp/Usermanagment/UserList'

const UserManagement = () => {
    return (
        <>
            <FilterSection title={"User Management"}/>
            <div className='mt-10'>
                <UserList />
            </div>

        </>
    )
}

export default UserManagement