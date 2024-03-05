import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function SideBar() {
  return (
    <div
      className="w-1/5  mr-4 rounded-lg h-96"
      style={{
        border: "1px solid #D175B6",
        boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.5)",
      }}
    >
      <div
        className="m-3 rounded-lg p-2 flex justify-between"
        style={{
          border: "1px solid #D175B6",
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.5)",
        }}
      >
        <h1
        className="font-semibold ml-1"
          style={{
            color: "#D175B6",
            textShadow: "2px 2px 8px rgba(225, 99, 247, 0.5)",
          }}
        >
            Events
        </h1>
        <RiArrowDropDownLine className=" w-6 h-6" style={{color:'#D175B6', textShadow: "2px 2px 8px rgba(225, 99, 247, 1)"}}/>
      </div>
    </div>
  );
}

export default SideBar;
