import React from 'react'

function Table() {
    const orders = [
        {
          product: "chicken lollypop",
          trackingId: "18908424",
          date: "17 july 2024",
          status: "Approved"
        },
        {
          product: "Big Baza Bang",
          trackingId: "18908424",
          date: "17 july 2024",
          status: "Pending"
        },
        {
          product: "Mouth Freshner",
          trackingId: "18908424",
          date: "17 july 2024",
          status: "Approved"
        },
        {
          product: "Cupcake",
          trackingId: "18908421",
          date: "17 july 2024",
          status: "Delivered"
        },
       
      ];
      const getStatusClass = (status) => {
        switch (status) {
          case "Approved":
            return "bg-green-200 font-bold  text-green-800";
          case "Pending":
            return "bg-red-200 font-bold text-red-800";
          case "Delivered":
            return "bg-blue-200 font-bold text-blue-800";
          default:
            return "";
        }
      };
  return (
    <div className='flex flex-col max-xl:mt-8 max-xl:w-180'>
    <h1 className="text-2xl font-semibold mb-4">Recent Orders</h1>
    <div className="overflow-x-auto rounded-xl">
    <table className="min-w-full bg-white  border-none shadow-xl shadow-white ">
      <thead>
        <tr className="text-left border-none ">
          <th className="p-5 ">Product</th>
          <th className="p-5 ">Tracking ID</th>
          <th className="p-5 ">Date</th>
          <th className="p-5 ">Status</th>
          <th className="p-5 "></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index} className="border-none">
            <td className="p-5 ">{order.product}</td>
            <td className="p-5 ">{order.trackingId}</td>
            <td className="p-5 ">{order.date}</td>
            <td className="p-5 ">
              <span
                className={`px-2 py-1 rounded ${getStatusClass(order.status)}`}
              >
                {order.status}
              </span>
            </td>
            <td className="p-5  text-blue-500 font-semibold  cursor-pointer">Details</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  )
}

export default Table
