import { Container, Eyebrow, Button } from "@/components/ui";

const PILLARS = [
  {
    title: "Approachable",
    body: "Warm, genuine, and easy to deal with. You'll feel confident from the first conversation.",
  },
  {
    title: "Coastal",
    body: "Connected to the Mornington Peninsula — natural light, open spaces, the bay.",
  },
  {
    title: "Food-led",
    body: "Food is always at the centre. Quality produce, thoughtful preparation, honest cooking.",
  },
  {
    title: "Relaxed confidence",
    body: "Calm, capable, and professional — without ceremony or pretension.",
  },
];

const SERVICES = [
  { name: "Canapés", href: "/menu#canapes" },
  { name: "Seated Dinner", href: "/menu#seated-dinner" },
  { name: "Grazing Tables", href: "/menu#grazing-tables" },
  { name: "Corporate Catering", href: "/menu#corporate-catering" },
];

export default function Home() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <Container className="text-center flex flex-col items-center gap-6">
          <Eyebrow>Mornington Peninsula &middot; Off-site catering</Eyebrow>
          <h1 className="text-4xl sm:text-6xl text-bay-blue max-w-3xl">
            Good food. Well run. No fuss.
          </h1>
          <p className="max-w-xl text-stone text-lg">
            Bay &amp; Gather brings premium off-site catering to weddings,
            private events and corporate functions across the Mornington
            Peninsula.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button href="/contact">Enquire about your event</Button>
            <Button href="/menu" variant="secondary">
              See the menu
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white/60">
        <Container className="text-center max-w-2xl">
          <p className="font-serif italic text-2xl sm:text-3xl text-bay-blue">
            &ldquo;You&apos;re in good hands.&rdquo;
          </p>
          <p className="mt-4 text-stone">
            We provide off-site catering for weddings, private events,
            corporate functions and premium hospitality experiences — built
            to serve multiple venues, private homes and event spaces across
            the Peninsula.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="text-center sm:text-left">
                <h3 className="text-xl text-bay-blue mb-2">{pillar.title}</h3>
                <p className="text-stone text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-bay-blue text-cream">
        <Container className="text-center">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-3xl sm:text-4xl mt-3 mb-10">
            Catering for every occasion
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {SERVICES.map((service) => (
              <a
                key={service.name}
                href={service.href}
                className="eyebrow text-sm hover:opacity-75"
              >
                {service.name}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl text-bay-blue">
            Planning an event?
          </h2>
          <p className="max-w-md text-stone">
            Tell us a little about what you have in mind and we&apos;ll be in
            touch to talk it through.
          </p>
          <Button href="/contact">Get in touch</Button>
        </Container>
      </section>
    </>
  );
}
