import React, { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/authSlice";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const user = { email, password };
  console.log(error);
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const { data } = await login(user);
      data?.message === "User doesn't exist" && setEmailError(!emailError);
      data?.message === "Login Fail" && setError(!error);
      // console.log(data);
      data?.success &&
        dispatch(addUser({ user: data?.data, token: data?.data.token }));
      data?.data.token && nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="lg:w-[60%] w-screen h-screen lg:h-[80%] flex rounded overflow-hidden bg-slate-100">
        <section className="lg:w-[50%] w-full px-10 md:px-40 lg:px-10 h-full flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center flex-col gap-2 border-b py-3 px-8">
          <img
            className="w-12"
            src="https://img.icons8.com/?size=512&id=sFFBQN8kzSOS&format=png"
            alt=""
          />
          <h1 className=" font-bold text-2xl text-blue-500 text-center">
            devjobs
          </h1>
        </div>
          <p className="text-slate-500">
            Welcome back to{" "}
            <span className="text-lg font-bold italic">
              devjobs
            </span>
          </p>
          <form onSubmit={handleLogin} className="flex w-full flex-col gap-3">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                emailError && setEmailError(false);
              }}
              type="email"
              placeholder="Enter your email"
              autoFocus={true}
              className={`${
                emailError && "text-red-500 border border-red-500"
              } bg-white w-full py-3 rounded px-4 outline-none text-sm focus-state`}
            />
            <div className="relative">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  error && setError(false);
                }}
                type={`${showPass ? "password" : "text"}`}
                placeholder="Enter your password"
                className={`${
                  error && "text-red-500 border border-red-500"
                } bg-white w-full py-3 rounded px-4 outline-none text-sm focus-state`}
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
            <Link to={"/forgot-password"}>
              <p className="text-primary text-end text-xs">
                Forgotten password?
              </p>
            </Link>

            <div className="flex gap-3 mt-3">
              <Button
                isLoading={isLoading}
                text={"LOG IN"}
                className={
                  "w-fit px-8 hover-state flex-grow bg-blue-600 text-white text-sm font-bold py-3 rounded"
                }
              />
              {/* <button className="flex gap-3 bg-white items-center p-2.5 border-blue-600 text-slate-500 px-5 border rounded w-fit">
                <img
                  className="w-6"
                  src="https://img.icons8.com/?size=1x&id=17949&format=png"
                  alt=""
                />
              </button> */}
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
