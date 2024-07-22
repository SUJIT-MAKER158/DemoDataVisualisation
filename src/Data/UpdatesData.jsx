// Importing images from the Assets directory
import img1 from '../Assets/img1.png'
import img2 from '../Assets/img2.png'
import img3 from '../Assets/img3.png'
// Defining an array of objects to represent data for recent updates or notifications

export const UpdatesData=[
    {
    // Image associated with the update or notification
      img:img1,
      // Name of the person related to the update
      name:"Sujit Kumar",
      // Notification message describing the update
      noti:"has ordered Apple smart match 2500mh battery",
      // Time when the update occurred
      time:"25 second ago"
    },
    {
        img:img2,
        name:"Biswojit Kumar",
        noti:"has received Samsung gadget for charging battery",
        time:"45 second ago"
    },
    {
        img:img3,
        name:"Rahul pradhan",
        noti:"has ordered Apple smart watch,samsung Gear 2500mh battery",
        time:"2 hours  ago"
    }
]