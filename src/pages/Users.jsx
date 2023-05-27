import React,{useState} from 'react'
import FilterSection from '../components/AdminComp/GenericComp/FilterSection'
import UsersList from '../components/AdminComp/Usersmanagment/UsersList'
import Popup from '../utils/popup/Popup'
import AddUsers from '../components/AdminComp/Usersmanagment/AddUsers'

const Users = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <Popup modalOpen={show} data={<AddUsers setShow={() => setShow(false)} />} onClose={() => setShow(false)} />

            <FilterSection setShow={setShow} title={"Users"} buttonTitle={"Add Users"}/>
            <div className='mt-10'>
                <UsersList />
            </div>

        </>
    )
}

export default Users