import { cn } from "@/lib/utils";

const ContactInput = ({
  label,
  type,
  id,
  placeholder,
  className = "",
  textarea = false,
}: {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  className?: string;
  textarea?: boolean;
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className={cn(`text-white font-bold`, className)}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className="w-full border border-gray-500 rounded-lg py-4 px-2"
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-full border border-gray-500 rounded-lg py-4 px-2"
        />
      )}
    </div>
  );
};

export default ContactInput;
