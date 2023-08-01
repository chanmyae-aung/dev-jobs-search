import React from "react";
import { BeatLoader } from "react-spinners";

export default function Button({ text, className, isLoading }) {
  return (
    <button disabled={isLoading} className={`flex h-[44px] items-center justify-center ${className}`}>
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
    </button>
  );
}
