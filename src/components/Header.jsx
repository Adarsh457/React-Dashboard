import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiMail, CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <div className=" fixed top-0 bg-slate-800 p-2 z-40 md:p-4 w-full ">
      <div className="flex justify-between items-center ">
        {/* Search Bar */}
        <form action="#" className="xl:w-full">
          <div className="ml-10 relative text-white md:ml-20 xl:text-left">
            <input
              type="text"
              className="pr-2 pl-5 w-28 rounded text-white text-xs p-1 font-medium bg-slate-700 placeholder-white outline-none md:p-2 md:w-auto md:pl-8 md:text-base xl:w-96"
              placeholder="Search"
            />
            <FaSearch className="absolute top-2 left-1 text-[10px] md:top-3 md:left-2 md:text-base" />
          </div>
        </form>
        {/* profile section */}
        <div className=" w-[120px] md:w-[270px] ">
          <ul className="flex justify-between ">
            <li className="flex items-center justify-around p-2 rounded-full text-white bg-slate-600 font-bold text-sm w-6 h-6 md:text-2xl md:w-12 md:h-12">
              <CiMail />
            </li>
            <li className="flex items-center justify-around p-2 rounded-full text-white bg-slate-600 font-bold text-sm w-6 h-6 md:text-2xl md:w-12 md:h-12">
              <CiSettings />
            </li>
            <li className="flex items-center justify-around p-2 rounded-full text-white bg-slate-600 font-bold text-sm w-6 h-6 md:text-2xl md:w-12 md:h-12 relative">
              <span className="w-1 h-1 bg-blue-400 rounded-full absolute top-2 right-2 md:top-3 md:right-3 md:w-3 md:h-3"></span>
              <IoMdNotificationsOutline />
            </li>
            <li className="flex items-center justify-around p-2 rounded-full text-white bg-slate-600 font-bold text-sm min-w-6 min-h-6 md:text-2xl md:w-12 md:h-12 relative overflow-hidden">
              <img
                src="profile.jpg"
                alt=""
                className=" absolute -top-2 left-0 object-contain "
                width="100%"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
