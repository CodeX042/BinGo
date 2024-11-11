import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { markAllAsRead } from "../../../Redux/slices/notificationSlice";

const NotificationDropdown = ({ isDropdownOpen, toggleDropdown }) => {
  const { notifications } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const unreadCount = notifications.length;

  return (
    <div className="relative">
      {/* Notification Icon with Badge */}
      <img
        src="/assets/svg/notification_icon.svg"
        alt="Notification Icon"
        className="w-8 h-8 cursor-pointer"
        onClick={toggleDropdown}
      />
      {unreadCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {unreadCount}
        </span>
      )}

      {/* Animated Dropdown */}
      {isDropdownOpen && (
        <motion.div
          className="absolute right-0 mt-2 w-60 sm:w-72 bg-white shadow-lg rounded-lg border border-gray-300 z-20"
          initial={{ opacity: 0, scaleY: 0, y: -10 }}
          animate={{
            opacity: 1,
            scaleY: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scaleY: 0,
            y: -10,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 25,
          }}
        >
          <div className="max-h-60 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                >
                  {notification.message}
                </div>
              ))
            ) : (
              <div className="p-2 text-xs sm:text-sm text-gray-500">
                No new notifications
              </div>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              className="w-full bg-blue-500 text-white py-2 text-xs sm:text-sm rounded-b-lg"
              onClick={() => dispatch(markAllAsRead())}
            >
              Mark all as read
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default NotificationDropdown;
