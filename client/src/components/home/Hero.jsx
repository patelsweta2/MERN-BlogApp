import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen flex justify-center items-center"
      >
        <div className="container-hero max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col text-white max-w-screen-lg justify-center items-center">
            <p
              className="text-red-700 font-bold text-[46px] uppercase z-10 pl-16 md:pl-0 mb-8"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            >
              Welcome to NamasteNest
            </p>
            {/* <h1 className="font-thin text-white text-[24px] mb-[4rem]">
              "Welcome to a world of ideas and inspiration"
            </h1> */}
            <h1
              className="font-medium text-white text-[24px] mb-[4rem]"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            >
              "Welcome to a world of ideas and inspiration"
            </h1>
            <Link to="/search">
              <button className="btn">click here</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
