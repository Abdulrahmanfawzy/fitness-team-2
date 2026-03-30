import { useState } from "react";
import { MdOutlineAddCard } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { SiVodafone } from "react-icons/si";
import PaymentButton from "./PaymentButton";
import AddCardDialog from "./AddCardDialog";
import type { CardData } from "@/hooks/useAddCard";

const PaymentForm = ({
  setBookingConfirmed,
}: {
  setBookingConfirmed: (bookingConfirmed: boolean) => void;
}) => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  // States for payment details
  const [savedCard, setSavedCard] = useState<CardData | null>(null);
  const [vodafoneNumber, setVodafoneNumber] = useState("");

  const handleSelectPayment = (payment: string) => {
    setSelectedPayment(payment);
    if (payment === "card" && !savedCard) {
      setIsCardModalOpen(true);
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate API submission depending on selected method
    console.log("Processing payment with method:", selectedPayment);
    if (selectedPayment === "card") {
      console.log("Card Details:", savedCard);
    } else if (selectedPayment === "vodafone") {
      console.log("Vodafone Cash Number:", vodafoneNumber);
    } else if (selectedPayment === "paypal") {
      console.log("Redirecting to PayPal...");
    }

    // After successful payment handling:
    setBookingConfirmed(true);
  };

  return (
    <>
      <form className="space-y-3 w-full" onSubmit={handleOnSubmit}>
        <PaymentButton
          id="card"
          text={
            savedCard?.cardNumber
              ? `Card ending in ${savedCard.cardNumber.slice(-4) || "****"}`
              : "add new card"
          }
          icon={<MdOutlineAddCard className="text-gray-400" size={18} />}
          selected={selectedPayment === "card"}
          onChange={() => handleSelectPayment("card")}
          rightContent={
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsCardModalOpen(true);
              }}
              className="text-2xl text-gray-400 hover:text-white px-2 leading-none cursor-pointer"
            >
              +
            </button>
          }
        />

        <PaymentButton
          id="paypal"
          text="Paypal"
          icon={<FaPaypal className="text-blue-500" size={18} />}
          selected={selectedPayment === "paypal"}
          onChange={() => handleSelectPayment("paypal")}
        />

        {/* PayPal Details */}
        {selectedPayment === "paypal" && (
          <div className="p-4 bg-[#1A1A1A] rounded-md border border-gray-600 mt-2 mb-4 text-sm text-gray-300 animate-in fade-in slide-in-from-top-2">
            You will be redirected to PayPal to complete your purchase securely.
          </div>
        )}

        <PaymentButton
          id="vodafone"
          text="vodafone cash"
          icon={<SiVodafone className="text-red-500" size={16} />}
          selected={selectedPayment === "vodafone"}
          onChange={() => handleSelectPayment("vodafone")}
        />

        {/* Vodafone Details */}
        {selectedPayment === "vodafone" && (
          <div className="p-4 bg-[#1A1A1A] rounded-md border border-gray-600 mt-2 mb-4 animate-in fade-in slide-in-from-top-2">
            <input
              type="tel"
              placeholder="Vodafone Cash Mobile Number"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-orange"
              required
              value={vodafoneNumber}
              onChange={(e) => setVodafoneNumber(e.target.value)}
            />
          </div>
        )}

        <button className="w-full rounded bg-orange py-2 text-white cursor-pointer hover:scale-102 transition-scale duration-300 mt-4 font-bold">
          {selectedPayment === "paypal"
            ? "Continue with PayPal"
            : "Booking Now"}
        </button>
      </form>

      {/* Card Details Modal */}
      <AddCardDialog
        isCardModalOpen={isCardModalOpen}
        setIsCardModalOpen={setIsCardModalOpen}
        onCardAdded={(card) => setSavedCard(card)}
      />
    </>
  );
};

export default PaymentForm;
