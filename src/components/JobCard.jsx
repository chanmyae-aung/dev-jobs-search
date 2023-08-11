import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../redux/api/jobApi";
import Button from "./Button";
import { addJobs, hideHero, nextPage } from "../redux/features/jobSlice";
import { ClipLoader } from "react-spinners";
import Hero from "./Hero";
import EmptyJobs from "../components/EmptyJobs";

export default function Card() {
  const dark = useSelector((state) => state.dark.dark);
  const token = Cookies.get("token");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.jobSlice.currentPage);
  // const currentPage = Cookies.get("currentPage")
  console.log(currentPage);
  const { data, isLoading } = useGetJobsQuery({ token, currentPage });
  console.log(data);
  const [lastPage, setLastPage] = useState(data?.data.last_page);
  const jobs = data?.data.data;
  const showHero = useSelector((state) => state.jobSlice.hero);
  const [hide, setHide] = useState(false);
  const searchJobs = useSelector((state) => state.jobSlice.jobs?.data.data);
  const morejob = useSelector((state) => state?.jobSlice.moreJobs);
  const filterJobs =
    searchJobs && searchJobs.length !== 12 ? searchJobs : morejob;

  const handleLoadMore = () => {
    dispatch(addJobs({ moreJobs: jobs }));
    dispatch(nextPage());
    dispatch(hideHero());
  };

  console.log(data?.data.last_page);

  if (searchJobs && !searchJobs.length) {
    return (
      <div>
        <EmptyJobs />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <ClipLoader color="#2563EB" />
      </div>
    );
  }

  if (showHero) {
    return (
      <div className="transition-all duration-300 ">
        <Hero isLoading={isLoading} handleLoadMore={handleLoadMore} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-between gap-10 px-5 md:px-20 lg:px-40 -mt-7">
        {filterJobs?.map((i) => {
          return (
            <main
              key={i.id}
              onClick={() => {
                setHide(true);
                nav(`/detail/${i.id}`);
              }}
              className={`${
                dark ? "bg-[#374151]" : "bg-white"
              } hover:-translate-y-1 transition-all  ease-linear duration-200 p-5 rounded cursor-pointer w-[100%] md:w-[47%] xl:w-[30.5%]`}
            >
              <div className=" overflow-hidden -mt-10 my-5 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <img
                  className="h-full w-full object-cover origin-center"
                  src={i.company.image}
                  alt=""
                />
              </div>
              <div className="flex gap-3">
                <p>{i.timestamp}.</p>
                <p>{i.shift ? "Full Time" : "Part Time"}</p>
              </div>
              <h1
                className={`${
                  dark && "text-white"
                } transition-all ease-linear duration-300 my-2 `}
              >
                {i.position}
              </h1>
              <h5 className="font-semibold">{i.company.name}</h5>
              <h4 className="font-semibold text-primary">{i.country}</h4>
            </main>
          );
        })}
      </div>
      { 
        <div className="w-fit mx-auto mt-5" onClick={handleLoadMore}>
          <Button
            disabled={currentPage === data?.data.last_page +1}
            isLoading={isLoading}
            text={currentPage === data?.data.last_page +1 ? "No More Jobs" : "Load More"}
            className={`bg-blue-600 mb-5 text-white px-8 rounded `}
          />
        </div>
      }
    </>
  );
}
