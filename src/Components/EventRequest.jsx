import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import TableComponent from "./TableComponent";
import { BsArrowLeft,BsArrowRight  } from "react-icons/bs";

function EventRequests() {
  return (
    <div
      className="w-4/5   rounded-lg  text-white"
      style={{
        border: "1px solid #D175B6",
        boxShadow: "0px 0px 10px 5px rgba(79, 23, 89, 0.5)",
      }}
    >
      <div className="px-8 py-4 flex justify-between">
        <h1 className="font-semibold text-3xl mt-1">Event Requests</h1>

        {/* .........search field...... */}
        <div className="flex">
          <div
            className="rounded-md flex mx-2 py-1"
            style={{ border: "1px solid white" }}
          >
            <CiSearch className="mt-2 w-5 h-5 mx-2" />
            <input
              type="text"
              name=""
              id=""
              className="flex-1 border-none outline-none p-1 bg-transparent"
              placeholder="Search here"
            />
          </div>
          <div
            className="w-8 h-8 text-center mt-1"
            style={{
              background:
                "linear-gradient(276deg, rgba(140,12,255,1) 0%, rgba(236,40,210,1) 100%)",
              border: "1px solid white",
              display: "inline-block",
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            <BsPlus style={{ color: "white" }} className="w-6 h-6" />
          </div>
        </div>
      </div>
      <TableComponent/>
      <div className='bg-black w-full h-12 rounded-b-lg  flex justify-center items-center' >
        <BsArrowLeft className="w-5 h-5"/>
        <h1 className="ml-2">1 2 3 </h1>
        <h1 className="mx-2 text-customPurple">4</h1>
        <BsArrowRight className="w-5 h-5"/>
      </div>
    </div>
  );
}

export default EventRequests;
