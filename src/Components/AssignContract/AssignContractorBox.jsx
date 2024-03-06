import MeetinRoomCard from "./MeetinRoomCard";

function AssignContractorBox() {
  return (
    <div
      className="w-2/6 mr-4 border border-customPurple bg-black h-full min-h-80 rounded-lg p-2 text-customPurple hover:text-black"
      style={{ boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.1)" }}
    >
    <MeetinRoomCard num={1}/>
    <MeetinRoomCard num={2}/>
    <MeetinRoomCard num={3}/>
    <MeetinRoomCard num={4}/>
    <MeetinRoomCard num={5}/>
    </div>
  );
}

export default AssignContractorBox;
