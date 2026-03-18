import FrequentlyAskedSection from "@/components/contact/frequentlyAskedSection";
import GetInTouchSection from "@/components/contact/GetInTouchSection";

function Contact() {
  return (
    <div className="py-24 px-8 max-w-6xl mx-auto ">
      <GetInTouchSection />

      <FrequentlyAskedSection />
    </div>
  );
}

export default Contact;
