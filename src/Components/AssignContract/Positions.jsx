import PositionTable from "./PositionTable";

function Positions() {
  return (
    <div className="w-4/6">
      <h1 className="font-semibold text-lg">Positions</h1>
      <div
        className=" mt-1 border border-customPurple bg-black  rounded-lg"
        style={{ boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.1)" }}
      >
        <PositionTable/>
      </div>
    </div>
  );
}

export default Positions;
