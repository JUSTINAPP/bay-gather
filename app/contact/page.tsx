import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bay & Gather Catering",
  description:
    "Get in touch with Bay & Gather Catering to talk through your wedding, private event or corporate function on the Mornington Peninsula.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="text-center mb-12">
        <Eyebrow>Get in touch</Eyebrow>
        <h1 className="text-4xl sm:text-5xl text-bay-blue mt-3 mb-4">
          Let&apos;s talk about your event
        </h1>
        <p className="max-w-xl mx-auto text-stone">
          Tell us a bit about what you have in mind and we&apos;ll come back
          to you to talk it through. No forms in triplicate — just a
          conversation.
        </p>
      </Container>

      <Container>
        <ContactForm />
      </Container>

      <Container className="text-center mt-16 text-sm text-stone">
        <p>hello@bayandgather.com.au &middot; (03) 0000 0000</p>
        <p className="mt-1">Mornington Peninsula, Victoria</p>
      </Container>
    </section>
  );
}
