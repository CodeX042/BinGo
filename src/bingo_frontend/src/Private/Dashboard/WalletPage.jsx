import React, { useState } from "react";
import UploadTrashModal from "./modals/UploadTrashModal";
import RequestPickupModal from "./modals/RequestPickupModal";
import ReportIssueModal from "./modals/ReportIssueModal";
import ConfirmationModal from "./modals/ConfirmationModal";
import { LuEye, LuEyeOff } from "react-icons/lu";

const WalletPage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showBalance, setShowBalance] = useState(false);
  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#C1E64E] text-white font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[48px] font-bold text-white">BinGo</h1>
          <div className="flex items-center space-x-10 bg-white rounded-full px-10 py-2">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/svg/avatar.svg" // Replace with actual path to the avatar image
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm text-black font-bold">Hello Kaosi,</p>
                <p className="text-xs text-gray-700">Welcome back</p>
              </div>
            </div>
            <img
              src="/assets/svg/notification_icon.svg"
              alt=""
              className="w-8 h-8"
            />
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="bg-white rounded-lg p-6 text-start space-y-6 shadow-lg mb-8 text-black">
          <p className="text-gray-500">My BinGo Balance</p>
          <h2 className="flex space-x-4 items-center text-4xl font-bold text-black mb-2">
            <span>{showBalance ? "₦2000" : "*****"}</span>
            <span>
              {showBalance ? (
                <LuEyeOff
                  size={24}
                  cursor={"pointer"}
                  onClick={() => setShowBalance(false)}
                />
              ) : (
                <LuEye
                  size={24}
                  cursor={"pointer"}
                  onClick={() => setShowBalance(true)}
                />
              )}
            </span>
          </h2>
          <button className="bg-transparent border border-black rounded text-black py-2 px-4">
            Withdraw
          </button>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-lg p-4 shadow-lg text-black mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <button className="text-green-500">See all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-green-400 text-white">
                  <th className="px-4 py-2 text-left">DATE</th>
                  <th className="px-4 py-2 text-left">AMOUNT</th>
                  <th className="px-4 py-2 text-left">TYPE</th>
                  <th className="px-4 py-2 text-left">DESCRIPTION</th>
                  <th className="px-4 py-2 text-left">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    <p className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h3.28a2 2 0 011.7.89l.82 1.11h4.36l.82-1.11A2 2 0 0113.72 5H17a2 2 0 012 2v11a2 2 0 01-2 2z"
                        />
                      </svg>
                      No transaction to show
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabbed Modal Navigation */}
        <div className="bg-green-600 text-white py-2 px-4 flex justify-around">
          <button
            onClick={() => openModal("uploadTrash")}
            className="focus:outline-none"
          >
            Upload Trash
          </button>
          <button
            onClick={() => openModal("requestPickup")}
            className="focus:outline-none"
          >
            Request Pickup
          </button>
          <button
            onClick={() => openModal("reportIssue")}
            className="focus:outline-none"
          >
            Report Issue
          </button>
          <button
            onClick={() => openModal("confirmation")}
            className="focus:outline-none"
          >
            Confirmation
          </button>
        </div>

        {/* Render Modals */}
        {activeModal === "uploadTrash" && (
          <UploadTrashModal onClose={closeModal} />
        )}
        {activeModal === "requestPickup" && (
          <RequestPickupModal onClose={closeModal} />
        )}
        {activeModal === "reportIssue" && (
          <ReportIssueModal onClose={closeModal} />
        )}
        {activeModal === "confirmation" && (
          <ConfirmationModal onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default WalletPage;
