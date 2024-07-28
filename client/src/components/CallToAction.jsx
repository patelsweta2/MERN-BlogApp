// import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border-4 border-yellow-600 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          "Welcome to NamasteNest! Explore insightful articles,
          thought-provoking content, and more. Happy reading"
        </h2>
        <p className="text-gray-500 my-2"></p>
        <button className="rounded rounded-bl-none bg-red-600 h-14 text-white">
          Learn more...
        </button>
      </div>
      <div className="p-7 flex-1">
        <img
          className="rounded"
          src="https://www.david-dahan.com/img/blog/blog.jpg"
        />
      </div>
    </div>
  );
};

export default CallToAction;
