import React from "react";
import {BsFillMoonFill, BsFillSunFill, BsSearch} from 'react-icons/bs'

export default function Navbar() {
  return (
    <main className="bg-blue-600 rounded-bl-[4rem] px-40">
      <section className=" text-white flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold italic pb-16 pt-8">devjobs</h1>
        </div>
        <div className="flex items-center">
            <BsFillSunFill/>
            <BsFillMoonFill/>
        </div>
      </section>
      <section>
        <div className="relative">
            <BsSearch className="text-primary absolute "/>
            <input type="text" className="rounded py-2 px-4" placeholder="Filter by title, companies, expertise..." />
        </div>
      </section>
    </main>
  );
}
