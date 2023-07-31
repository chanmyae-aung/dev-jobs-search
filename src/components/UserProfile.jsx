import Cookies from "js-cookie";
import React from "react";
import {RiLogoutCircleRLine} from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/api/authApi";
import { removeUser } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    const token = Cookies.get("token")
    const nav = useNavigate()
    const dispatach = useDispatch()
    // console.log(token)
    const dark = useSelector(state => state.dark.dark)
    const [logout] = useLogoutMutation()

    const handleLogout = async () => {
      const {data} = await logout(token)
      // console.log(data)
      dispatach(removeUser())
      data?.message === "success" && nav("/login")
    }
  return (
    <div className={`${dark ? "bg-slate-700":"bg-white text-slate-700"} z-50 w-fit h-fit p-5 rounded`}>
      <section className="flex flex-col items-center">
      <div className="flex items-center gap-3">
      <div
        className={`bg-orange-500 w-10 h-10 p-1 rounded-full border flex items-center justify-center cursor-pointer`}
      >
        {user?.profile_image ? (
          <img
            className="w-full h-full rounded-full"
            src={user?.profile_image}
          />
        ) : (
          <h2 className="font-bold text-white">{user?.name.charAt(0).toUpperCase()}</h2>
        )}
      </div>
      <div>
        <h2 className="font-bold">{user?.name}</h2>
        <p className="text-sm">{user?.email}</p>
      </div>
      </div>
      <hr />
      <button onClick={handleLogout} className="flex w-full justify-start mt-5 text-sm font-semibold pt-3 items-center gap-3">
            <RiLogoutCircleRLine/>
        <p>Logout</p>
      </button>
      </section>
    </div>
  );
}
