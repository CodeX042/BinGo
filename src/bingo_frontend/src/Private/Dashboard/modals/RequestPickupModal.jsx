import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSection } from "../../../Redux/slices/navigationSlice";

const RequestPickup = () => {
  const dispatch = useDispatch();
  const { trashWeight } = useSelector((state) => state.trash);

  const handlePickupRequest = (e) => {
    e.preventDefault();
    dispatch(setSelectedSection("location"));
  };

  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Mexa has categorized your trash as paper, weighing {trashWeight} kilograms.
        Please package it and request a pickup from the waste truck.
      </h2>
      <div className="flex justify-center mb-6">
        <img
          src="/assets/svg/trash-bag.svg"
          alt="Trash Bag"
          className="w-48 h-48 sm:w-50 sm:h-50"
        />
      </div>
      <button
        className="bg-black text-white py-3 w-full rounded-lg font-semibold hover:bg-gray-800 transition"
        onClick={handlePickupRequest}
      >
        Request Pickup
      </button>
    </div>
  );
};

export default RequestPickup;
