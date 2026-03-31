import BookingConfirmed from "@/components/booking/BookingConfirmed";
import PaymentAndConfirm from "@/components/booking/PaymentAndConfirm";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { packageId } = useParams();
  console.log(packageId);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  return (
    <section className="bg-gray-950 mt-12">
      <div className="py-24 px-8 max-w-6xl mx-auto ">
        {bookingConfirmed ? (
          <BookingConfirmed />
        ) : (
          <PaymentAndConfirm setBookingConfirmed={setBookingConfirmed} />
        )}
      </div>
    </section>
  );
};

export default Booking;
