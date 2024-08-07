import React from "react";

const Card = ({
  icon,
  text,
  level,
  percentage,
  arrow,
  iconStyle,
  iconsign,
  iconbg,
  arrowstyles,
  arrowIconstyles,
}) => {
  return (
    <div className=" rounded-md bg-slate-800 flex flex-col justify-between items-start p-4 ">
      <div
        className={`relative rounded-xl opacity-75 text-sm p-2  md:text-3xl md:p-3 ${iconStyle}`}
      >
        {icon}
        <div
          className={`absolute rounded-full text-white w-2 h-2 top-[16px] right-2 md:text-xs md:p-2 md:top-[30px] md:right-2 md:w-4 md:h-4  ${iconbg} `}
        >
          <span
            className={`relative text-[6px] top-[1px] left-[1px] md:text-xs md:-top-[6px] md:-left-[6px] ${arrowIconstyles}  `}
          >
            {iconsign}
          </span>
        </div>
      </div>
      <p className="mt-2 text-xs font-medium md:text-xl ">{text}</p>
      <div className="mt-2 w-full flex justify-between items-center">
        <strong className=" text-sm md:text-2xl">{level}</strong>
        <small className={`flex ${arrowstyles}`}>
          <span className="  text-xl">{arrow}</span>
          {percentage}%
        </small>
      </div>
    </div>
  );
};

export default Card;
