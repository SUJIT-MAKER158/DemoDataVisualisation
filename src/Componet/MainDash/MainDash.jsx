import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

function MainDash() {
  return (
    <React.Fragment>
    {/* Main dash section */}
      <div className='flex p-3 flex-col max-md:ml-9 justify-evenly max-xl:justify-start max-xl:mt-8 h-full w-full'>
        <p className='font-inter font-bold text-3xl'>DashBoard</p>
        <Cards/>
        <Table/>
      </div>
    </React.Fragment>
  )
}

export default MainDash
