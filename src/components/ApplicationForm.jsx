import React from "react";
import { useSelector } from "react-redux";
import {RxCross1} from 'react-icons/rx'

export default function ApplicationForm({toggleModal}) {
    const dark = useSelector((state) => state.dark.dark)
  return (
    <main className={`${dark ? "bg-[#303846]": "bg-slate-200"} h-screen w-screen md:h-fit md:w-[80%] lg:w-[50%] absolute mx-auto p-10 rounded`}>
        {/* <button  className="flex justify-end w-full">
            <RxCross1/>
        </button> */}
      <h1 className={`${dark && "text-slate-50"} text-center mb-3`}>Application Form</h1>
      <form className={`flex w-full text-sm flex-col gap-3 ${dark ? "text-slate-300": "text-slate-700"}`}>
        <section className="flex flex-col md:flex-row gap-5 items-center">
        <div className={`md:w-[50%]`}>
          <label className="font-semibold">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter your name"
            className={`${dark && "bg-slate-700"} bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        <div className={`md:w-[50%]`}>
          <label className="font-semibold">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`${dark && "bg-slate-700"} bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        </section>
        <section className="flex flex-col md:flex-row gap-5 items-center">
        <div className={`md:w-[50%]`}>
          <label className="font-semibold">Phone <span className="text-red-500">*</span></label>
          <input
            type="phone"
            placeholder="Enter your phone"
            className={`${dark && "bg-slate-700"} bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        <div className={`md:w-[50%]`}>
          <label className="font-semibold">Position <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter applied position"
            className={`${dark && "bg-slate-700"} bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        </section>
        <section className="flex flex-col md:flex-row gap-5 items-center">
        <div className={`md:w-[50%]`}>
          <label className="font-semibold">Portfolio <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter your portfolio link"
            className={`${dark && "bg-slate-700"} bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        <div className={`md:w-[50%]`}>
          <label className="font-semibold">Experiences </label>
          <input
            type="number"
            placeholder="Enter your experiences (year)"
            className={`${dark && "bg-slate-700"} bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        </section>
        <section className="flex flex-col md:flex-row gap-5 items-center">
        <div className={`md:w-[50%]`}>
          <label className="font-semibold">Expected Slary</label>
          <input
            type="text"
            placeholder="Expected slary"
            className={`${dark && "bg-slate-700"} bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        <div className={`md:w-[50%]`}>
          <label className="font-semibold">Upload CV <span className="text-red-500">*</span></label>
          <input
            type="file"
            className={` w-full py-2 rounded px-4 outline-none`}
          />
         </div>
        </section>
        <div className="flex  gap-5">
        <button type="button" onClick={toggleModal} className="px-5 mt-3 lg:px-5 py-2.5 h-fit mx-auto rounded border bg-blue-50 border-blue-600 text-blue-600 w-[50%] font-bold">
          Cancel
        </button>
        <button type="submit" className="px-5 mt-3 lg:px-5 py-2.5 h-fit mx-auto rounded text-white bg-blue-600 w-[50%] font-bold">
          Apply Now
        </button>
        </div>
      </form>
    </main>
  );
}
