import React from "react";
import { GrStatusInfo } from "react-icons/gr";
import image from "../../public/Notificsation.png";
import userImage from "../../public/Ellipse 2.png";

function HeaderPart() {
  return (
    <div className="flex justify-center text-center ">
      <div className="flex mt-12">
        <GrStatusInfo className="text-white w-6 h-6 mt-4" />
        <img src={image} alt="" className="w-7 h-7 mt-4 mx-4" />
        <h1 className="text-white text-left text-semibold mt-1">
          Hi,<span style={{ color: "#03ffd5" }}>Muhammed Asad</span>
          <br />
          Welcome back!
        </h1>
        <div
          className=" rounded-full w-14 h-14 ml-4 overflow-hidden mt-1"
          style={{
            backgroundColor: "#ca58e0",
            boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.5)",
          }}
        >
          <img src={userImage} alt="" className="w-14 h-full" />
        </div>
      </div>
    </div>
  );
}

export default HeaderPart;
