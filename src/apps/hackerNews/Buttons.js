import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, handlePage, nbPages } = useGlobalContext();

  return (
    <div className="btn-container-hacker">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
