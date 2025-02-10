import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
// import logo from "../../"

function AllCustomers() {



    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  const location =useLocation()
    useEffect(() => {
      fetchCustomers();
    }, []);
  
    const fetchCustomers = async () => {
      try {
        const response = await axios.post(
          'https://engine.flashbuild.ai/execute-flow/flow_5ffbd398-2742-44fd-ad91-91cd02095486',
          { userType: 'Customer' }
        );
        const data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        console.log("response",typeof response.data)
        setCustomers(data.result.customers);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };


    console.log("customers",customers)
    const navigation = [
        { name: "Customers", to:"/AllCustomers" },
        { name: "Guards", to:"/AllGuards" },
        { name: "Jobs", to: "/AllJobs" }, // Add a valid path
        // { name: "Booking Requests", href: "#" },
        { name: "Admin Profile", to:"" }
      ];

  
  return (
    <div>
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="CredNation Logo"
            
          />
        </div>

        <nav className="flex items-center gap-6">
          {navigation.map((item) => (
            <Link to={item?.to}
              key={item.name}
              href={item.href}
              className={`text-sm no-underline cursor-pointer ${
                item.name === "Admin Profile"
                  ? "bg-purple-700 text-white  px-4 py-2 rounded-md"
                  : location.pathname === item.to
                  ? "text-purple-500"
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
      {/* content */}
      <div className='mx-8  p-6  cdhbchdcbhdbhchdhd'>
         {/* header */}
         <div className='flex flex-col w-full      '>
            <div>
                <h2 className='text-[26px]'> All Customers </h2>
                </div>
                <div className=' flex mb-10 '>
                <div className=" w-[100%]   flex justify-between items-center gap-10 ">
                {/* <h2>Customers Data</h2> */}
                <div className="w-[40%] border border-purple-300 flex items-center gap-3 bg-[#1a1a1a] px-4 py-3 rounded-md">
  <input 
    type="text" 
    placeholder="Enter data here" 
    className="w-full outline-none bg-transparent text-white"
  />
  <div className="flex items-center text-gray-400">
    <IoSearch className="text-[22px]" />
  </div>
</div>

            </div>
            <div className='flex w-[50%]  justify-end items-center  gap-2'>

           <span className='text-white  text-[16px] '>Filter</span>
            <div className="relative ">
  <select className="outline-none w-full bg-[#1a1a1a] text-white text-[16px] px-1 py-2 pr-2  rounded-md border border-gray-600">
    <option>All Customers</option>
    <option>New Customers</option>
    <option>Returning Customers</option>
  </select>
 
</div>
</div>
                </div>
          

         </div>
         {/* table data */}

         <div className="   rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className='bg-[#1f1f2b]'>
                <tr className="text-sm text-left text-white">
                  <th className="px-6 py-5">Sr. No.</th>
                  <th className="px-6 py-4">Full Name</th>
                  <th className="px-6 py-4">Phone Number</th>
                  <th className="px-6 py-4"> Email</th>
                  <th className="px-6 py-4">Created Date </th>
                </tr>
              </thead>
              <tbody >
                {customers?.map((guard,index) => (
                  <tr key={guard.id} className="border-t border-gray-800">
                    <td   style={{
                        borderBottom:"1px solid #2d2d3a"

                      }} className="px-6 py-5">
                      <div className="flex items-center gap-3">
                      <span
                       className="text-gray-400">{index+1}</span>

               
                      </div>
                    </td>
                    <td 
                    style={{
                        borderBottom:"1px solid #2d2d3a"

                      }} className="px-6 py-5 text-gray-400">{guard.fullName}</td>
                    
                    <td
                      style={{
                        borderBottom:"1px solid #2d2d3a"

                      }} className="px-6 py-4 text-gray-400">{guard.phoneNumber}</td>

                     
                    <td
                      style={{
                        borderBottom:"1px solid #2d2d3a"

                      }} className="px-6 py-4 text-gray-400">{guard.email}</td>
                    <td
                      style={{
                        borderBottom:"1px solid #2d2d3a"

                      }} className="px-6 py-4 text-gray-400"> {guard && guard.createdDate && guard.createdDate.slice(0,10)}</td>

                   
                   
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center mt-10 justify-between px-6 py-4 border-t border-gray-800">
              <span className="text-sm text-gray-400">
                Showing 5 of 2845 Jobs
              </span>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-white transition-colors bg-purple-700 rounded-lg hover:bg-purple-600">
                  Previous
                </button>
                <button className="px-4 py-2 text-white transition-colors bg-purple-700 rounded-lg hover:bg-purple-600">
                  Next
                </button>
              </div>
            </div>
          </div>
      </div>
        </div>

  )
}

export default AllCustomers
