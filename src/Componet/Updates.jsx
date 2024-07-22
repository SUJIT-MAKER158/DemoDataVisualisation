import React from 'react'
import { UpdatesData } from '../Data/UpdatesData'// Importing the updates data from the specified path
function Updates() {

    return (
        <div className='bg-white rounded-lg shadow-md p-6'>
            {
                UpdatesData.map((data, id) => {// Iterating over the UpdatesData array
                    return (
                        <div className="flex items-center space-x-3">{/* Flex container for layout with space between items */}
                            <img src={data.img} alt={data.name} className="w-12 h-12 rounded-full" />{/* User image with styling */}
                            <div>
                                <p className="font-bold">{data.name} <span className="font-normal">{data.noti}</span></p>{/* Notification text */}
                                <p className="text-gray-500 text-sm">{data.time}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Updates
