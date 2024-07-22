// Importing icons from the react-icons library
import { MdOutlineDashboardCustomize, MdProductionQuantityLimits } from "react-icons/md";
import { TbDatabaseExport, TbFileAnalytics } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
// Defining an array of objects to represent data for the sidebar menu
 export const SidebarData=[
    {
       // Icon component for the sidebar item
        icon:MdOutlineDashboardCustomize,
        // Heading text for the sidebar item
        heading:"Dashboard"
    },
    {
        icon:TbDatabaseExport,
        heading:"Orders"
    },
    {
     icon:IoMdContacts,
      heading:"Customers"   
    },
    {
      icon:MdProductionQuantityLimits,
      heading:"Products"
    },
    {
         icon:TbFileAnalytics,
      heading:"Analytics"
    }
 ]