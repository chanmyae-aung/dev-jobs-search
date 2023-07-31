import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {LiaEye, LiaEyeSlash} from 'react-icons/lia'    
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function ResetPassword() {
    const [showPass, setShowPass] = useState(true)
    const [showConfirmPass, setShowConfirmPass] = useState(true)
    const nav = useNavigate()
    const handleReset = () => {
        nav("/login")
    }
    
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="lg:w-[60%] w-screen h-screen lg:h-[80%] flex rounded overflow-hidden bg-slate-100">
        <section className="lg:w-[50%] w-full p-10 md:px-40 lg:px-10 h-full flex flex-col gap-5 items-start justify-between">
          <div className="w-fit">
            <Link to={"/login"}>
              <BsArrowLeft className="" />
            </Link>
          </div>
          <div>
            <h1>Reset Your Password</h1>
            <p className="py-5">
              Your new password must be different to previously used password.
            </p>
            <form action="" className="flex w-full flex-col gap-3">
              <div className="relative">
                <input
                  type={`${showPass ? "password" : "text"}`}
                  placeholder="New password"
                  className="bg-white w-full  py-3 rounded px-4 outline-none text-sm"
                />
                <div onClick={() => setShowPass(!showPass)} className="absolute right-0 bottom-3">
                  {showPass ? <LiaEye className="mx-3 cursor-pointer"/> : <LiaEyeSlash className="mx-3 cursor-pointer"/>}
                </div>
              </div>
              <div className="relative mb-32">
                <input
                  type={`${showConfirmPass ? "password" : "text"}`}
                  placeholder="Confirm password"
                  className="bg-white w-full py-3 rounded px-4 outline-none text-sm"
                />
                <div onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-0 bottom-3">
                  {showConfirmPass ? <LiaEye className="mx-3 cursor-pointer"/> : <LiaEyeSlash className="mx-3 cursor-pointer"/>}
                </div>
              </div>
              <div className="w-full" onClick={handleReset}>
              <Button
                  // isLoading={isLoading}
                  text={"RESET"}
                className={
                  "w-full px-8 flex-grow bg-blue-600 text-white text-sm font-bold py-3 rounded"
                }
              />
              </div>
            </form>
          </div>
        </section>
        <section className="w-[50%] hidden bg-blue-300 rounded-s-[3rem] items-center justify-center px-10 lg:flex flex-col">
          <img
            className="w-60"
            src="https://ouch-cdn2.icons8.com/gp_5gvpQOk93M50Yd9SbegiC0bnqI3I7O_qCAb-LbIE/rs:fit:256:329/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg0/LzIzYWY5OTlmLWU2/OGEtNGUzMy1iNDQw/LWY1ZDkyNDRmZGM1/NC5wbmc.png"
            alt=""
          />
        </section>
      </div>
    </main>
  );
}
