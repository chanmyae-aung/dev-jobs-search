import React, { useState } from "react";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import Switch from "./Switch";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import UserProfile from "./UserProfile";
import SearchBar from "./SearchBar";
import { useGetUserProfileQuery } from "../redux/api/authApi";

export default function Navbar() {
  const dark = useSelector((state) => state.dark.dark);
  // const user = JSON.parse(Cookies.get('user')) // throw an error => undefined is not valid in json.parse
  // const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null; // to prevent above error
  // console.log(user);
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
              className={`bg-orange-500 w-10 h-10 p-1 rounded-full border flex items-center justify-center cursor-pointer`}
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
            <div className={`${show ? "block": "hidden"} fixed z-50 shadow-lg top-12 rounded right-0`}>
              <UserProfile />
            </div>
          </div>
        </div>
      </section>
      <div>
        <SearchBar/>
      </div>
    </main>
  );
}
