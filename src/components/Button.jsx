import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BeatLoader } from "react-spinners";

export default function Button({ text, className, isLoading, arrow, disabled }) {
  return (
    <button disabled={isLoading || disabled} className={`flex h-[44px] ${arrow && "items-center gap-3"} items-center justify-center ${className}`}>
      {!isLoading ? (
        text
      ) : (
        <BeatLoader
          color="#FFF"
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {
        arrow && <BsArrowRight className=""/>
      }
    </button>
  );
}
