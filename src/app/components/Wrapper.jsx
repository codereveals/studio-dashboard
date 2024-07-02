import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-[98%] px-8 mx-auto py-4 rounded-md border-1 my-2 bg-white">
      {children}
    </div>
  );
};

export default Wrapper;
