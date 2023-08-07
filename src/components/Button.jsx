import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BeatLoader } from "react-spinners";

export default function Button({ text, className, isLoading, arrow }) {
  return (
    <button disabled={isLoading} className={`flex h-[44px] ${arrow && "items-center gap-3"} items-center justify-center ${className}`}>
      {!isLoading ? (
        text
      ) : (
        <BeatLoader
          color="#FFF"
          // loading={loading}
          // cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {
        arrow && <BsArrowRight/>
      }
    </button>
  );
}
