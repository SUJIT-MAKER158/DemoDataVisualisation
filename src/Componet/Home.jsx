import React from 'react'
import Sidebar from './Sidebar'
import MainDash from './MainDash/MainDash'
import RightSide from './RightSide/RightSide'
// this is the main section where all our section combined to show a page
export default function Home() {
  return (
    <React.Fragment>
    {/* this is the parent div */}
    <div className=' bg-gradient-to-r from-gradiant1 to-gradiant2 h-screen w-screen flex
    justify-center items-center'>
    {/* this is the div where we keep all our section */}
    <div className='h-97 w-97 max-xl:overflow-y-scroll max-md:flex-col rounded-3xl max-md:scrollbar-none  bg-glass overflow-hidden flex'>
    {/* sidebar section */}
    <div className='max-xl:w-11 max-md:flex-1  w-44 '>
     <Sidebar/>
    </div>
    {/* center section */}
    <div className=' max-xl:w-51 max-md:flex-1 flex-1'>
     <MainDash/>
    </div>
    {/* Rightside Section */}
    <div className='max-xl:w-auto max-md:flex-1 w-80'>
     <RightSide/>
    </div> 
    </div> 
    </div>
    </React.Fragment>
  )
}
