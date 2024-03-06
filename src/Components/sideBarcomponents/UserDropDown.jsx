import  { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

function UserDropDown() {
  let [UserDropDown, setUserDropDown] = useState(true);

  function handleUserDropDownToggle() {
    setUserDropDown(!UserDropDown);
  }

  return (
    <div>
      <div className="mx-3 rounded-lg px-2 flex justify-between">
        <h1 className="font-semibold ml-1 text-white">Users</h1>
        {UserDropDown ? (
          <RiArrowDropUpLine
            onClick={handleUserDropDownToggle}
            className=" w-6 h-6 text-white"
            style={{
              textShadow: "2px 2px 8px rgba(225, 99, 247, 1)",
            }}
          />
        ) : (
          <RiArrowDropDownLine
            onClick={handleUserDropDownToggle}
            className=" w-6 h-6 text-white"
            style={{
              textShadow: "2px 2px 8px rgba(225, 99, 247, 1)",
            }}
          />
        )}
      </div>
      {/*User  subheadings........ */}

      {UserDropDown && (
        <div className="pl-4">
          <div className="text-white hover:bg-gray-500 m-3 p-1 rounded text-sm">
            <h1 className="ml-1">Admins</h1>
          </div>
          <div className="text-white hover:bg-gray-500 m-3 p-1 rounded text-sm">
            <h1 className="ml-1">Clients</h1>
          </div>
          <div className="text-white hover:bg-gray-500 m-3 p-1 rounded text-sm ">
            <h1 className="ml-1">Contractors</h1>
          </div>
        </div>
      )}
      {/*Users  subheadings........ */}
    </div>
  );
}

export default UserDropDown;
