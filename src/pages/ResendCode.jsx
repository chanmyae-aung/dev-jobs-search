import React, { useState } from "react";
import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useResendMutation } from "../redux/api/authApi";

export default function ResendCode() {
  const [email, setEmail] = useState();
  const nav = useNavigate();

  const [resendEmail, { isLoading }] = useResendMutation();
  const handleNext = async (e) => {
    e.preventDefault();
    const { data } = await resendEmail({ email });
    // console.log(data)
    data?.success && nav("/verify-email");
  };
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
            <h1>Enter Your Email</h1>
            <p className="py-5">
              Please enter your email address correctly to get verification
              code.
            </p>
            <form onSubmit={handleNext} className="flex w-full flex-col gap-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email" autoFocus={true}
                className="bg-white w-full py-3 mb-32 rounded px-4 outline-none text-sm"
              />
              <div className="w-full">
                <Button
                  isLoading={isLoading}
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
