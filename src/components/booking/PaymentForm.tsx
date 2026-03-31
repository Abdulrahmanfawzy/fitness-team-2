import { useState } from "react";
import { MdOutlineAddCard } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { SiVodafone } from "react-icons/si";
import PaymentButton from "./PaymentButton";
import AddCardDialog from "./AddCardDialog";
import type { CardData } from "@/hooks/usePaymentCards";
import toast from "react-hot-toast";

const PaymentForm = ({
  setBookingConfirmed,
}: {
  setBookingConfirmed: (data: any) => void;
}) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  // States for payment details
  const [savedCard, setSavedCard] = useState<CardData | null>(null);

  const handleSelectPayment = (payment: string) => {
    setSelectedPayment(payment);
    if (payment === "card" && !savedCard) {
      setIsCardModalOpen(true);
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedPayment === "card") {
      handleCardPayment(savedCard, setBookingConfirmed, setIsSimulating);
    } else if (selectedPayment === "vodafone") {
      toast.error(
        "Vodafone Cash is not available at the moment, Please try again later",
      );
    } else if (selectedPayment === "paypal") {
      toast.error(
        "PayPal is not available at the moment, Please try again later",
      );
    } else {
      toast.error("Payment Failed, Please try again later");
    }
  };

  return (
    <>
      <form className="space-y-3 w-full" onSubmit={handleOnSubmit}>
        <PaymentButton
          id="card"
          text={
            savedCard
              ? `**** **** **** ${savedCard.card_last_four || "****"}`
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
          icon={<FaPaypal className="text-blue-500" size={24} />}
          selected={selectedPayment === "paypal"}
          onChange={() => handleSelectPayment("paypal")}
        />

        {/* PayPal Details */}
        {selectedPayment === "paypal" && (
          <div className="p-4 bg-[#1A1A1A] rounded-md border border-gray-600 mt-2 mb-4 text-sm text-gray-300 animate-in fade-in slide-in-from-top-2">
            You will be redirected to{" "}
            <span className="text-blue-500">PayPal</span> to complete your
            purchase securely.
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
          <div className="p-4 bg-[#1A1A1A] rounded-md border border-gray-600 mt-2 mb-4 text-sm text-gray-300 animate-in fade-in slide-in-from-top-2">
            You will be redirected to{" "}
            <span className="text-orange">Vodafone Cash</span> to complete your
            purchase securely.
          </div>
        )}

        <button
          type="submit"
          disabled={isSimulating}
          className="w-full rounded bg-orange py-2 text-white cursor-pointer hover:scale-102 transition-scale duration-300 mt-4 font-bold disabled:opacity-50"
        >
          {isSimulating
            ? "Processing..."
            : selectedPayment === "paypal"
              ? "Continue with PayPal"
              : "Booking Now"}
        </button>
      </form>

      {/* Card Details Modal */}
      <AddCardDialog
        isCardModalOpen={isCardModalOpen}
        setIsCardModalOpen={setIsCardModalOpen}
        onCardAdded={(card) => {
          setSavedCard(card);
          setSelectedPayment("card");
        }}
      />
    </>
  );
};


/**
 * Handle the process of booking with the card payment 
 * @param savedCard 
 * @param setBookingConfirmed 
 * @param setIsSimulating 
 * @returns 
 */
function handleCardPayment(
  savedCard: CardData | null,
  setBookingConfirmed: (data: any) => void,
  setIsSimulating: (data: boolean) => void,
) {
  if (!savedCard) {
    toast.error("Please add a card");
    return;
  }

  setIsSimulating(true);
  setTimeout(() => {
    setIsSimulating(false);
    setBookingConfirmed({
      trainerName: "John Doe",
      packageTitle: "Package Title",
      date: "2022-01-01",
      time: "12:00 PM",
      booking_id: "123456789",
    });
  }, 3000);
}

export default PaymentForm;
