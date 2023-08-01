import React, { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { useRegisterMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/authSlice";

export default function Register() {
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const nav = useNavigate();
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [register, {isLoading}] = useRegisterMutation();
  const userData = { name, email, password, confirm_password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await register(userData);
    console.log(data)
    // !data && console.log("Email already exist");
    data?.success && nav("/verify-email")
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="lg:w-[60%] w-screen h-screen lg:h-[80%] flex rounded overflow-hidden bg-slate-100">
        <section className="lg:w-[50%] w-full px-10 md:px-40 lg:px-10 h-full flex flex-col gap-5 items-center justify-center">
          <h1>Register</h1>
          <p className="text-slate-500">
            Get started by creating your new account
          </p>
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name" autoFocus={true}
              className="bg-white w-full py-3 rounded px-4 outline-none text-sm"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="bg-white w-full py-3 rounded px-4 outline-none text-sm"
            />
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={`${showPass ? "password" : "text"}`}
                placeholder="New password"
                className="bg-white w-full  py-3 rounded px-4 outline-none text-sm"
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute right-0 bottom-3"
              >
                {showPass ? (
                  <LiaEye className="mx-3 cursor-pointer" />
                ) : (
                  <LiaEyeSlash className="mx-3 cursor-pointer" />
                )}
              </div>
            </div>
            <div className="relative">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={`${showConfirmPass ? "password" : "text"}`}
                placeholder="Confirm password"
                className="bg-white w-full py-3 rounded px-4 outline-none text-sm"
              />
              <div
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-0 bottom-3"
              >
                {showConfirmPass ? (
                  <LiaEye className="mx-3 cursor-pointer" />
                ) : (
                  <LiaEyeSlash className="mx-3 cursor-pointer" />
                )}
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="w-full">
                <Button
                  text={"REGISTER"}
                  isLoading={isLoading}
                  className={`bg-blue-600 w-full px-8 flex-grow text-white text-sm font-bold py-3 rounded`
                  }
                />
              </div>
              <button
                type="button"
                className="flex gap-3 bg-white items-center p-2.5 border-blue-600 text-slate-500 px-5 border rounded w-fit"
              >
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
            <Link to={"/login"}>
              <p className="text-primary font-semibold">Log in</p>
            </Link>
          </div>
        </section>
        <section className="hidden w-[50%] bg-blue-300 rounded-s-[3rem] items-center justify-center px-10 lg:flex flex-col">
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
