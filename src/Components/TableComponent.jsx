import { FaChevronCircleDown } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


function TableComponent() {
  const eventData = {
    eventName: 'Filled Name',
    eventStart: 'Jan 12, 2024',
    eventEnd: 'Jan 14, 2024',
    clientName: 'Muhammed Asad',
    contactInfo: '+1234 566 7890',
    venue: 'Lorem Ipsum Dolor Sit Amet',
    city: ' - ',
    state: ' - ',
    zip: ' - ',
  };
  const Firstcolums=Array.from({length:14},(_,index)=>(
    <tr key={index} className='text-center relative'>
  <div className='backdrop-blur-3xl ' style={{ position: 'absolute', zIndex: 9, top: 0, left: 0, right: 0, bottom: 0,}}></div>
  <td className="border-b border-customPurple px-4 py-2 min-w-40 flex relative z-10" style={{backgroundColor: 'rgba(28, 28, 28,0.4)'}}>
    <div className='flex w-full h-full' >
      <IoEyeOutline className='mt-1 mr-2' />
      {eventData.eventName}
    </div>
  </td>
</tr>

  ))

  const rows = Array.from({ length: 14}, (_, index) => (   
    <tr key={index} className='text-center z-0'>
      {/* <td className="border-b border-customPurple px-4 py-2 min-w-40 flex"><IoEyeOutline className='mt-1 mr-2'/>{eventData.eventName}</td> */}
      <td className="border-b border-customPurple px-4 py-2 min-w-40">{eventData.eventStart}</td>
      <td className="border-b border-customPurple px-4 py-2 min-w-40">{eventData.eventEnd}</td>
      <td className="border-b border-customPurple px-4 py-2 min-w-40">{eventData.clientName}</td>
      <td className="border-b border-customPurple px-4 py-2 min-w-40">{eventData.contactInfo}</td>
      <td className="border-b border-customPurple px-4 py-2 min-w-64">{eventData.venue}</td>
      <td className="border-b border-customPurple px-4 py-2 min-w-40">{eventData.city}</td>
      <td className="border-b border-customPurple px-4 py-2 min-w-40">{eventData.state}</td>
      <td className="border-b border-customPurple px-4 py-2 min-w-40">{eventData.zip}</td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto flex mt-3">
      <div className="sticky left-0 top-0 z-50">
        <table className="border-collapse mb-4">
          <thead>
            <tr>
              <th className="border-b border-customPurple px-4 py-2 min-w-64 flex text-center  bg-customPurple">Event Name<FaChevronCircleDown className='mx-2 mt-1'/> </th>
            </tr>
          </thead>
          <tbody className='bg-transparent'>{Firstcolums}</tbody>
        </table>
      </div>
      <div className="scrollable-table">
        <table className="border-collapse w-full">
          <thead className="bg-customPurple">
            <tr>
              {/* <th className="border-b border-pink-400 px-4 py-2 min-w-40 flex text-center">Event Name<FaChevronCircleDown className='mx-2 mt-1'/> </th> */}
              <th className="border-b border-customPurple px-4 py-2 min-w-40 ">Event Start</th>
              <th className="border-b border-customPurple px-4 py-2 min-w-40 flex">Event End <FaChevronCircleDown className='mx-2 mt-1'/></th>
              <th className="border-b border-customPurple px-4 py-2 min-w-40 "><div className='flex'>Client Name <FaChevronCircleDown className='mx-2 mt-1'/></div></th>
              <th className="border-b border-customPurple px-4 py-2 min-w-40">Contact Info</th>
              <th className="border-b border-customPurple px-4 py-2 min-w-40">Venue</th>
              <th className="border-b border-customPurple px-4 py-2 min-w-40">City</th>
              <th className="border-b border-customPurple px-4 py-2 min-w-40">State</th>
              <th className="border-b border-customPurple px-4 py-2 min-w-40">Zip</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
