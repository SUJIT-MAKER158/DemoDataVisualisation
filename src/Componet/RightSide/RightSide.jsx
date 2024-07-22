import React from 'react'
import Updates from '../Updates'// Importing the Updates component
import CustomerReview from '../CustomerReview' // Importing the CustomerReview component
function RightSide() {
  return (
    <div className='flex flex-col w-97   max-xl:justify-start max-xl:mt-8 justify-evenly'>{/* Container for the right side with flex and spacing */}
    <div>
    <h2 className="text-lg font-semibold mb-4">Updates</h2> {/* Heading for the Updates section */}
        <Updates/>{/* Rendering the Updates component */}
    </div>
    <div>
    <h2 className="text-lg font-semibold mb-4">Customer Review</h2>
        <CustomerReview/>{/* Rendering the CustomerReview component */}
    </div>
      
    </div>
  )
}

export default RightSide
