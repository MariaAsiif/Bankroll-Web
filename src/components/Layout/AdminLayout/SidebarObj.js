import {  FaUsers } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineLockClosed, HiOutlineUser, HiShoppingBag } from 'react-icons/hi'
import hom from '../../../assests/images/home.png'
import customer from '../../../assests/images/customer.png'
import contact from '../../../assests/images/contactIcon.png'
import feature from '../../../assests/images/featureIcon.png'
import faq from '../../../assests/images/faq.png'
import tax from '../../../assests/images/tax.png'
import ref from '../../../assests/images/reffer.png'
// import icon7 from '../../../assests/icon7.svg'
// import icon11 from '../../../assests/icon11.svg'
// import icon17 from '../../../assests/icon17.svg'
// import icon15 from '../../../assests/icon15.svg'
// import icon16 from '../../../assests/icon16.svg'
// import icon18 from '../../../assests/icon18.svg'

const SidebarObj = () => {
    return [
      {
        menuitems: [
          {
            label: 'Dashboard',
            leftIcon: <FaUsers size={22}/>,
            activeLeftIcon: (
              <FaUsers size={22}/>
            ),
            rightIcon: 'sadf',
            path: '/dashboard',
            pathname: '/dashboard',
            subMenuItems: [],
          },

          {
            label: 'User management',
            leftIcon: <FaUsers size={22}/>,
            activeLeftIcon: (
              <FaUsers size={22} className='text-[#4965E0]'/>
            ),
            rightIcon: 'sadf',
            path: '/usermanagment',
            pathname: 'usermanagment',
            subMenuItems: [
              {
                label: 'Permissions',
                leftIcon: <HiOutlineLockClosed className='text-[20px]'/>,
                activeLeftIcon: <HiOutlineLockClosed className='text-[#4965E0]'/>,
                path: '/permission',
                path: '/permission',
                subMenuItems: [],
              },
              {
                label: 'Roles',
                path: '/usermanagment/role',
                leftIcon: <HiShoppingBag className='text-[20px]'/>,
                activeLeftIcon: <HiShoppingBag className='text-[#4965E0]'/>,
                icon: "",
                subMenuItems: [],
              },
              {
                label: 'Users',
                leftIcon: <HiOutlineUser className='text-[20px]'/>,
                activeLeftIcon: <HiOutlineUser className='text-[#4965E0]'/>,
                path: '/usermanagment/users',
                icon: "",
                subMenuItems: [],
              },
              {
                label: 'Audit Logs',
                leftIcon: <HiOutlineDocumentText className='text-[20px]'/>,
                activeLeftIcon: <HiOutlineDocumentText className='text-[#4965E0]'/>,
                path: '/vehicalOwner',
                icon: "",
                subMenuItems: [],
              },
            ],
          },
          {
            label: 'Customer Management',
            leftIcon: <img src={customer} alt="icon" className='object-cover  w-[10%]' />,
            activeLeftIcon: (
              <img src={customer} alt="icon" className='object-cover  ' />
            ),
            
            rightIcon: 'sadf',
            path: '/customerRenter',
            pathname: '/customerRenter',
            subMenuItems: [
              
            ],
          },

          {
            label: 'Contact Details',
            leftIcon:<img src={contact} alt="icon" className='object-cover ' />,
            activeLeftIcon: (
              <img src={contact} alt="icon" className='object-cover  ' />
            ),
            rightIcon: 'sadf',
            path: '/globelRenter',
            pathname: 'globelRenter',
            subMenuItems: [
            
            ],
          },



          {

            label: 'Features',
            leftIcon: <img src={feature} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={feature} alt="icon" className='object-cover' />
            ),
            // 
            rightIcon: 'sadf',
            path: '/broadcast',
            pathname: 'broadcast',
            subMenuItems: [

            ],
          },

          {

            label: 'FAQs',
            leftIcon: <img src={faq} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={faq} alt="icon" className='object-cover' />
            ),
          
            rightIcon: 'sadf',
            path: '/manageRole',
            pathname: 'manageRole',
            subMenuItems: [

            ],
          },



          {
            label: 'Tax',
            leftIcon: <img src={tax} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={tax} alt="icon" className='object-cover' />
            ),
           
            rightIcon: 'sadf',
            path: '/management',
            pathname: 'management',
            subMenuItems: [

            ],
          },
          {
            label: 'Referral',
            leftIcon: <img src={ref} alt="icon" className='object-cover  ' />,
            activeLeftIcon: (
              <img src={ref} alt="icon" className='object-cover' />
            ),
            
            rightIcon: 'sadf',
            path: '/marketing',
            pathname: 'marketing',
            subMenuItems: [


            ],
          },
          
        ]

      }
    ];
 
};
export default SidebarObj;
