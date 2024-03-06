import  { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiNumberCircleNineFill } from "react-icons/pi";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function EventDropDown() {
  let [eventDropDown, seteventDropDown] = useState(true);

  function handleEventDropDownToggle() {
    seteventDropDown(!eventDropDown);
  }

  let location = useLocation();

  const linkStyle = {
    border: "1px solid #D175B6",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.5)",
    color: "#D175B6",
    textShadow: "2px 2px 8px rgba(225, 99, 247, 0.5)",
    
  };

  return (
    <div>
      <div
        className="m-3 rounded-lg p-2 flex justify-between"
        style={{
          border: "1px solid #D175B6",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
        {eventDropDown ? (
          <RiArrowDropUpLine
            onClick={handleEventDropDownToggle}
            className=" w-6 h-6"
            style={{
              color: "#D175B6",
              textShadow: "2px 2px 8px rgba(225, 99, 247, 1)",
            }}
          />
        ) : (
          <RiArrowDropDownLine
            onClick={handleEventDropDownToggle}
            className=" w-6 h-6"
            style={{
              color: "#D175B6",
              textShadow: "2px 2px 8px rgba(225, 99, 247, 1)",
            }}
          />
        )}
      </div>
      {/*Event  subheadings........ */}

      {eventDropDown && (
        <div className="pl-4">
          <div
            className="text-white hover:bg-gray-500 m-3 p-1 rounded text-sm "
            style={location.pathname === "/" ? linkStyle : {}}
          >
            <Link to="/">
              <h1 className=" ml-1 ">New Requests</h1>
            </Link>
          </div>
          <div className="text-white hover:bg-gray-500 m-3 p-1 rounded text-sm flex justify-between">
            <h1 className="ml-1">Estimate</h1>
            <div className="bg-pink-400 w-4 h-4 rounded-full flex justify-center items-center">
              <PiNumberCircleNineFill className="text-white w-full h-full" />
            </div>
          </div>
          <div
            className="text-white hover:bg-gray-500 m-3 p-1 rounded text-sm"
            style={location.pathname === "/Events" ? linkStyle : {}}
          >
            <Link to="/Events">
              <h1 className="ml-1">Events</h1>
            </Link>
          </div>
          <div className="text-white hover:bg-gray-500 m-3 p-1 rounded text-sm ">
            <h1 className="ml-1">Partial Requsts</h1>
          </div>
        </div>
      )}
      {/*Event  subheadings........ */}
    </div>
  );
}

export default EventDropDown;
