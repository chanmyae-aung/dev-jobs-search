import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import Button from "./Button";
import { useSelector } from "react-redux";

export default function SearchBar() {
  const [filter, setFilter] = useState(false);
  const dark = useSelector((state) => state.dark.dark);
  return (
    <main>
      <section className="hidden md:flex">
        <div className="relative w-full lg:w-[40%] rounded-l">
          <BsSearch className="text-primary absolute mx-4 top-[18px] " />
          <input
            type="text"
            className={`${
              dark ? "bg-[#374151] text-white" : "bg-white"
            } transition-all ease-linear duration-300 w-full rounded-l py-[14px] pl-12 pr-4 outline-none`}
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
        <div className={` relative w-full lg:w-[30%] border-x`}>
          <FaMapMarkerAlt className="text-primary absolute mx-4 top-[18px]" />
          <input
            type="text"
            className={`${
              dark ? "bg-[#374151] text-white" : "bg-white"
            } transition-all ease-linear duration-300 w-full py-[14px] pl-12 pr-4 outline-none`}
            placeholder="Filter by location..."
          />
        </div>
        <div
          className={`${
            dark ? "bg-[#374151] text-white" : "bg-white"
          } transition-all ease-linear duration-300 rounded-r z-50 flex items-center justify-between w-full lg:w-[30%] py-2 pl-4 pr-2 outline-none`}
        >
          <div className="flex gap-4">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="flex gap-1 cursor-pointer">
              Full time <span className="hidden xl:flex">only</span>
            </label>
          </div>
          <Button
            text={"Search"}
            className={"bg-blue-600 text-white font-bold px-4 py-1.5 rounded"}
          />
        </div>
      </section>
      {/* mobile view */}
      <div className="relative w-full md:hidden lg:w-[40%]">
        {!filter ? (
          <div>
            <BsSearch className="text-primary absolute mx-4 top-[18px] " />
            <input
              type="text"
              className={`${
                dark ? "bg-[#374151] text-white" : "bg-white"
              } transition-all ease-linear duration-300 w-full rounded py-[14px] pl-12 pr-4 outline-none`}
              placeholder="Filter by title, companies, expertise..."
            />
          </div>
        ) : (
          <div>
            <FaMapMarkerAlt className="text-primary absolute mx-4 top-[18px]" />
            <input
              type="text"
              className={`${
                dark ? "bg-[#374151] text-white" : "bg-white"
              } transition-all ease-linear duration-300 w-full rounded py-[14px] pl-12 pr-4 outline-none`}
              placeholder="Filter by location..."
            />
          </div>
        )}

        <FaFilter
          onClick={() => setFilter(!filter)}
          className={`${
            filter && "text-blue-600"
          } cursor-pointer text-lg text-slate-400 absolute mx-4 top-[18px] right-0`}
        />
      </div>
    </main>
  );
}
