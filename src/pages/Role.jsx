import React from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import RoleList from '../components/AdminComp/Rolemanagment/RoleList'

const RoleManagement = () => {
    return (
        <>
            <FilterSection title={"Role"} />
            <div className='mt-10'>
                <RoleList />
            </div>

        </>
    )
}

export default RoleManagement