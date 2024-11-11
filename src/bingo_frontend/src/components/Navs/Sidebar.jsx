import React from "react";
import {
  BiMenu,
  BiWallet,
  BiHistory,
  BiUpload,
  BiLogOut,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { MdOutlineReport } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearUser } from "../../Redux/slices/authSlice";
import { setSelectedSection } from "../../Redux/slices/navigationSlice";
import { logoutUser } from "../../hooks/authFunctions";

const Sidebar = ({ selectedSection, showSidebarNames, toggleSidebarNames }) => {
  const dispatch = useDispatch();

  // Sidebar menu items
  const menuItems = [
    { name: "Wallet", icon: <BiWallet size={24} />, section: "wallet" },
    { name: "Report", icon: <MdOutlineReport size={24} />, section: "report" },
    { name: "History", icon: <BiHistory size={24} />, section: "history" },
    { name: "Upload", icon: <BiUpload size={24} />, section: "upload" },
  ];

  return (
    <motion.div
      className="bg-white shadow-lg flex flex-col items-start px-2 py-6 space-y-8"
      initial={{ width: 80 }} // Initial width for the sidebar
      animate={{ width: showSidebarNames ? 156 : 80 }} // Animate to width of 256px (showing names) or 80px (only icons)
      transition={{ duration: 0.3 }} // Smooth transition duration
    >
      {/* Menu Icon */}
      <BiMenu
        className="w-8 h-8 text-gray-700 mb-10 cursor-pointer"
        onClick={toggleSidebarNames}
      />

      {/* Sidebar Menu Items */}
      {menuItems.map(({ name, icon, section }) => (
        <motion.div
          key={section}
          onClick={() => dispatch(setSelectedSection(section))}
          className="focus:outline-none flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.1 }} // Scale up the item when hovered
        >
          {icon && (
            <span
              className={`w-8 h-8 flex items-center justify-center ${
                selectedSection === section ? "text-blue-500" : "text-gray-700"
              }`}
            >
              {icon}
            </span>
          )}
          {showSidebarNames && (
            <motion.span
              className="hidden md:flex text-md font-bold text-gray-700"
              initial={{ opacity: 0 }} // Initial state (hidden)
              animate={{ opacity: showSidebarNames ? 1 : 0 }} // Animate opacity when toggling
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.span>
          )}
        </motion.div>
      ))}
      <motion.div
        onClick={() => logoutUser(dispatch)}
        className="focus:outline-none flex items-center space-x-2 cursor-pointer"
        whileHover={{ scale: 1.1 }} // Scale up the item when hovered
      >
        <span className="w-8 h-8 flex items-center justify-center ">
          <BiLogOut size={24} />
        </span>
        {showSidebarNames && (
          <motion.span
            className=" hidden md:flex  text-md font-bold text-gray-700"
            initial={{ opacity: 0 }} // Initial state (hidden)
            animate={{ opacity: showSidebarNames ? 1 : 0 }} // Animate opacity when toggling
            transition={{ duration: 0.3 }}
          >
            Logout
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
