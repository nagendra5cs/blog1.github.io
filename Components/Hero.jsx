'use client'
import { useState } from "react";
import Services from "./Services";

export default function Hero() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  return (
    <>
      <div className="h-[550px] bg-blue-100 flex items-center justify-center font-serif">
        <div className=" max-w-4xl m-auto p-3 text-center">
          <h1 className="text-3xl text-gray-800 font-semibold sm:text-5xl lg:text-6xl lg:leading-tight">Lucknow&#39;s No. 1 <br /><span className=" text-blue-700">Cleaning Company</span></h1>
          <form className="mx-auto max-w-2xl bg-white mt-5 sm:flex sm:space-x-3 p-3 py-2 border rounded-lg shadow-lg shadow-gray-100">
            <input
              className=" w-full my-2 p-2 text-lg rounded-lg border border-gray-400 outline-none"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="w-full my-2 p-2 text-lg rounded-lg border border-gray-400 outline-none"
              type="tel"
              name="mobile"
              value={mobile}
              maxLength="10"
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile No."
            />
            <input
              className="w-full sm:max-w-[130px] my-2 p-2 text-lg rounded-lg cursor-pointer bg-blue-700 text-white"
              type="submit"
              value="Get Quote"
            />
          </form>
        </div>
      </div>
      <Services />
    </>
  )
}