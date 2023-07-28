import React from "react";
import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const nav = useNavigate()
  const handleNext = () => {
    nav("/reset")
  }
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="lg:w-[60%] w-screen h-screen lg:h-[80%] flex rounded overflow-hidden bg-slate-100">
        <section className="lg:w-[50%] w-full p-10 md:px-40 lg:px-10 h-full flex flex-col gap-5 items-start justify-between">
          <div className="w-fit">
            <Link to={"/login"}>
              <BsArrowLeft className=""/>
            </Link>
          </div>
          <div>
          <h1>Find Your Account</h1>
          <p className="py-5">
            Please enter your email address to search for your account and
            change your password.
          </p>
          <form action="" className="flex w-full flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white w-full py-3 mb-32 rounded px-4 outline-none text-sm"
            />
            <div className="w-full" onClick={handleNext}>
            <Button
              text={"NEXT"}
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
