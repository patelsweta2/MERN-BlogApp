import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen min800:flex min800:justify-center min800:text-center"
      >
        <div className="container-hero max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col text-white absolute hero-text min800:items-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem] items-center">
            <p className="text-green-600 font-bold text-[40px] uppercase z-10 pl-16 md:pl-0 mb-8">
              Welcome to NamasteNest
            </p>

            <h1 className="font-thin text-slate-800 text-[24px] mb-[4rem]">
              "Welcome to a world of ideas and inspiration"
            </h1>
            <button className="btn">click here</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
