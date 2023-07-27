import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="flex  h-screen items-center justify-center">
      <div className="w-[60%] flex rounded overflow-hidden h-[80%] bg-slate-100">
        <section className="w-[50%] px-10 h-full flex flex-col gap-5 items-center justify-center">
          <h1 className="text-xl font-bold">Welcome Back!</h1>
          <p className="text-slate-500">
            Welcome back to DevJobs
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
            <div className="flex gap-3 text-sm my-3">
              <p>Already have an account?</p>
              <Link>
                <p className="text-blue-600 font-semibold">Log in</p>
              </Link>
            </div>
            <div className="flex gap-3">
              <Button
                text={"REGISTER"}
                className={
                  "w-fit px-8 flex-grow bg-blue-600 text-white text-sm font-bold py-3 rounded"
                }
              />
              <div className="flex gap-3 bg-white items-center p-2.5 border-blue-600 text-slate-500 px-5 border rounded w-fit">
                <img
                  className="w-6"
                  src="https://img.icons8.com/?size=1x&id=17949&format=png"
                  alt=""
                />
              </div>
            </div>
          </form>
        </section>
        <section className="w-[50%] bg-blue-300 rounded-s-[3rem] items-center justify-center px-10 flex flex-col">
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
