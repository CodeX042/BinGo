import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fundWallet } from "../../../Redux/slices/walletSlice";
import { updateTransaction } from "../../../Redux/slices/transactionSlice";
import { setSelectedSection } from "../../../Redux/slices/navigationSlice";
import { toast } from "react-toastify";
import { addToNotifications } from "../../../Redux/slices/notificationSlice";
import { PulseLoader } from "react-spinners";

const ConfirmationPage = () => {
  const { trashAmount } = useSelector((state) => state.trash);
  const { transactionId } = useSelector((state) => state.transaction);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleConfirm = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch(fundWallet(trashAmount));
      dispatch(
        addToNotifications(`Pickup confirmed, your wallet has been funded`)
      );
      dispatch(updateTransaction({ id: transactionId, status: "Completed" }));
      dispatch(setSelectedSection("wallet"));
      toast.success("Pickup confirmed");
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">
        Good Job!
      </h2>
      <p className="text-center mb-4 sm:mb-6 text-sm sm:text-base">
        We've received your request and will handle it shortly. Thank you for
        helping us improve the environment!
      </p>
      <div className="flex justify-center">
        <img
          src="/assets/svg/trash_truck.svg"
          alt="Truck"
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
        />
      </div>
      <button
        className="bg-black text-white py-3 w-full rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={handleConfirm}
      >
        {loading ? <PulseLoader size={10} color="#fff" /> : "Confirm Pickup"}
      </button>
    </div>
  );
};

export default ConfirmationPage;
