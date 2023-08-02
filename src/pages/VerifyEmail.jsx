import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import CountDown from "../components/CountDown";
import { useOtpConfirmMutation } from "../redux/api/authApi";
import { addUser } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";

export default function VerifyEmail() {
  const nav = useNavigate();
  const dispatch = useDispatch()
  const [code, setCode] = useState("")
  const [resend, setResend] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setResend(false)
    }, 1000 * 60)
  },[])
  const [otpCode, {isLoading}] = useOtpConfirmMutation()
  const handleVerify = async (e) => {
    e.preventDefault()
    const {data} = await otpCode({code})
    console.log(data)
    dispatch(addUser({user: data?.data, token: data?.data.token}))
    data?.success && nav("/");
  };
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="lg:w-[60%] w-screen h-screen lg:h-[80%] flex rounded overflow-hidden bg-slate-100">
        <section className="lg:w-[50%] w-full p-10 md:px-40 lg:px-10 h-full flex flex-col gap-5 items-start justify-between">
          <div className="w-fit">
            <Link to={"/register"}>
              <BsArrowLeft className="" />
            </Link>
          </div>
          <div>
            <h1>Enter Verification Code</h1>
            <p className="my-5">
              Enter 6-digit code that we sent to your email. Be careful not to
              share the code with anyone.
            </p>
            <form action="" className="flex w-full justify-between flex-col gap-24">
              <div>
                <input
                onChange={(e) => setCode(e.target.value)}
                  type="number"
                  placeholder="000000" autoFocus={true}
                  className="bg-white text-center font-bold w-full py-2  rounded px-4 outline-none text-2xl"
                />
                <p className="text-sm my-2">
                  Your code will expire in {<CountDown/>} seconds
                </p>
              </div>
              <div>
                <div className="flex gap-2 mb-3 text-sm">
                  <p>Didn't receive the code?</p>
                  <Link to={"/resend"}>
                    <span className={`${resend && "hidden"} text-primary font-bold`}>Resend</span>
                  </Link>
                </div>
                <div className="w-full" onClick={handleVerify}>
                  <Button
                  isLoading={isLoading}
                  text={"VERIFY"}
                    className={
                      "w-full px-8 flex-grow bg-blue-600 text-white text-sm font-bold py-3 rounded"
                    }
                  />
                </div>
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
