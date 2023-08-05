import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function JobCard() {
  const token = Cookies.get("token");
  const nav = useNavigate();
  const [hide, setHide] = useState(false);
  const dark = useSelector((state) => state.dark.dark);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const searchJobs = useSelector((state) => state.jobSlice.jobs?.data.data);
  console.log(searchJobs)
  // useEffect(() => {
  //   setIsLoading(true)
  // },[])

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  
  const fetchData = async () => {
    try {
      // setIsLoading(true);
      const res = await fetch(
        `http://159.223.80.82/api/v1/job?page=${currentPage}`,
        {
          headers: {
            "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
            "app-secret":
              "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await res.json();
      const jobs = json.data.data;
      setLastPage(json.data.last_page);
      setData((prev) => [...prev, ...jobs]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally {
      setIsLoading(false); // Set loading to false after fetching (success or error)
    }
  };
  console.log(lastPage);
  const handleLoadMore = () => {
    // setIsLoading(true)
    setCurrentPage((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <ClipLoader color="#2563EB" />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-between mb-5 gap-10 px-5 md:px-0">
      {data?.map((i) => {
        return (
          <main
            key={`${i.id}-${i.company}`}
            onClick={() => {
              setHide(true);
              nav(`/detail/${i.id}`);
            }}
            className={`${
              dark ? "bg-[#374151]" : "bg-white"
            } transition-all  ease-linear duration-300 p-5 rounded cursor-pointer w-[100%] md:w-[47%] xl:w-[30.5%]`}
          >
            <div className=" overflow-hidden -mt-10 my-5 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <img
                className="h-full w-full object-cover origin-center"
                src={i.company_image}
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
            <h5 className="font-semibold">{i.company}</h5>
            <h4 className="font-semibold text-primary">{i.country}</h4>
          </main>
        );
      })}
      {lastPage !== currentPage && (
        <div className="w-fit mx-auto" onClick={handleLoadMore}>
          <Button
            isLoading={isLoading}
            text={"Load More"}
            className={`bg-blue-600 mb-5 text-white px-8 rounded `}
          />
        </div>
      )}
    </div>
  );
}
