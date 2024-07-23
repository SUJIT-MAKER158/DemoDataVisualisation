// import React from 'react'
// import { useState } from 'react';
// import logo from '../Assets/logo (2).png'//logo of my shop
// import { SidebarData } from '../Data/SidebarData'//the data which is used in this section
// import { LiaSignOutAltSolid } from "react-icons/lia";//React icons which is used in this section
// import { HiOutlineBars4 } from "react-icons/hi2";
// function Sidebar() {
//     const [activeIndex, setActiveIndex] = useState(0); // Default to the first item
//     const [expanded,setExpanded]=useState(false);
//     return (
//         <React.Fragment>
//             <div>
//              <HiOutlineBars4 />
//              </div>
//             <div className='flex flex-col max-md:fixed max-md:z-10 max-md:bg-red-200 max-md:w-1/2 max-md:pr-4 max-md:h-full
//              relative pt-12  transition-all duration-300 ease-in-out'>
//                 {/* logo */}
//                 <div className='flex gap-4 font-bold font-inter max-md:ml-8 max-xl:hidden max-md:block text-lg justify-center items-center '>
//                     <img className='h-12 w-12 ' src={logo} alt='image not found ' />
//                     <span className=''>
//                         Sh<span className='text-pink '>o</span>ps
//                     </span>
//                 </div>
//                 {/* menu  item */}
//                 <div className='flex flex-col font-inter font-medium relative  mt-16 gap-12 
//                 transition-all duration-300 ease-in'>
//                     {
//                         SidebarData.map((item, index) => {//map methid for retrive data
//                             const isActive = index === activeIndex;//condition for active
//                             return(
//                                     <div key={index}
//                                     className={`
//                                     ${isActive ? ' flex ml-1 rounded-lg h-9 w-auto items-center gap-3 cursor-pointer pl-2 bg-activeItem':
//                                      'flex ml-9 rounded-lg h-9 w-auto items-center gap-3 cursor-pointer'}`
//                                      }
//                                     onClick={() => setActiveIndex(index)}>
//                                         <div >
//                                             <item.icon size={24} className='max-md:block'/>
//                                         </div>
//                                         <span className='max-xl:hidden max-md:block'>{item.heading}</span>
//                                     </div>
//                                    )
//                               })
//                          }
//                          <div className='mt-14 ml-8 max-md:block max-md:-mt-3 cursor-pointer'>
//                            <LiaSignOutAltSolid size={32}/>
//                          </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

// export default Sidebar
// second
import React, { useState } from 'react';
import logo from '../Assets/logo (2).png'; // logo of my shop
import { SidebarData } from '../Data/SidebarData'; // the data which is used in this section
import { LiaSignOutAltSolid } from "react-icons/lia"; // React icons which is used in this section
import { HiOutlineBars4} from "react-icons/hi2"; // Importing close icon
import { HiOutlineX }    from "react-icons/hi";

function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0); // Default to the first item
    const [expanded, setExpanded] = useState(false); // State to control sidebar visibility

    return (
        <React.Fragment>
            {/* Toggle button for sidebar */}
            <div className={`fixed top-4 left-4 z-20 p-2 bg-rose-300 rounded-md max-3xl:hidden max-xl:hidden max-md:${expanded ? 'hidden' : 'block'}`}  onClick={() => setExpanded(true)}>
                <HiOutlineBars4 size={24} className="text-white" />
            </div>
            {/* Sidebar */}
            <div className={`flex flex-col max-md:fixed max-md:z-10 max-md:bg-red-200 max-md:w-1/2 max-md:pr-4 max-md:h-full relative pt-12 transition-all duration-300 ease-in-out  max-md:${expanded ? 'block' : 'hidden'}`}>
                {/* Close button for sidebar */}
                <div className={`fixed top-4 right-4 z-20 p-2 max-3xl:hidden  max-xl:hidden bg-rose-300 rounded-lg max-md:${expanded ? 'block' : 'hidden'}`} onClick={() => setExpanded(false)}>
                    <HiOutlineX size={24} className="text-white" />
                </div>
                {/* Logo */}
                <div className='flex gap-4 font-bold font-inter max-md:ml-8 max-xl:hidden max-md:block text-lg justify-center items-center '>
                    <img className='h-12 w-12 ' src={logo} alt='image not found ' />
                    <span className=''>
                        Sh<span className='text-pink '>o</span>ps
                    </span>
                </div>
                {/* Menu item */}
                <div className='flex flex-col font-inter font-medium relative mt-16 gap-12 transition-all duration-300 ease-in'>
                    {
                        SidebarData.map((item, index) => { // map method for retrieving data
                            const isActive = index === activeIndex; // condition for active
                            return (
                                <div key={index}
                                    className={`
                                    ${isActive ? ' flex ml-1 rounded-lg h-9 w-auto items-center gap-3 cursor-pointer pl-2 bg-activeItem':
                                     'flex ml-9 rounded-lg h-9 w-auto items-center gap-3 cursor-pointer'}`
                                    }
                                    onClick={() => setActiveIndex(index)}>
                                    <div>
                                        <item.icon size={24} className='max-md:block' />
                                    </div>
                                    <span className='max-xl:hidden max-md:block'>{item.heading}</span>
                                </div>
                            )
                        })
                    }
                    <div className='mt-14 ml-8 cursor-pointer max-md:block max-md:-mt-3'>
                        <LiaSignOutAltSolid size={32} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;




