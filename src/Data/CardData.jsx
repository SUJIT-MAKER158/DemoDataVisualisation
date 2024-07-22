// Importing icons from the react-icons library
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { GiExpense } from "react-icons/gi";
// Defining an array of objects to represent data for different cards
export const CardsData = [
  {
    // Title of the card
    title: "Sales",
    // Color configuration for background and shadow
    color: {
      background:"bg-purple-500", // Background color class for Tailwind CSS
      shadow:"shadow-purple-300"// Shadow color class for Tailwind CSS
    },
     // Value for the progress bar
    barvalue: 70,
     // Display value for the card
    value: "25,970",
     // Icon to be used in the card
    png: RiMoneyDollarBoxFill,
    // Series data for a chart
    series: [
      {
        name: "sales",
        data: [31, 40, 28, 52, 42, 109, 100]// Data points for the chart
      }
    ]
  },
  {
    title: "Revenue",
    color: {
      background:"bg-pink",
      shadow:"shadow-rose-300"
    },
    barvalue: 80,
    value: "14,270",
    png: GrMoney,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40]
      }
    ]
  },
  {
    title: "Expense",
    color: {
      background:"bg-yellow-300",
      shadow:"shadow-yellow-200"
    },
    barvalue: 60,
    value: "4,270",
    png: GiExpense,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20]
      }
    ]
  }
];
