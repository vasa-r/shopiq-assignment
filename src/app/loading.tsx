import Loader from "@/components/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="h-[calc(100vh-82px)] w-screen flex justify-center items-center">
      <Loader width="50px" height="50px" />
    </div>
  );
};

export default Loading;
