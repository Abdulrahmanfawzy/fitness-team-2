import { useState } from "react";
import { MdOutlineAddCard } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { SiVodafone } from "react-icons/si";
import PaymentButton from "./PaymentButton";

const PaymentForm = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");

  const handleSelectPayment = (payment: string) => {
    console.log(payment);
    setSelectedPayment(payment);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectedPayment);
    // TODO: if the selected payment is card, show the card form
    // TODO: if the selected payment is paypal or vodafone cash we will hanlde it with the backend
  };

  return (
    <form className="space-y-3 w-full" onSubmit={handleOnSubmit}>
      <PaymentButton
        id="card"
        text="add new card"
        icon={<MdOutlineAddCard className="text-gray-400" size={18} />}
        selected={selectedPayment === "card"}
        onChange={() => handleSelectPayment("card")}
        rightContent={<span className="text-lg text-gray-400">+</span>}
      />

      <PaymentButton
        id="paypal"
        text="Paypal"
        icon={<FaPaypal className="text-blue-500" size={18} />}
        selected={selectedPayment === "paypal"}
        onChange={() => handleSelectPayment("paypal")}
      />

      <PaymentButton
        id="vodafone"
        text="vodafone cash"
        icon={<SiVodafone className="text-red-500" size={16} />}
        selected={selectedPayment === "vodafone"}
        onChange={() => handleSelectPayment("vodafone")}
      />

      <button className="w-full rounded bg-orange py-2 text-white cursor-pointer hover:scale-102 transition-scale duration-300 mt-4">
        Booking Now
      </button>
    </form>
  );
};

export default PaymentForm;
