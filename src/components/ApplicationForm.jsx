import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserProfileQuery } from "../redux/api/authApi";
import Cookies from "js-cookie";
import axios from "axios";

export default function ApplicationForm({
  toggleModal,
  position,
  job_id,
  toastify,
  setToastify,
}) {
  const dark = useSelector((state) => state.dark.dark);
  const token = Cookies.get("token");
  const { data: user } = useGetUserProfileQuery(token);
  const user_id = user?.data.id;
  const [name, setName] = useState(user?.data.name);
  const [email, setEmail] = useState(user?.data.email);
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [cv, setCv] = useState("");
  const [experiences, setExperiences] = useState("");
  const [salary, setSalary] = useState("");

  const handleApply = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("portfolio", portfolio);
    formData.append("position", position);
    formData.append("cv", cv);
    formData.append("experiences", experiences);
    formData.append("salary", salary);
    formData.append("user_id", user_id);
    formData.append("job_id", job_id);
    await axios
      .post(`http://159.223.80.82/api/v1/apply`, formData, {
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.statusText === "OK") {
          toggleModal();
          console.log(res)
          // setToastify(true)
          // setTimeout(() => {
          //   setToastify(false)
          //   notify()
          // }, 5000);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <main
      className={`${
        dark ? "bg-[#303846]" : "bg-slate-200"
      } ${toastify && "hidden"} h-full w-full md:h-fit md:w-[80%] lg:w-[50%] absolute mx-auto p-10 rounded`}
    >
      <h1 className={`${dark && "text-slate-50"} text-center mb-3`}>
        Application Form
      </h1>
      <form
        onSubmit={handleApply}
        className={`flex w-full text-sm flex-col gap-3 ${
          dark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        <section className="flex flex-col md:flex-row gap-5 items-center">
          <div className={`w-full md:w-[50%]`}>
            <label className="font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className={`${
                dark && "bg-slate-700"
              } bg-white w-full py-3 rounded px-4 outline-none`}
            />
          </div>
          <div className={`w-full md:w-[50%]`}>
            <label className="font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className={`${
                dark && "bg-slate-700"
              } bg-white w-full py-3 rounded px-4 outline-none`}
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-5 items-center">
          <div className={`w-full md:w-[50%]`}>
            <label className="font-semibold">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Enter your phone"
              className={`${
                dark && "bg-slate-700"
              } bg-white w-full py-3 rounded px-4 outline-none`}
            />
          </div>
          <div className={`w-full md:w-[50%]`}>
            <label className="font-semibold">
              Position <span className="text-red-500">*</span>
            </label>
            <p
              className={`${
                dark && "bg-slate-700"
              } bg-white w-full py-3 rounded px-4 outline-none`}
            >
              {position}
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-5 items-center">
          <div className={`w-full md:w-[50%]`}>
            <label className="font-semibold">Portfolio </label>
            <input
              onChange={(e) => setPortfolio(e.target.value)}
              type="text"
              placeholder="Enter your portfolio link"
              className={`${
                dark && "bg-slate-700"
              } bg-white w-full py-3 rounded px-4 outline-none`}
            />
          </div>
          <div className={`w-full md:w-[50%]`}>
            <label className="font-semibold">Experiences </label>
            <input
              onChange={(e) => setExperiences(e.target.value)}
              type="text"
              placeholder="Enter your experiences (year)"
              className={`${
                dark && "bg-slate-700"
              } bg-white w-full py-3 rounded px-4 outline-none`}
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-5 items-center">
          <div className={`w-full md:w-[50%]`}>
            <label className="font-semibold">Expected Slary</label>
            <input
              onChange={(e) => setSalary(e.target.value)}
              type="text"
              placeholder="Expected slary"
              className={`${
                dark && "bg-slate-700"
              } bg-white w-full py-3 rounded px-4 outline-none`}
            />
          </div>
          <div className={`w-full md:w-[50%]`}>
            <label className="font-semibold">
              Upload CV <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setCv(e.target.files[0])}
              type="file"
              className={` w-full py-2 rounded px-4 outline-none`}
            />
          </div>
        </section>
        <div className="flex  gap-5">
          <button
            type="button"
            onClick={toggleModal}
            className="px-5 mt-3 lg:px-5 py-2.5 h-fit mx-auto rounded border bg-blue-50 border-blue-600 text-blue-600 w-[50%] font-bold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 mt-3 lg:px-5 py-2.5 h-fit mx-auto rounded text-white bg-blue-600 w-[50%] font-bold"
          >
            Apply Now
          </button>
        </div>
      </form>
    </main>
  );
}
