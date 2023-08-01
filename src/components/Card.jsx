import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../redux/api/jobApi";

export default function Card() {
  const dark = useSelector((state) => state.dark.dark);
  const token = Cookies.get("token");

  const { data } = useGetJobsQuery(token);
  const jobs = data?.data.data;
  const nav = useNavigate();
  const handleClick = () => {
    // nav(`/detail:${id}`)
    nav("/detail");
  };

  // let timestamp = []
  // console.log(timestamp)
  return (
    <div className="flex flex-wrap justify-between gap-10 px-5 md:px-0">
      {jobs?.map((i) => {
        // timestamp.push(i.created_at) 
        return (
          <main key={i.id}
            onClick={handleClick}
            className={`${
              dark ? "bg-[#374151]" : "bg-white"
            } transition-all  ease-linear duration-300 p-5 rounded cursor-pointer w-[100%] md:w-[47%] xl:w-[30.5%]`}
          >
            <div className=" overflow-hidden -mt-10 my-5 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              {/* <h1 className="text-white">Sc.</h1> */}
              <img className="h-full w-full object-cover origin-center" src={i.company_image} alt="" />
              
            </div>
            <div className="flex gap-3">
              <p>{i.timestamp}.</p>
              <p>{i.shift ? "Full Time":"Part Time"}</p>
            </div>
            <h1
              className={`${
                dark && "text-white"
              } transition-all ease-linear duration-300 my-2 `}
            >
              {i.position}
            </h1>
            <h5 className="font-semibold">{i.company}</h5>
            <h4 className="font-semibold text-primary">{i.country}</h4>
          </main>
        );
      })}
    </div>
  );
}
