import React, { useState } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import ApplicationForm from "./ApplicationForm";
import { useGetDetailQuery } from "../redux/api/jobApi";
import { useLocation, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { ClipLoader } from "react-spinners";
import ComfirmBox from "./ComfirmBox";

export default function Detail() {
  const token = Cookies.get("token");
  const location = useLocation();
  console.log(location);

  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false)
  const [closeForm, setCloseForm] = useState(false)
  const [toastify, setToastify] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleAlert= () => {
    setAlert(!alert)
  }
  const toggleCloseForm = () => {
    setCloseForm(!closeForm)
  }
  const { id } = useParams();
  const { data, isLoading } = useGetDetailQuery({ token, id });
  console.log(data?.data);
  const dark = useSelector((state) => state.dark.dark);

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
        <Navbar id={id} hide={true} />
        
        <section
          className={`${
            dark ? "bg-[#374151]" : "bg-white"
          } transition-all ease-linear duration-300 p-5 md:p-10 lg:w-[50%] tracking-wide mt-10 md:mt-20 mx-auto lg:rounded cursor-pointer`}
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
              <p className="mb-2 text-lg font-semibold">({data?.data.candidates} - M/F) posts</p>
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
          <p className="py-10" dangerouslySetInnerHTML={{ __html: data?.data.job_description }}></p>
          <div>
            <h4 className="sub-title">Requirements</h4>
            <p dangerouslySetInnerHTML={{ __html: data?.data.requirement }}></p>
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
            <h4 className="sub-title">Responsibilities</h4>
            <p dangerouslySetInnerHTML={{ __html: data?.data.responsibilities }}></p>
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
            <p>$ {data?.data.salary}</p>
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
      {alert && <div>
          
      </div>}
      {/* Application Form */}
      {modal && (
        <main className={`w-screen h-screen flex items-center justify-center absolute top-0 z-50 left-0 bg-transparent ${!toastify && "backdrop-brightness-50"}`}>
          {!closeForm ? <ApplicationForm
            toastify={toastify}
            setToastify={setToastify}
            job_id={data?.data.id}
            position={data?.data.position}
            toggleCloseForm={toggleCloseForm}
            toggleAlert={toggleAlert}
            toggleModal={toggleModal}
          /> : <ComfirmBox setCloseForm={setCloseForm} toggleModal={toggleModal}/> }
        </main>
      )}
    </>
  );
}
