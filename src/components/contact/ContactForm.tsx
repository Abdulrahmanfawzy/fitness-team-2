import ContactInput from "./ContactInput";

const ContactForm = () => {
  return (
    <div className="w-full border border-gray-500 rounded-lg p-6 space-y-4">
      <div className="flex gap-4">
        <ContactInput
          label="Name"
          type="text"
          id="name"
          placeholder="Enter your name"
        />
        <ContactInput
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <ContactInput
        label="Subject"
        type="text"
        id="subject"
        placeholder="Enter your subject"
      />
      <ContactInput
        label="Message"
        type="text"
        id="message"
        placeholder="How Can we Help You?"
        textarea={true}
      />
    </div>
  );
};

export default ContactForm;
