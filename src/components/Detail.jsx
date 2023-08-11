import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import ApplicationForm from "./ApplicationForm";
import { useGetDetailQuery } from "../redux/api/jobApi";
import { useLocation, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { ClipLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

export default function Detail() {
  const token = Cookies.get("token");
  const location = useLocation();
  console.log(location);

  const [modal, setModal] = useState(false);
  const [toastify, setToastify] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { id } = useParams();
  const { data, isLoading } = useGetDetailQuery({ token, id });
  console.log(data?.data);
  const dark = useSelector((state) => state.dark.dark);

  const handleDownload = () => {
    const imageUrl = data?.data.company_image;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", imageUrl, true);
    xhr.responseType = "blob";
    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Cham_Myae.jpg"; // Change the filename here if needed
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    };
    xhr.send();
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen items-center flex justify-center">
        <ClipLoader color="#2563EB" />
      </div>
    );
  }

  return (
    <>
      <main
        className={`${
          dark ? "bg-[#22262F] text-slate-200" : "bg-slate-100"
        } transition-all ease-linear duration-300 relative h-screen overflow-y-scroll`}
      >
        <Navbar hide={true} />
        <section
          className={`${
            dark ? "bg-[#374151] text-slate-200" : "bg-white"
          } transition-all ease-linear flex items-center duration-300 lg:w-[50%] mx-auto sticky z-10 top-[88px] shadow-sm left-0 right-0 lg:rounded -mt-8 overflow-hidden`}
        >
          <div className={`flex items-center w-full`}>
            <div className="bg-orange-500 w-16  md:w-24 h-16  md:h-24">
              <img
                onClick={handleDownload}
                className="w-full h-full object-cover"
                src={data?.data.company.image}
                alt=""
              />
            </div>
            <div className="w-[85%] flex items-center justify-between px-3 md:px-8">
              <div className="">
                <h4 className="text-lg font-bold">{data?.data.company.name}</h4>
                <p>{data?.data.company.email}</p>
              </div>
              <a
                href={data?.data.company.website}
                className="px-5 py-2.5 h-fit rounded bg-blue-50 text-blue-600 text-sm font-bold"
              >
                Company Site
              </a>
            </div>
          </div>
        </section>
        <section
          className={`${
            dark ? "bg-[#374151]" : "bg-white"
          } transition-all ease-linear duration-300 p-5 md:p-10 lg:w-[50%] tracking-wide mt-5 lg:mt-7 mx-auto lg:rounded cursor-pointer`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div>
              <div className="flex gap-3">
                <p>{data?.data.timestamp}.</p>
                <p>{data?.data.shift ? "Full Time" : "Part Time"}</p>
              </div>
              <h1
                className={`${
                  dark && "text-white"
                } transition-all ease-linear duration-300 my-2 `}
              >
                {data?.data.position}
              </h1>
              <p>({data?.data.candidates}) posts</p>
              <h4 className="font-semibold text-primary">
                {data?.data.country}
              </h4>
            </div>
            <button
              onClick={toggleModal}
              className="px-5 mt-3 lg:mt-0 lg:px-5 py-2.5 h-fit rounded text-white bg-blue-600 text-sm font-bold"
            >
              Apply Now
            </button>
          </div>
          <p className="py-10">{data?.data.job_description}</p>
          <div>
            <h4 className="sub-title">Requirements</h4>
            <p>{data?.data.requirement}</p>
            <ul>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt, possimus!
              </li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt, possimus!
              </li>
              <li>Lorem ipsum dolor, sit amet consectetur </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt, possimus!
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h4 className="sub-title">What You Will Do</h4>
            <p>{data?.data.responsibilities}</p>
            <ul>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt, possimus!
              </li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt, possimus!
              </li>
              <li>Lorem ipsum dolor, sit amet consectetur </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt, possimus!
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h4 className="sub-title">Salary</h4>
            <p>{data?.data.salary}</p>
          </div>
        </section>
        <footer
          className={`${
            dark ? "bg-[#374151]" : "bg-white"
          } transition-all ease-linear duration-300 mt-5 lg:mt-10`}
        >
          <div className="flex flex-col md:flex-row px-10 lg:px-0 lg:w-[50%] mx-auto py-3 lg:py-5 items-center justify-between">
            <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start">
              <h1
                className={`${
                  dark && "text-white"
                } transition-all ease-linear duration-300 lg:my-2 `}
              >
                {data?.data.position}
              </h1>
              <h5 className="font-semibold">{data?.data.company.name}</h5>
            </div>
            <button
              onClick={toggleModal}
              className="px-5 mt-3 py-2.5 h-fit rounded text-white bg-blue-600 text-sm font-bold"
            >
              Apply Now
            </button>
          </div>
        </footer>
      </main>
      {/* Application Form */}
      {modal && (
        <main className={`w-screen h-screen flex items-center justify-center absolute top-0 z-50 left-0 bg-transparent ${!toastify && "backdrop-brightness-50"}`}>
          <ApplicationForm
            toastify={toastify}
            setToastify={setToastify}
            job_id={data?.data.id}
            position={data?.data.position}
            toggleModal={toggleModal}
          />
        </main>
      )}
    </>
  );
}
