import { useState } from "react";
import starImage from "../../../public/Star_2-removebg-preview.png";

function MeetinRoomCard(prop) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColor =
    prop.num === 1
      ? "text-black"
      : isHovered
      ? "text-black"
      : "text-customPurple";
  const bgColor =
    prop.num === 1 ? "bg-customPurple" : isHovered ? "bg-customPurple" : "";
  const starFilter =
    prop.num === 1
      ? "drop-shadow(2px 2px 4px rgba(0, 0, 0, 1))"
      : isHovered
      ? "drop-shadow(2px 2px 4px rgba(0, 0, 0, 1))"
      : "drop-shadow(2px 2px 4px rgba(220, 69, 247, 1))";

  return (
    <div
      className={`AssignContractor border border-customPurple my-2 ${bgColor} rounded-lg  py-3 px-2 hover:${bgColor}`}
      style={{ boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.3)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex ">
        <h1 className={`font-semibold text-lg text-white`}>
          Meeting Room {prop.num}
        </h1>
        <img
          src={starImage}
          className={`w-4 h-4 mt-1 mx-2 `}
          style={{ filter: starFilter }}
          alt=""
        />
        <span className={`font-semibold ${textColor}`}>12 Positions</span>
      </div>
      <h1 className={`text-xs text-white`}>
        Start from 12 Jan,2023-Ends at 15 Jan,2023
      </h1>
    </div>
  );
}

export default MeetinRoomCard;
