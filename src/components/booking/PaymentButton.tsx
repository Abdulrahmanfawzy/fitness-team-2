type PaymentInputProps = {
  id: string;
  text: string;
  icon: React.ReactNode;
  selected: boolean;
  onChange: () => void;
  rightContent?: React.ReactNode;
};

const PaymentButton = ({
  id,
  text,
  icon,
  selected,
  onChange,
  rightContent,
}: PaymentInputProps) => {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center justify-between rounded-md border px-4 py-3 transition ${
        selected
          ? "border-red-500 bg-[#111111]"
          : "border-gray-600 bg-transparent hover:border-gray-400"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          id={id}
          type="radio"
          name="payment"
          checked={selected}
          onChange={onChange}
          className="hidden"
        />
        <span>{icon}</span>
        <span className="text-sm text-gray-200">{text}</span>
      </div>

      {rightContent && <div>{rightContent}</div>}
    </label>
  );
};
export default PaymentButton;
