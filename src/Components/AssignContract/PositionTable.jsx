import { RiArrowDropDownLine } from "react-icons/ri";
import { BsArrowLeft,BsArrowRight  } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";

function PositionTable() {
  const eventData = {
    Position: "Camera 1 (Video)",
    Time: "9am-7PM",
    lp:'LP',
    Info: "default",
    Quantity: "20",
  };

  const rows = Array.from({ length: 8 }, (_, index) => (
    <tr key={index} className="text-left text-xs hover:bg-gray-900">
      <td className="border-b border-pink-400 px-4  min-w-32">
        {eventData.Position}
      </td>
      <td className="border-b border-pink-400 px-4  min-w-32">
        {eventData.Time}
      </td>
      <td className="border-b border-pink-400 px-4  min-w-32">
        <span className="font-bold mr-2">{eventData.lp}</span>{eventData.Info}
      </td>
      <td className="border-b border-pink-400 px-4   flex items-center min-w-32">
        {eventData.Quantity}{" "}
        <div className="rounded-md flex  my-1  border border-customPurple mx-3">
          <input
            type="text"
            name=""
            id=""
            className="flex-1 border-none outline-none text-xs bg-transparent px-2"
            placeholder="Search Coordinator"
          />
          <RiArrowDropDownLine className="text-gray-400 w-5 h-6 mt-1 mx-2" />
        </div>
      </td>
    </tr>
  ));

  return (
    <div className=" flex text-sm overflow-hidden">
      <div className="scrollable-table">
        <table className="border-collapse w-full overflow-hidden">
          <thead className="text-left">
            <tr className="font-semibold">
              <th className="border-b border-pink-400 px-4 py-1 ">
                Position

              </th>
              <th className="border-b border-pink-400 px-4 py-1  ">
                Time{" "}
              </th>
              <th className="border-b border-pink-400 px-4 py-1  ">
                Info 
              </th>
              <th className="border-b border-pink-400 px-4 py-1  ">
                Quantity 
              </th>
            </tr>
          </thead>
          <tbody>{rows} 
          </tbody>
        </table>
            <div className="flex justify-center w-full py-1">
                <div className="flex py-1">
                    <BsArrowLeft/>
                    <FiCircle className="mx-2 w-2 h-2 mt-1 "  style={{ filter: "drop-shadow(2px 2px 4px rgba(220, 69, 247, 1))" }}/>
                    <FiCircle className="mr-2 w-2 h-2 mt-1"/>
                    <BsArrowRight/>
                </div>
            </div>
      </div>
    </div>
  );
}

export default PositionTable;
