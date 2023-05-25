import React,{useState} from 'react'
import EditDeleteViewButtons from '../../GenericComp/EditDeleteViewButtons';
import Popup from '../../../utils/popup/Popup'
// import DeletePopup from '../../GenericComp/DeletePopup'
// import AddUser from './AddUser'
const UsersList = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
    const [popuptype , setPopuptype] = useState("")
    const [show , setShow] = useState(false)

    const handleClick = (type)=> {
        setShow(true)
        setPopuptype(type)
    }

    // let type = popuptype === "delete" ? <DeletePopup permition={popuptype} Toggle={setPopuptype} /> : <AddUser type={popuptype} /> 

    return (
        <>

        {/* { show && <Popup modalOpen={show} onClose={() => setShow(false)} data={type} /> }  */}
            <div className=' bg-white rounded-md shadow-md border '>
                <div className="overflow-x-auto  mt-6">
                    {
                        // currentItems.length > 0 ?
                        <>
                            <table className="table-auto w-full ">
                                {/* Table header */}
                                <thead className="text-xs font-medium h-[50px]  bg-gradient-to-r from-[#4965E0] to-[#896CDD]    border-b border-slate-200">
                                    <tr className='text-white'>

                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                            <div className="font-medium text-[14px] text-left"></div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                            <div className="font-medium text-[14px] text-left"> User ID </div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-center">User Name </div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-left">Email</div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-left">Account No</div>
                                        </th>

                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-left">Status  </div>
                                        </th>
                                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                            <div className="font-medium text-[14px] text-center">Action  </div>
                                        </th>

                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm ">
                                    {
                                        items.map((_, i) =>
                                            <tr className=' cursor-pointer  ' >
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap pr-5">
                                                    <input type="checkbox" />
                                                </td>
                                                <td className="px-2 first:pl-5 flex items-center last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989] px-1">1234</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className=" flex-col text-[14px] text-[#898989] px-1">
                                                        <div className='flex justify-center  flex-col items-center  '>
                                                            <h2 className='text-[13px] text-left text-[#222B45] font-semibold font-sans'>David Wagner</h2>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989] px-1">tranthuy.nute@gmail.com</div>
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-left text-[14px] text-[#898989] px-1">245715874815</div>
                                                </td>

                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <div className="text-center p-1 w-[80%] text-[14px] text-white  rounded-full bg-gradient-to-r from-[#4965E0] to-[#896CDD] ">
                                                        Active</div>
                                                </td>

                                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                    <EditDeleteViewButtons setShow={setShow} />
                                                </td>


                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>



                        </>
                        // :
                        // <div className='p-5 '>
                        //     <h2>Record not found</h2>
                        // </div>
                    }




                </div>

            </div>

        </>
    )
}

export default UsersList