import ContactHeader from "@/components/features/contact/ContactHeader";
import Faqs from "@/components/features/contact/Faqs";
import GetInTouch from "@/components/features/contact/GetInTouch";

export default function ContactUs() {
  return (
    <main className="overflow-hidden">
      <ContactHeader />
      <GetInTouch />
      <Faqs />
    </main>
  );
}
