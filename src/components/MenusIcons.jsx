import React from "react";

const MenusIcons = ({ icon, title, iconStyle }) => {
  return (
    <span className="flex justify-between items-center">
      <span
        className={`rounded-full  opacity-45 text-md w-8 h-8 p-2 md:text-3xl md:w-16 md:h-16 md:p-4 ${iconStyle} `}
      >
        {icon}
      </span>
      <p className="ml-4 capitalize text-sm font-semibold md:text-xl">
        {title}
      </p>
    </span>
  );
};

export default MenusIcons;
