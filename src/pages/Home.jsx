import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useGetJobsQuery } from "../redux/api/jobApi";
import Button from "../components/Button";

export default function Home() {
  const dark = useSelector(state => state.dark.dark)
  // const dark = JSON.parse(Cookies.get("dark"))
  // console.log(dark)
  const token = Cookies.get("token")

  const {data} = useGetJobsQuery(token)
  console.log(data?.data.data)
  return (
    <main className={`${dark ? 'bg-[#22262F] text-slate-200': 'bg-slate-100'} transition-all ease-linear duration-300 overflow-y-scroll h-screen`}>
      <Navbar />
      <div className=" md:px-20 lg:px-40 -mt-7">
        {/* <SearchBar /> */}
        <div className=" mt-28">
          <Card />
          <Button text={"Load More"} className={`bg-blue-600 text-white px-8 rounded my-5 mx-auto`}/>
        </div>
      </div>
    </main>
  );
}
