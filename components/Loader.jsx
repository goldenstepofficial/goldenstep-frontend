import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-32 w-32">
        <div className="animate-spin relative rounded-full h-36 w-36 border-t-2 border-b-2 border-black"></div>
        <Image
          src="/images/logo.jpg"
          alt="goldenstep-logo"
          className="absolute inset-0 mx-auto my-auto h-24 w-24 items-center justify-center"
          width={90}
          height={90}
        />
      </div>
    </div>
  );
};

export default Loader;
