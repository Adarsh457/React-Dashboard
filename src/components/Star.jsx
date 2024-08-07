import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ number }) => {
  return (
    <div className="flex">
      {Array(5)
        .fill()
        .map((_, i) => (
          <FaStar
            key={i}
            className={` ml-1 text-base md:text-2xl ${
              i < number ? "text-yellow-500" : "text-gray-400"
            }`}
          />
        ))}
    </div>
  );
};

export default Star;
