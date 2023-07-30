import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

export default function Home() {
  const dark = useSelector(state => state.dark.dark)
  // console.log(dark)
  return (
    <main className={`${dark ? 'bg-[#22262F] text-slate-200': 'bg-slate-100'} transition-all ease-linear duration-300 h-screen`}>
      <Navbar />
      <div className="px-20 lg:px-40 -mt-7">
        <SearchBar />
        <div className=" mt-10">
          <Card />
        </div>
      </div>
    </main>
  );
}
