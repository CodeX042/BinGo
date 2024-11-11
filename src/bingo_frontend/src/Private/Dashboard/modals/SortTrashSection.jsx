import React from "react";

const SortTrash = () => {
  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Report an issue with mismanagement or broken bins
      </h2>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-4 mb-6"
        rows={5}
        placeholder="Enter your issue..."
      ></textarea>
      <button className="bg-red-600 text-white py-3 w-full rounded-lg font-semibold hover:bg-red-700 transition">
        Report
      </button>
    </div>
  );
};

export default SortTrash;
