import FrequentlyAskedSection from "@/components/contact/frequentlyAskedSection";
import GetInTouchSection from "@/components/contact/GetInTouchSection";

function Contact() {
  return (
    <div className="bg-gray-950">
      <div className="py-24 px-6 lg:px-12 mx-auto max-w-7xl space-y-12 ">
        <GetInTouchSection />

        <FrequentlyAskedSection />
      </div>
    </div>
  );
}

export default Contact;
