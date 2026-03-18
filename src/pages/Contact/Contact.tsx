import FrequentlyAskedSection from "@/components/contact/frequentlyAskedSection";
import GetInTouchSection from "@/components/contact/GetInTouchSection";

function Contact() {
  return (
    <div className="py-24 px-8 max-w-6xl mx-auto  space-y-12 bg-black">
      <GetInTouchSection />

      <FrequentlyAskedSection />
    </div>
  );
}

export default Contact;
