const bookingInfoDemoData = [
  {
    title: "Trainer",
    value: "Noah Bennet",
  },
  {
    title: "Package",
    value: "Single Session",
  },
  {
    title: "Date",
    value: "MARCH 8, 2026",
  },
  {
    title: "Time",
    value: "7:00 AM",
  },
];

const BookingInfoList = () => {
  return (
    <ul className="w-full flex flex-col items-start gap-3 text-sm">
      {bookingInfoDemoData.map((item) => (
        <li className="w-full flex items-center justify-between">
          <h3 className="text-[#9b9b9b]">{item.title}</h3>
          <p>{item.value}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookingInfoList;
