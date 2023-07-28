import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="lg:w-[60%] w-screen h-screen lg:h-[80%] flex rounded overflow-hidden bg-slate-100">
        <section className="lg:w-[50%] w-full px-10 md:px-40 lg:px-10 h-full flex flex-col gap-5 items-center justify-center">
          <h1>Welcome Back!</h1>
          <p className="text-slate-500">
            Welcome back to <span className="text-lg font-bold italic text-primary">devjobs</span>
          </p>
          <form action="" className="flex w-full flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white w-full py-3 rounded px-4 outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-white w-full py-3 rounded px-4 outline-none text-sm"
            />
            <Link to={"/forgot-password"}>
              <p className="text-primary text-end text-xs">Forgotten password?</p>
            </Link>
            
            <div className="flex gap-3 mt-3">
              <Button
                text={"LOG IN"}
                className={
                  "w-fit px-8 flex-grow bg-blue-600 text-white text-sm font-bold py-3 rounded"
                }
              />
              <button className="flex gap-3 bg-white items-center p-2.5 border-blue-600 text-slate-500 px-5 border rounded w-fit">
                <img
                  className="w-6"
                  src="https://img.icons8.com/?size=1x&id=17949&format=png"
                  alt=""
                />
              </button>
            </div>
          </form>
          <div className="flex gap-3 text-sm my-3">
              <p>Already have an account?</p>
              <Link to={"/register"}>
                <p className="text-primary font-semibold">Register</p>
              </Link>
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
