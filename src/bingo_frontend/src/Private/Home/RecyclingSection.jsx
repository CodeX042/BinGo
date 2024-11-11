// RecyclingSection.jsx
import React from "react";

const RecyclingSection = () => {
  return (
    <section className="bg-lime-400 text-center  py-16 px-6">
      <blockquote className="text-[50px]  font-bold text-black italic max-w-4xl mx-auto">
        “Why throw away items that could have a second life? Recycling isn’t
        just about trash - it’s about protecting our environment and creating
        new value from what we no longer need.”
      </blockquote>
      <div className="mt-8">
        <button className="text-[32px] bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition w-[542px] h-[113px]">
          Start Sorting
        </button>
      </div>
    </section>
  );
};

export default RecyclingSection;
