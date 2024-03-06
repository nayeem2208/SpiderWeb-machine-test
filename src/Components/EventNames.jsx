import { RiArrowDropDownLine } from "react-icons/ri";
import AssignContractorBox from "./AssignContract/AssignContractorBox";
import Positions from "./AssignContract/Positions";

function EventNames() {
  return (
    <div
      className="w-4/5 px-8 pb-2 rounded-lg text-white"
      style={{
        border: "1px solid #D175B6",
        boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.5)",
      }}
    >
      <div className="py-4 flex justify-between">
        <h1 className="font-semibold text-3xl mt-1">
          Event Name{" "}
          <span className="font-light text-base">(Venue Details)</span>
        </h1>
      </div>

      <div
        className=" rounded  font-semibold text-sm"
        style={{
          border: "1px solid #D175B6",
          color: "#D175B6",
          width: "44.7vw",
        }}
      >
        <button
          className="  px-3 py-2 hover:bg-customPurple hover:text-white"
          style={{ borderRight: "1px solid #D175B6" }}
        >
          Event Details
        </button>
        <button
          className="  px-3 py-2 bg-customPurple text-white"
          style={{ borderRight: "1px solid #D175B6" }}
        >
          Assign Coordinator/Coordinator
        </button>
        <button
          className="  px-3 py-2 hover:bg-customPurple hover:text-white"
          style={{ borderRight: "1px solid #D175B6" }}
        >
          Session Management
        </button>
        <button className="px-3 py-2 hover:bg-customPurple hover:text-white">
          Generate SOW
        </button>
      </div>
      {/* .....Second portion....... */}
      <div className="flex mt-4">
        <div className="w-3/6 pr-4">
          <h1 className="font-semibold text-lg">Assign Coordinator</h1>
          <div className="rounded-md flex  py-1 mt-2 border border-gray-400 ">
            <input
              type="text"
              name=""
              id=""
              className="flex-1 border-none outline-none p-1 bg-transparent text-sm"
              placeholder="Search Coordinator"
            />
            <RiArrowDropDownLine className="text-gray-400 w-5 h-6 mt-1 mx-2" />
          </div>
          <p className="text-sm mt-1 font-semibold text-customPurple">
            Add New Coordinator
          </p>
        </div>
        <div className="w-3/6">
          <h1 className="font-semibold text-lg">
            Event Name{" "}
            <span className="font-light text-base">(Venue Here)</span>
          </h1>
          <div className="text-xs">
            <div className="flex border py-1 mt-2 border-customPurple rounded px-2">
              <h1 className="   font-semibold w-3/6">
                Start: 12-12-2023
              </h1>
              <h1 className="  font-semibold w-3/6">Ends: 15-12-2023</h1>
            </div>
            <div className="border py-1 mt-2 border-customPurple rounded px-2">
              <h1>Venue Address:Some Location 12,Name Here,City,State</h1>
            </div>
          </div>
        </div>
      </div>

      {/* ..........Third portion........ */}
      <div className="mt-3">
        <h1 className="font-semibold text-lg">Assign Contractor</h1>
        <div className="flex mt-4">
          <AssignContractorBox />
          <Positions />
        </div>
        <div className="flex justify-center my-3">
          <button className=" w-40 px-3 py-2 rounded-lg font-semibold shadow-inner" style={{backgroundColor:'#D85AD8',boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.5),black 0px 0px 8px inset"}}>Save Edits</button>
        </div>
      </div>
    </div>
  );
}

export default EventNames;
