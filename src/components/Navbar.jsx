import React, { useState } from "react";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import Switch from "./Switch";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function Navbar() {
  const dark = useSelector((state) => state.dark.dark)
  // const dark = Cookies.get("dark")
  console.log(dark)
  return (
    <main className={` ${dark ? 'bg-[#333A45]': 'bg-blue-600'} transition-all ease-linear duration-300 sticky top-0 lg:rounded-bl-[4rem] px-5 md:px-20 lg:px-40 h-[120px]`}>
      <section className=" text-white flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl font-bold italic py-8">devjobs</h1>
        </div>
        <div className="flex items-center">
          <BsFillSunFill />
          <Switch />
          <BsFillMoonFill />
        </div>
      </section>
    </main>
  );
}
