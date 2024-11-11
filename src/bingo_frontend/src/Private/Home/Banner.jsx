// MiddleSection.jsx
import React from "react";

const Banner = () => {
  return (
    <section className="bg-black text-white text-center py-32 px-6">
      {/* Heading */}
      <div className="flex flex-col items-center justify-start w-full gap-10">
        <h2 className="text-[70px] font-bold tracking-widest mb-2">
          <span className="text-white">ZERO</span>{" "}
          <span className="text-[#C1E64E]">WASTE,</span>{" "}
          <span className="text-white">MORE</span>{" "}
          <span className="text-[#C1E64E]">REWARDS</span>
        </h2>
        <div className="w-[774px] h-[3px] mx-10 bg-[#C1E64E]"></div>
        <p className="text-[36px] mb-12">Turn Trash into Cash!</p>
      </div>
      {/* Icons Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 mt-32">
        {/* Plastic Bin */}
        <div className="flex flex-col items-center">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="/assets/svg/plastic_bin.svg"
              alt="Plastic Icon"
              className="w-full h-full"
            />
          </div>
          {/* <p className="text-cyan-500 mt-4 font-semibold">PLASTIC</p> */}
        </div>

        {/* Metal Bin */}
        <div className="flex flex-col items-center">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="/assets/svg/metal_bin.svg"
              alt="Metal Icon"
              className="w-full h-full"
            />
          </div>
          {/* <p className="text-[#C1E64E] mt-4 font-semibold">METAL</p> */}
        </div>

        {/* Paper Bin */}
        <div className="flex flex-col items-center">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="/assets/svg/paper_bin.svg"
              alt="Paper Icon"
              className="w-full h-full"
            />
          </div>
          {/* <p className="text-orange-500 mt-4 font-semibold">PAPER</p> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
