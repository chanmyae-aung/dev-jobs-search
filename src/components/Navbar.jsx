import React, { useState } from "react";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import Switch from "./Switch";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import UserProfile from "./UserProfile";
import SearchBar from "./SearchBar";
import { useGetUserProfileQuery } from "../redux/api/authApi";

export default function Navbar({hide}) {
  // const dark = JSON.parse(Cookies.get("dark"))
  const dark = useSelector(state => state.dark.dark)
  console.log(dark)
  const token = Cookies.get("token")
  const { data: user } = useGetUserProfileQuery(token);

  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <main
      className={` ${
        dark ? "bg-[#333A45]" : "bg-blue-600"
      } transition-all ease-linear duration-300 sticky top-0 z-10 lg:rounded-bl-[4rem] px-5 md:px-20 lg:px-40 h-[120px]`}
    >
      <section className=" text-white flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl font-bold italic py-8">devjobs</h1>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <BsFillSunFill />
            <Switch />
            <BsFillMoonFill />
          </div>
          <div className="relative">
            <div onClick={toggleShow}
              className={`bg-orange-500 w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer`}
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
      <div className={hide && "hidden"}>
        <SearchBar/>
      </div>
    </main>
  );
}
