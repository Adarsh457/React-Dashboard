import React from "react";
import { FaHome } from "react-icons/fa";
import { BsHandbag, BsFileBarGraph } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { RiApps2Fill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 z-50 bg-slate-800 w-10 p-2 md:w-20 md:p-4 ">
      <div className="ml-1 mt-2 md:text-4xl  ">
        <RiApps2Fill className="text-blue-400" />
      </div>
      <div className="mt-4 flex items-center flex-col text-white h-screen">
        <div>
          <ul>
            <li className=" relative p-2 text-xs md:p-5 md:text-2xl">
              <a href="#" className="hover:text-blue-400 group/item">
                <FaHome />
                <span className="invisible absolute top-1 left-0 w-[2px] h-5  group-hover/item:visible rounded-full bg-blue-400 md:top-3 md:w-1 md:h-10"></span>
              </a>
            </li>
            <li className=" relative p-2 text-xs md:p-5 md:text-2xl">
              <a href="#" className="hover:text-blue-400 group/item">
                <BsFileBarGraph />
                <span className="invisible absolute top-1 left-0 w-[2px] h-5  group-hover/item:visible rounded-full bg-blue-400 md:top-3 md:w-1 md:h-10"></span>
              </a>
            </li>
            <li className=" relative p-2 text-xs md:p-5 md:text-2xl">
              <a href="#" className="hover:text-blue-400 group/item">
                <IoBagCheckOutline />
                <span className="invisible absolute top-1 left-0 w-[2px] h-5  group-hover/item:visible rounded-full bg-blue-400 md:top-3 md:w-1 md:h-10"></span>
              </a>
            </li>
            <li className=" relative p-2 text-xs md:p-5 md:text-2xl">
              <a href="#" className="hover:text-blue-400 group/item">
                <CiWallet />
                <span className="invisible absolute top-1 left-0 w-[2px] h-5  group-hover/item:visible rounded-full bg-blue-400 md:top-3 md:w-1 md:h-10"></span>
              </a>
            </li>
            <li className=" relative p-2 text-xs md:p-5 md:text-2xl">
              <a href="#" className="hover:text-blue-400 group/item">
                <BsHandbag />
                <span className="invisible absolute top-1 left-0 w-[2px] h-5  group-hover/item:visible rounded-full bg-blue-400 md:top-3 md:w-1 md:h-10"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className=" mt-96 md:mt-52 ">
          <LuArrowUpRightFromCircle className="rotate-45 text-xs md:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
