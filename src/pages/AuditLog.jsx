import React from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import AuditList from '../components/AdminComp/Auditsmanagment/AuditList'

const AuditLogs = () => {
    return (
        <>
            <FilterSection title={"Audit Logs"} buttonTitle={"Add Audit Log"}/>
            <div className='mt-10'>
                <AuditList />
            </div>

        </>
    )
}

export default AuditLogs