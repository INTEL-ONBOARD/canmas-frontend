import React from 'react'
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';

import Header from '../components/Header';

function Dashboard() {

  const [activeTab, setActiveTab] = useState("home"); // State for current active tab
  

  return (
    <>
    {/*header */}
    <Header/>

    <div className="container flex ml-10 my-32">

      {/*sidebar */}
      <div className="flex flex-col justify-center bg-gradient-to-tl from-lime-700 to-green-200 gap-6 text-gray-700 rounded-full p-4">

          <Link to="/dashboard/home" 
            onClick={() => setActiveTab("home")} 
            className={`${activeTab === "home" ? "inline-flex justify-center text-black text-right  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-home  text-[24px]"></i>
          </Link>

          <Link to="/dashboard/products" 
            onClick={() => setActiveTab("products")}
            className={`${activeTab === "products" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-apple-whole  text-[24px]"></i>
          </Link>

          <Link to="/dashboard/clients" 
            onClick={() => setActiveTab("clients")}
            className={`${activeTab === "clients" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-user  text-[24px]"></i>
          </Link>

          <Link to="/dashboard/orders" 
            onClick={() => setActiveTab("orders")}
            className={`${activeTab === "orders" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-shopping-cart  text-[24px]"></i>
          </Link>

          <Link to="/dashboard/suppliers" 
            onClick={() => setActiveTab("suppliers")}
            className={`${activeTab === "suppliers" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-supplier-alt  text-[24px]"></i>
          </Link>

          <Link to="/dashboard/sales" 
            onClick={() => setActiveTab("sales")}
            className={`${activeTab === "sales" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-benefit-porcent  text-[24px]"></i>
          </Link>

          <Link to="/dashboard/reports" 
            onClick={() => setActiveTab("reports")}
            className={`${activeTab === "reports" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-file-medical-alt  text-[24px]"></i>
          </Link>

          <Link to="/dashboard/faqs" 
            onClick={() => setActiveTab("faqs")}
            className={`${activeTab === "faqs" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-comment-question  text-[24px]"></i>
          </Link>

          <Link to="/dashboard/settings" 
            onClick={() => setActiveTab("settings")}
            className={`${activeTab === "settings" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-settings  text-[24px]"></i>
          </Link>

          <div className='mt-5 mb-5'><hr /></div>

          <Link to="#" 
            onClick={() => setActiveTab("logout")}
            className={`${activeTab === "logout" ? "inline-flex justify-center text-black  rounded-full bg-gray-100" : "inline-flex justify-center rounded-full hover:text-gray-700 hover:bg-gray-100"}`}
          >
            <i className="px-2 fi fi-rs-arrow-left-from-arc rotate-180  text-[24px]"></i>
          </Link>

      </div>

      {/*outlet for tab section in the dashboard*/}
      <div className="">
        <Outlet /> 
      </div>
    </div>
    </>
    
    
  )
}

export default Dashboard