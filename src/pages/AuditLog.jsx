import React from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import UsersList from '../components/AdminComp/Usersmanagment/UsersList'

const AuditLogs = () => {
    return (
        <>
            <FilterSection title={"Audit Logs"}/>
            <div className='mt-10'>
                <UsersList />
            </div>

        </>
    )
}

export default AuditLogs