import React, { useState } from "react";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import Switch from "./Switch";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import UserProfile from "./UserProfile";
import SearchBar from "./SearchBar";
import { useGetUserProfileQuery } from "../redux/api/authApi";
import { useGetDetailQuery } from "../redux/api/jobApi";

export default function Navbar({hide, id}) {
  // const dark = JSON.parse(Cookies.get("dark"))
  const token = Cookies.get("token")
  const dark = useSelector(state => state.dark.dark)
  const showHero = useSelector((state) => state.jobSlice.hero)
  const hideSearch = useSelector((state) => state.jobSlice.hideSearch)
  console.log(hideSearch)
  const { data, isLoading } = useGetDetailQuery({ token, id });
  const { data: user } = useGetUserProfileQuery(token);

  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <main
      className={` ${
       !showHero && dark ? "bg-[#333A45]" : `${ showHero && !id ? "bg-transparent" : "bg-blue-600"}`
      } transition-all ease-linear w-full duration-300 sticky top-0 z-10 lg:rounded-bl-[4rem] px-5 md:px-20 lg:px-40 h-[120px]`}
    >
      <section className=" text-white flex items-center justify-between">
        <div>
          <h1 className={`${showHero ? "text-blue-600" : "text-white"} text-xl font-bold italic py-8`}>devjobs</h1>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <BsFillSunFill />
            <Switch />
            <BsFillMoonFill />
          </div>
          <div className="relative">
            <div onClick={toggleShow}
              className={`bg-orange-500 w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer`}
            >
              {user?.data.profile_image ? (
                <img
                  className="w-full h-full rounded-full"
                  src={user?.data.profile_image}
                />
              ) : (
                <h2 className="font-bold">
                  {user?.data.name.charAt(0).toUpperCase()}
                </h2>
              )}
            </div>
            <div className={`${show ? "scale-x-1": "scale-x-0"} origin-right transition-all duration-300 absolute z-50 shadow-lg top-12 rounded right-0`}>
              <UserProfile />
            </div>
          </div>
        </div>
      </section>
      <div className={`${(hide || showHero || hideSearch) && "hidden"}`}>
        <SearchBar/>
      </div>
      <section
          className={`${ !id && "hidden"} ${
            dark ? "bg-[#374151] text-slate-200" : "bg-white"
          } transition-all ease-linear flex items-center duration-300 lg:w-[65.5%] mx-auto sticky z-10 top-[88px] shadow-sm left-0 right-0 lg:rounded -mt-4 overflow-hidden`}
        >
          <div className={`flex items-center w-full`}>
            <div className="bg-orange-500 w-16  md:w-24 h-16  md:h-24">
              <img
                // onClick={handleDownload}
                className="w-full h-full object-cover"
                src={data?.data.company.image}
                alt=""
              />
            </div>
            <div className="w-[85%] flex items-center justify-between px-3 md:px-8">
              <div className="">
                <h4 className="text-lg font-bold">{data?.data.company.name}</h4>
                <p>{data?.data.company.email}</p>
              </div>
              <a
                href={data?.data.company.website}
                className="px-5 py-2.5 h-fit rounded bg-blue-50 text-blue-600 text-sm font-bold"
              >
                Company Site
              </a>
            </div>
          </div>
        </section>
    </main>
  );
}
