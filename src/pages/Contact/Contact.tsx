import FrequentlyAskedSection from "@/components/contact/frequentlyAskedSection";
import GetInTouchSection from "@/components/contact/GetInTouchSection";

function Contact() {
  return (
    <div className="bg-gray-950">
      <div className="py-24 px-8 max-w-6xl mx-auto  space-y-12 ">
        <GetInTouchSection />

        <FrequentlyAskedSection />
      </div>
    </div>
  );
}

export default Contact;
