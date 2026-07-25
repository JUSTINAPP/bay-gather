import type { Metadata } from "next";
import { Container, Eyebrow, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "About | Bay & Gather Catering",
  description:
    "Bay & Gather is a premium off-site catering business on Victoria's Mornington Peninsula, part of the VSB Group hospitality portfolio.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 text-center">
        <Container>
          <Eyebrow>Who we are</Eyebrow>
          <h1 className="text-4xl sm:text-5xl text-bay-blue mt-3 mb-6">
            Good food. Well run. No fuss.
          </h1>
          <p className="max-w-2xl mx-auto text-stone text-lg">
            Bay &amp; Gather is a premium catering business operating on
            Victoria&apos;s Mornington Peninsula, within the VSB Group
            hospitality portfolio. We provide off-site catering for
            weddings, private events, corporate functions and premium
            hospitality experiences.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white/60">
        <Container className="max-w-2xl text-center">
          <p className="font-serif italic text-2xl text-bay-blue">
            &ldquo;You&apos;re in good hands.&rdquo;
          </p>
          <p className="mt-4 text-stone">
            We operate as our own independent brand — separate from South
            Beach and Volpino — built to serve multiple venues, private
            homes and event spaces without being tied to a single location.
            The brand feels approachable, coastal, food-led and relaxed —
            premium without pretension. More a quality hospitality business
            than a generic caterer.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-bay-blue mb-8 text-center">
            How we work
          </h2>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl text-bay-blue mb-2">Approachable</h3>
              <p className="text-stone text-sm leading-relaxed">
                Warm, genuine, and easy to deal with. You&apos;ll feel
                confident from the first conversation.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-bay-blue mb-2">Coastal</h3>
              <p className="text-stone text-sm leading-relaxed">
                Connected to the Mornington Peninsula — natural light, open
                spaces, the bay.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-bay-blue mb-2">Food-led</h3>
              <p className="text-stone text-sm leading-relaxed">
                Food is always at the centre. Quality produce, thoughtful
                preparation, honest cooking.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-bay-blue mb-2">
                Relaxed confidence
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                Calm, capable, and professional — without ceremony or
                pretension.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 text-center">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="text-3xl text-bay-blue">Let&apos;s talk</h2>
          <p className="max-w-md text-stone">
            Whether it&apos;s a wedding, a private dinner or a corporate
            function, we&apos;d like to hear about it.
          </p>
          <Button href="/contact">Get in touch</Button>
        </Container>
      </section>
    </>
  );
}
