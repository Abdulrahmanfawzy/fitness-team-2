import { Link } from "react-router-dom";
import BookingInfoList from "./BookingInfoList";
import SuccessfullySignedIcon from "./SuccessfullySignedIcon";

export type BookingDetails = {
  trainerName?: string;
  packageTitle?: string;
  date?: string;
  time?: string;
  booking_id?: string | number;
  [key: string]: any;
};

const BookingConfirmed = ({ details }: { details?: BookingDetails }) => {
  return (
    <div className=" max-w-4xl mx-auto  bg-[#2D2D2D] rounded-2xl py-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-stretch gap-4 px-4">
        <SuccessfullySignedIcon className="mb-4" />
        <h2 className="self-center text-2xl font-bold">Booking Confirmed</h2>
        <p className="max-w-lg text-center text-xl font-light text-gray-300 text-wrap self-center">
          {/* here I should get the email of hte user  */}
          You're All set, Ahemd. Check your Email () For confirmation Details
          Preperation Instructions.
        </p>
        <h3 className="self-center text-xl font-bold">Booking Summary</h3>
        <div className="w-full rounded border border-[#999999] bg-gray-950 p-2">
          <BookingInfoList details={details || {}} />
        </div>
        <Link
          to="/"
          className="w-full rounded bg-orange py-2 text-white cursor-pointer hover:scale-102 transition-scale duration-300 text-center"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmed;
