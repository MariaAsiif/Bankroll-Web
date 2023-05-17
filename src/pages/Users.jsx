import React from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import UsersList from '../components/AdminComp/Usersmanagment/UsersList'

const Users = () => {
    return (
        <>
            <FilterSection title={"Users"} buttonTitle={"Add Users"}/>
            <div className='mt-10'>
                <UsersList />
            </div>

        </>
    )
}

export default Users