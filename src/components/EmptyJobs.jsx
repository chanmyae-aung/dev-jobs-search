import React from "react";
import Button from "./Button";

export default function EmptyJobs() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img className="w-20 mt-20" src="https://img.icons8.com/?size=512&id=rWYhGmCl1ic1&format=png" alt="" />
      <h1 className="my-5">No jobs found.</h1>
      {/* <Button
        text={"Back to home"}
        className={`bg-blue-600 mb-5 text-white px-8 rounded `}
      /> */}
    </div>
  );
}
