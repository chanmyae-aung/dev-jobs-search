import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { useRegisterMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import { registerUser } from "../redux/features/authSlice";

export default function Register() {
  const inputRefs = useRef({
    nameInput: null, emailInput: null, passwordInput: null, confirmInput: null
  })
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [register, { isLoading }] = useRegisterMutation();
  const userData = { name, email, password, confirm_password };

  // google login
  const [googleUser, setGoogleUser] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (googleUser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          const googleUser = {
            name: res.data.name,
            email: res.data.email,
            social_id: res.data.id,
            profile_image: res.data.picture,
          };
          console.log(googleUser);
          axios
            .post("http://159.223.80.82/api/v1/google/login", googleUser, {
              headers: {
                "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
                "app-secret":
                  "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data.data.token);
              Cookies.set("token", res.data.data.token);
              res.data.data.token && nav("/");
            })
            .catch((error) => console.log(error));
        })
        .catch((err) => console.log(err));
    }
  }, [googleUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    name.length < 3 && setNameError(true);
    const { data } = await register(userData);
    // !data && console.log("Email already exist");
    data?.success && nav("/verify-email")
    dispatch(registerUser({registerUser:{name, email, password, confirm_password}}))
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
            <input ref={(input) => (inputRefs.current.nameInput = input)}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              autoFocus={true}
              className={`${
                nameError && "text-red-500 border border-red-500"
              }bg-white w-full py-3 rounded px-4 outline-none text-sm`}
            />
            <input ref={(input) => (inputRefs.current.emailInput = input)}
              onChange={(e) => {
                setEmail(e.target.value);
                emailError && setEmailError(false);
              }}
              type="email"
              placeholder="Enter your email"
              autoFocus={true}
              className={`${
                emailError && "text-red-500 border border-red-500"
              } bg-white w-full py-3 rounded px-4 outline-none text-sm`}
            />
            <div className="relative">
              <input ref={(input) => (inputRefs.current.passwordInput = input)}
                onChange={(e) => {
                  setPassword(e.target.value);
                  passwordError && setPasswordError(false);
                }}
                type={`${showPass ? "password" : "text"}`}
                placeholder="Enter your password"
                className={`${
                  passwordError && "text-red-500 border border-red-500"
                } bg-white w-full py-3 rounded px-4 outline-none text-sm`}
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
              <input ref={(input) => (inputRefs.current.confirmInput = input)}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={`${showConfirmPass ? "password" : "text"}`}
                placeholder="Confirm your password"
                className={`${
                  passwordError && "text-red-500 border border-red-500"
                } bg-white w-full py-3 rounded px-4 outline-none text-sm`}
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
                  className={`bg-blue-600 w-full px-8 flex-grow text-white text-sm font-bold py-3 rounded`}
                />
              </div>
              <button
                onClick={login}
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
