import EventDropDown from "./sideBarcomponents/EventDropDown";
import UserDropDown from "./sideBarcomponents/UserDropDown";
import { TbLogout2 } from "react-icons/tb";

function SideBar() {
  return (
    <div
      className="flex flex-col w-1/5 mr-4 rounded-lg  "
      style={{
        border: "1px solid #D175B6",
        boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.5)",
      }}
    >
      <div className="flex-grow mb-8"> 
        <EventDropDown />
        <h1 className="text-white font-semibold ml-6 my-3">Positions</h1>
        <h1 className="text-white font-semibold ml-6 my-3">contractors</h1>
        <UserDropDown />
        <h1 className="text-white font-semibold ml-6 my-3">Profile</h1>
      </div>
      <button className="flex justify-center bg-black text-white rounded p-1 mt-auto m-2">
        <TbLogout2 className="mt-1 mx-2" />
        Logout
      </button>
    </div>
  );
}

export default SideBar;
