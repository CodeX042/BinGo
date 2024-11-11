import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSection } from "../../../Redux/slices/navigationSlice";

const Wallet = () => {
  const { walletBalance } = useSelector((state) => state.wallet);
  const [showBalance, setShowBalance] = useState(true);
  const dispatch = useDispatch();
  const handleWithdraw = () => {
    dispatch(setSelectedSection("withdraw"));
  };

  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300">
      <h2 className="text-2xl font-semibold text-center mb-6">Wallet</h2>
      <div className="p-4 sm:p-6 text-center space-y-6 mb-8 text-black">
        <p className="text-gray-500">My BinGo Balance</p>
        <h2 className="flex space-x-4 items-center justify-center text-4xl font-bold text-black mb-2">
          <span>{showBalance ? `₦${walletBalance}` : "*****"}</span>
          <span>
            {showBalance ? (
              <LuEyeOff
                size={24}
                cursor="pointer"
                onClick={() => setShowBalance(false)}
              />
            ) : (
              <LuEye
                size={24}
                cursor="pointer"
                onClick={() => setShowBalance(true)}
              />
            )}
          </span>
        </h2>
        <button
          className="bg-transparent border border-black rounded text-black py-2 px-4 hover:bg-gray-100 transition"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </div>
      <p className="text-center mt-4">
        Manage your funds and transactions here.
      </p>
    </div>
  );
};

export default Wallet;
