// HowItWorks.jsx
import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-lime-200 py-16 px-52">
      {/* Info Cards */}
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-6 mb-12">
        {/* Card 1 */}
        <div className="bg-[#C4EC46] p-6 rounded-md shadow-lg w-full md:w-[589px] text-center">
          <h3 className="font-bold text-[40px] mb-4">SCAN & SORT YOUR GARBAGE</h3>
          <p className="text-[20px] mb-4">
            Simply snap a photo of your waste, and BinGo’s AI instantly analyzes
            the images to identify recyclable items. In seconds, you’ll know
            exactly what can be recycled and what can’t, making sorting easier
            than ever!
          </p>
          <img
            src="/assets/svg/gabage.svg"
            alt="Scan Icon"
            className="mx-auto w-[294px] h-[294px]"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-orange-400 p-6 rounded-md shadow-lg w-full md:w-1/3 text-center">
          <h3 className="font-bold text-[40px] mb-4">REQUEST FOR A PICKUP</h3>
          <p className="text-[20px] mb-4">
            After sorting, just request a pickup through BinGo. We’ll notify the
            nearest recycling center to collect your recyclables, ensuring a
            quick and hassle-free disposal right from your doorstep!
          </p>
          <img
            src="/assets/svg/truck.svg"
            alt="Pickup Icon"
            className="mx-auto w-[294px] h-[294px]"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-sky-400 p-6 rounded-md shadow-lg w-full md:w-1/3 text-center">
          <h3 className="font-bold text-[40px] mb-4">
            GET PAID FOR YOUR GOOD WORK
          </h3>
          <p className="text-[20px] mb-4">
            Once your recyclables are collected and processed, BinGo rewards
            you! Track your earnings and see the impact of your efforts—all
            while contributing to a cleaner environment.
          </p>
          <img
            src="/assets/svg/coin.svg"
            alt="Payment Icon"
            className="mx-auto w-[294px] h-[294px]"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-32">
        {/* Coins Display */}
        <div className="flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0  mb-12">
          {/* Coins Text */}
          <div className="text-center md:text-left">
            <p className="text-[32px] font-semibold w-[113px]">
              Total Coins Earned This Month
            </p>
            <p className="text-[96px] font-bold mt-2">200</p>
          </div>

          {/* Coins Icon */}
          <div>
            <img
              src="/assets/svg/coin_stack.svg"
              alt="Coins Icon"
              className="w-[535px] h-auto"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col item-center text-center border border-black p-16">
          <h3 className="text-[50px] text-left font-semibold mb-4">
            LIGHTEN THE LOAD ON LANDFILLS
          </h3>
          <button className="bg-black text-[32px] text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition w-[373px] h-[113px]">
            Start Sorting
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
