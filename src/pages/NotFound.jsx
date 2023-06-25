import React from "react";

const NotFound = () => {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
        text-center
        h-[calc(100vh-64px)]
        bg-gray-100
    "
    >
      <h1
        className="
        text-9xl
        font-bold
        text-gray-400
      "
      >
        404
      </h1>
      <h2
        className="
        text-4xl
        font-bold
        text-gray-400
      "
      >
        Page not found
      </h2>
    </div>
  );
};

export default NotFound;
