import React from "react";
import Card from "./Card";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaBasketShopping, FaPlus, FaCheck, FaBurger } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { AiOutlineAim } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImArrowDown } from "react-icons/im";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Star from "./Star";
import MenusIcons from "./MenusIcons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Chart Data
  const uData = [2, 5.5, 2, 8.5, 1.5, 5, 9, 10, 12, 11, 8, 5, 4];
  const pData = [5, 10, 5, 10, 15, 10, 15, 8, 6, 12, 10, 11];
  const xLabels = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];

  const data = xLabels.map((label, index) => ({
    name: label,
    pData: pData[index],
    uData: uData[index],
  }));

  const formatYAxis = (tickItem) => {
    return `${tickItem}k`;
  };

  // MenuData
  const menuData = [
    {
      icon: <AiOutlineAim />,
      title: "Goals",
      bgcolour: "bg-orange-900 text-orange-500",
    },
    {
      icon: <FaBurger />,
      title: "Popular Dishes",
      bgcolour: "bg-blue-800 text-blue-400",
    },
    {
      icon: <BiDish />,
      title: "Menus",
      bgcolour: "bg-teal-800 text-teal-400",
    },
  ];

  // Order Table Data List
  const ordersList = [
    {
      img: "profile.jpg",
      name: "Wade Warren",
      orderNo: 15478256,
      amount: 124.0,
      status: "Delivered",
    },
    {
      img: "profile.jpg",
      name: "Jane Cooper",
      orderNo: 48965786,
      amount: 365.02,
      status: "Delivered",
    },
    {
      img: "profile.jpg",
      name: "Guy Hawkins",
      orderNo: 78958215,
      amount: 45.88,
      status: "Cancelled",
    },
    {
      img: "profile.jpg",
      name: "Kristin Watson",
      orderNo: 20965732,
      amount: 65.0,
      status: "Pending",
    },
    {
      img: "profile.jpg",
      name: "Cody Fisher",
      orderNo: 95715620,
      amount: 545.0,
      status: "Delivered",
    },
    {
      img: "profile.jpg",
      name: "Savannah Nguyen",
      orderNo: 78514568,
      amount: 128.0,
      status: "Delivered",
    },
  ];

  // Customer Data List
  const customerFeedback = [
    {
      img: "profile.jpg",
      name: "Jenny Wilson",
      starNum: 4,
      feedback:
        "Mushroom and Tomato Basil soups were tasty. Beer was fresh and chilled. Thai green curry was good but it would have tasted better with jasmine rice/sticky rice which were not in the menu.",
    },
    {
      img: "profile.jpg",
      name: "Dianne Russell",
      starNum: 5,
      feedback:
        "Mushroom and Tomato Basil soups were tasty. Beer was fresh and chilled. Thai green curry was good but it would have tasted better with jasmine rice/sticky rice which were not in the menu.",
    },
    {
      img: "profile.jpg",
      name: "Devon Lane",
      starNum: 4,
      feedback:
        "Mushroom and Tomato Basil soups were tasty. Beer was fresh and chilled. Thai green curry was good but it would have tasted better with jasmine rice/sticky rice which were not in the menu.",
    },
  ];
  return (
    <div className=" bg-slate-950 text-white mt-4 ml-10 md:mt-20 md:ml-20">
      <div className="container mx-auto px-4 py-4">
        <h1 className="font-bold text-left text-lg md:text-2xl mt-4 md:p-4 md:-ml-5 md:mt-2">
          Dashboard
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-4">
          <div className="col-span-2 md:col-span-3">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
              {/* card section */}
              <Card
                icon={<FaBasketShopping />}
                text="Total Orders"
                level={75}
                percentage={3}
                arrow={<IoMdArrowDropdown />}
                iconStyle=" bg-blue-800 text-blue-400 "
                iconsign={<FaPlus />}
                iconbg="bg-blue-500 "
                arrowstyles="text-emerald-600"
              />
              <Card
                icon={<GiShoppingBag />}
                text="Total Delivered"
                level={70}
                percentage={3}
                arrow={<IoMdArrowDropup />}
                iconStyle=" bg-emerald-800 text-teal-400 "
                iconsign={<FaCheck />}
                iconbg="bg-teal-400 "
                arrowstyles="text-red-400"
              />
              <Card
                icon={<GiShoppingBag />}
                text="Total Cancelled"
                level="05"
                percentage={3}
                arrow={<IoMdArrowDropdown />}
                iconStyle=" bg-red-800 text-red-400 "
                iconsign={<IoClose />}
                iconbg="bg-red-400 "
                arrowstyles="text-emerald-600"
              />
              <Card
                icon={<PiCurrencyCircleDollarFill />}
                text="Total Revenue"
                level="$12k"
                percentage={3}
                arrow={<IoMdArrowDropup />}
                iconStyle=" bg-pink-800 text-pink-400 "
                iconsign={<ImArrowDown />}
                iconbg="text-pink-400 "
                arrowstyles="text-red-400"
                arrowIconstyles=" text-pink-400 "
              />
            </div>
          </div>
          <div className=" col-span-2 md:col-span-2 bg-slate-800 rounded-md">
            <div className="flex flex-col justify-between p-4 md:flex-row ">
              <div className="flex flex-col justify-around">
                <h1 className=" text-center text-sm font-semibold md:text-left md:text-xl">
                  Net Profit
                </h1>

                <span className=" text-lg text-center mt-2 font-bold md:text-4xl md:mt-0 md:text-left ">
                  $6759.25
                </span>

                <div className="mt-[6px] w-8 m-auto  flex justify-between items-center self-end md:w-full ">
                  <small className="flex text-green-400 md:mt-8 ">
                    <span className=" text-center text-xl ">
                      <IoMdArrowDropup />
                    </span>
                    3%
                  </small>
                </div>
              </div>
              <div className=" mt-2 flex flex-col items-center justify-around md:mt-0 ">
                <div className="progressbar-container items-center w-16 h-16 md:w-24 md:h-24 ">
                  <CircularProgressbarWithChildren
                    value={70}
                    styles={{
                      root: {},
                      path: {
                        stroke: "#4169E1 ",
                      },
                      trail: {
                        stroke: "#2E4DA7",
                      },
                      text: {
                        fill: "#f88",
                        fontSize: "16px",
                      },
                    }}
                  >
                    <div className=" text-[8px] md:text-xs ">
                      <strong>70%</strong>
                      <h1>Goal</h1>
                      <h1>Completed</h1>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
                <p className="mt-1 text-sm md:text-xl">
                  The Value here has been round off.
                </p>
              </div>
            </div>
          </div>
          {/* Bar Chart */}
          <div className="col-span-2 md:col-span-3 bg-slate-800 rounded-md">
            <div className="flex justify-between p-4 md:p-6">
              <h1 className=" font-semibold text-sm md:text-xl ">Activity</h1>
              <span className="flex items-center rounded-full bg-slate-700 px-2 py-1 md:px-4 md:py-2">
                <p className=" text-[8px] md:text-lg ">Weekly</p>
                <IoMdArrowDropdown className="ml-2 font-bold text-base md:text-xl" />
              </span>
            </div>

            <div className="chart-container">
              <ResponsiveContainer>
                <BarChart data={data}>
                  <CartesianGrid horizontal={true} vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatYAxis} />
                  <Bar
                    dataKey="pData"
                    fill="#6495ed"
                    radius={[50, 50, 50, 50]}
                  />
                  <Bar
                    dataKey="uData"
                    fill="#6495ed"
                    radius={[50, 50, 50, 50]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Goals & Menus  */}
          <div className="col-span-2 md:col-span-2 bg-slate-800 rounded-md">
            <div className="p-2 md:p-4">
              <ul>
                {menuData.map((items, index) => {
                  const { icon, title, bgcolour } = items;
                  return (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 md:p-4"
                    >
                      <MenusIcons
                        title={title}
                        icon={icon}
                        iconStyle={bgcolour}
                      />
                      <span className=" bg-slate-600 rounded-full p-1 ">
                        <MdKeyboardArrowRight className="text-xs md:text-lg" />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Recent Orders List Table */}
          <div className="bg-slate-800 rounded-md col-span-2 md:col-span-3 ">
            <div className="p-4">
              <h1 className="p-2 font-bold items-start float-left mb-4 text-base md:text-3xl ">
                Recent Orders
              </h1>
              <div className=" w-full overflow-x-auto ">
                <table className=" mt-8 w-full">
                  <thead className="mt-4">
                    <tr className="text-left text-xs md:text-lg">
                      <th className="px-4 py-2">Customer</th>
                      <th className="px-4 py-2">Order No.</th>
                      <th className="px-4 py-2">Amount</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {ordersList.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t-2 border-slate-700 text-[10px] md:text-lg "
                      >
                        <td className="flex items-center px-4 py-2">
                          <div className=" min-w-8 min-h-8 rounded-full overflow-hidden relative md:w-12 md:h-12">
                            <img
                              src={item.img}
                              alt="userImage"
                              className="absolute -top-0 left-0 object-contain md:-top-2 "
                              width="100%"
                            />
                          </div>
                          <p className="ml-4 text-left">{item.name}</p>
                        </td>
                        <td className="px-4 py-2 text-left">{item.orderNo}</td>
                        <td className="px-4 py-2 text-left">${item.amount}</td>
                        <td className="px-4 py-2 text-left">
                          <button
                            className={`rounded-full font-semibold px-4 py-0 opacity-75 ${
                              item.status === "Delivered"
                                ? "bg-emerald-800 text-teal-400"
                                : "bg-red-800 text-red-400"
                            }`}
                          >
                            {item.status}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Customer's Feedback */}
          <div className=" bg-slate-800 rounded-md col-span-2 md:col-span-2">
            <div className=" p-4 ">
              <h1 className="p-2 font-bold text-left text-base mb-4 md:text-3xl ">
                Customer's Feedback
              </h1>
              <div className="p-2">
                <ul>
                  {customerFeedback.map((items, index) => {
                    const { img, name, feedback, starNum } = items;
                    return (
                      <li
                        key={index}
                        className=" border-b-2 border-slate-700 mb-4"
                      >
                        <div className="flex items-center">
                          <div className=" min-w-8 min-h-8 rounded-full overflow-hidden md:w-12 md:h-12 relative ">
                            <img
                              src={img}
                              alt="userImage"
                              className=" absolute -top-0 left-0 object-contain md:-top-2 "
                              width="100%"
                            />
                          </div>
                          <p className="ml-4 font-semibold text-xs md:text-xl">
                            {name}
                          </p>
                        </div>
                        <div className="mt-2 -ml-2">
                          <Star number={starNum} />
                        </div>
                        <p className="text-left mt-2 mb-4 text-xs md:text-xl">
                          {feedback}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
