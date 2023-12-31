import Cookies from "js-cookie";
import React from "react";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetUserProfileQuery,
  useLogoutMutation,
} from "../redux/api/authApi";
import { removeUser } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const token = Cookies.get("token");
  const nav = useNavigate();
  const dispatach = useDispatch();
  const dark = useSelector((state) => state.dark.dark);
  const [logout, {isLoading}] = useLogoutMutation();

  const { data: user } = useGetUserProfileQuery(token);
  const handleLogout = async () => {
    const { data } = await logout(token);
    dispatach(removeUser());
    data?.success && nav("/login");
  };
  return (
    <div
      className={`${
        dark ? "bg-slate-700" : "bg-white text-slate-700"
      } z-50 w-fit h-fit p-5 rounded`}
    >
      <section className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          <div
            className={`bg-orange-500 w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer`}
          >
            {user?.data.profile_image ? (
              <img
                className="w-full h-full rounded-full"
                src={user?.data.profile_image}
              />
            ) : (
              <h2 className="font-bold text-white">
                {user?.data.name.charAt(0).toUpperCase()}
              </h2>
            )}
          </div>
          <div>
            <h2 className="font-bold">{user?.data.name}</h2>
            <p className="text-sm">{user?.data.email}</p>
          </div>
        </div>
        <hr />
        <button
        disabled={isLoading}
          onClick={handleLogout}
          className={`flex w-fit ${isLoading && "text-slate-200"} focus:bg-white transition-transform focus:translate-x-1 ml-32 mt-5 text-sm font-semibold pt-3 items-center gap-3`}
        >
          <MdLogout />
          <p>Logout</p>
        </button>
      </section>
    </div>
  );
}
