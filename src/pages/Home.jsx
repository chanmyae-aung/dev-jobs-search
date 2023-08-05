import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import JobCard from "../components/JobCard";
import Card from "../components/Card";

export default function Home() {
  const dark = useSelector((state) => state.dark.dark);
  const token = Cookies.get("token");
  return (
    <main
      className={`${
        dark ? "bg-[#22262F] text-slate-200" : "bg-slate-100"
      } transition-all ease-linear duration-300 overflow-y-scroll h-screen`}
    >
      <Navbar />
      <div className=" md:px-20 lg:px-40 -mt-7">
        {/* <SearchBar /> */}
        <div className=" mt-28">
          <Card />
          {/* <JobCard/> */}
        </div>
      </div>
    </main>
  );
}
