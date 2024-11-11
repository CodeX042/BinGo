import React, { useState } from "react";
import TrashUpload from "./modals/UploadTrashModal";
import RequestPickup from "./modals/RequestPickupModal";
import LocationPickup from "./modals/LocationPickupModal";
import ConfirmationPage from "./modals/ConfirmationModal";
import Wallet from "./modals/Wallet";
import TransactionHistory from "./modals/TransactionHistory";
import NotificationDropdown from "./modals/Notifications";
import Sidebar from "../../components/Navs/Sidebar";
import ReportIssueModal from "./modals/ReportIssueModal";
import { useDispatch, useSelector } from "react-redux";
import { setShowSidebarNames } from "../../Redux/slices/navigationSlice";
import WithdrawModal from "./modals/WithdrawModal";

const StartSorting = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { showSidebarNames, selectedSection } = useSelector(
    (state) => state.navigation
  );
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const renderContent = () => {
    switch (selectedSection) {
      case "wallet":
        return <Wallet />;
      case "history":
        return <TransactionHistory />;
      case "upload":
        return <TrashUpload />;
      case "pickup":
        return <RequestPickup />;
      case "location":
        return <LocationPickup />;
      case "report":
        return <ReportIssueModal />;
      case "confirm":
        return <ConfirmationPage />;
      case "withdraw":
        return <WithdrawModal />;
      default:
        return <TrashUpload />;
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };


  const toggleSidebarNames = () => {
    dispatch(setShowSidebarNames(!showSidebarNames));
  };

  return (
    <div className="flex  min-h-screen lime-black-gradient">
      {/* Sidebar Component */}
      <Sidebar
        selectedSection={selectedSection}
        showSidebarNames={showSidebarNames}
        toggleSidebarNames={toggleSidebarNames}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8 w-full  space-y-4 lg:space-y-0">
          <h1 className="text-[32px] sm:text-[36px] lg:text-[48px] font-bold text-black flex justify-center lg:justify-start">
            <img
              src="/assets/svg/logo_light.svg"
              alt="logo"
              className="h-10 lg:h-auto w-24 sm:w-full"
            />
          </h1>
          <div className="flex items-center space-x-10 space-y-2 lg:space-y-0 bg-white rounded-full px-4 sm:px-6 lg:px-10 py-2">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/svg/avatar.svg"
                alt="User Avatar"
                className="w-8 sm:w-10 lg:w-10 h-8 sm:h-10 lg:h-10 rounded-full"
              />
              <div>
                <p className="text-sm text-black font-bold">
                  Hello {user?.principal.substring(0, 6)}
                </p>
                <p className="text-xs text-gray-700">Welcome back</p>
              </div>
            </div>

            {/* Notification Dropdown Component */}
            <NotificationDropdown
              isDropdownOpen={isDropdownOpen}
              toggleDropdown={toggleDropdown}
            />
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default StartSorting;
