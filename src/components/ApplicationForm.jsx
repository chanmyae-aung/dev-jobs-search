import React from "react";
import { useSelector } from "react-redux";

export default function ApplicationForm() {
    const dark = useSelector((state) => state.dark.dark)
  return (
    <main className={`${dark ? "bg-[#303846]": "bg-slate-200"} md:w-[50%] absolute mx-auto p-10 rounded`}>
      <h1 className={`text-center mb-3`}>Application Form</h1>
      <form className={`flex text-sm flex-col gap-3 text-slate-700`}>
        <section className="flex gap-5 items-center">
        <div className={`w-[50%]`}>
          <label className="font-semibold">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter your name"
            className={`bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        <div className={`w-[50%]`}>
          <label className="font-semibold">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        </section>
        <section className="flex gap-5 items-center">
        <div className={`w-[50%]`}>
          <label className="font-semibold">Phone <span className="text-red-500">*</span></label>
          <input
            type="phone"
            placeholder="Enter your phone"
            className={`bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        <div className={`w-[50%]`}>
          <label className="font-semibold">Position <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter applied position"
            className={`bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        </section>
        <section className="flex gap-5 items-center">
        <div className={`w-[50%]`}>
          <label className="font-semibold">Portfolio <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter your portfolio link"
            className={`bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        <div className={`w-[50%]`}>
          <label className="font-semibold">Experiences </label>
          <input
            type="number"
            placeholder="Enter your experiences (year)"
            className={`bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        </section>
        <section className="flex gap-5 items-center">
        <div className={`w-[50%]`}>
          <label className="font-semibold">Expected Slary</label>
          <input
            type="text"
            placeholder="Expected slary"
            className={`bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        <div className={`w-[50%]`}>
          <label className="font-semibold">Upload CV <span className="text-red-500">*</span></label>
          <input
            type="file"
            className={`bg-white w-full py-3 rounded px-4 outline-none`}
          />
        </div>
        </section>
        <button className="px-5 mt-3 lg:px-5 py-2.5 h-fit mx-auto rounded text-white bg-blue-600 w-[50%] font-bold">
          Apply Now
        </button>
      </form>
    </main>
  );
}
