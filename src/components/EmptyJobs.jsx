import React from "react";
import Button from "./Button";

export default function EmptyJobs() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="my-5">No jobs found.</h1>
      <Button
        text={"Back to home"}
        className={`bg-blue-600 mb-5 text-white px-8 rounded `}
      />
    </div>
  );
}
