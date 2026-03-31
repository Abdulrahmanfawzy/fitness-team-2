import PaymentForm from "./PaymentForm";

const PaymentAndConfirm = ({
  setBookingConfirmed,
}: {
  setBookingConfirmed: (bookingConfirmed: boolean) => void;
}) => {
  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">Payment & Confirm</h1>

      <div className="  bg-[#2D2D2D] rounded-md border border-gray-500 py-12 px-12 md:px-24">
        <div className="max-w-3xl mx-auto border rounded border-gray-500 px-4 py-8 bg-gray-950">
          <div className="flex flex-col items-center gap-4 justify-center px-4 md:px-24">
            <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
            <div className="w-full">
              <PaymentForm setBookingConfirmed={setBookingConfirmed} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentAndConfirm;
