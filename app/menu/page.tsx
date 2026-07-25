import type { Metadata } from "next";
import { Container, Eyebrow, Button } from "@/components/ui";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Menu | Bay & Gather Catering",
  description:
    "Sample menus from Bay & Gather Catering — canapés, seated dinners, grazing tables and corporate catering on the Mornington Peninsula.",
};

const MENUS = [
  {
    id: "canapes",
    name: "Canapés",
    intro:
      "A relaxed start to any event. Served on the move, generous, and easy to eat.",
    items: [
      "Confit duck, pickled cherry, brioche",
      "Whipped ricotta, heirloom tomato, basil oil",
      "Peninsula prawn, nahm jim, betel leaf",
      "Wagyu bresaola, aged parmesan, rocket",
    ],
  },
  {
    id: "seated-dinner",
    name: "Seated Dinner",
    intro:
      "A proper sit-down meal, plated with care. Suited to weddings and formal private events.",
    items: [
      "Entrée — burrata, roasted grape, sourdough",
      "Main — slow-roast lamb shoulder, salsa verde",
      "Main (alt.) — market fish, brown butter, greens",
      "Dessert — lemon tart, crème fraîche",
    ],
  },
  {
    id: "grazing-tables",
    name: "Grazing Tables",
    intro:
      "A generous spread for guests to graze at their own pace — built to look as good as it tastes.",
    items: [
      "Local and imported cheeses",
      "Cured meats and terrines",
      "Seasonal fruit and vegetables",
      "House-made dips, breads and crackers",
    ],
  },
  {
    id: "corporate-catering",
    name: "Corporate Catering",
    intro:
      "Reliable, well-timed catering for meetings, launches and office functions.",
    items: [
      "Working lunch boxes",
      "Morning and afternoon tea platters",
      "Boardroom canapés",
      "End-of-year and celebration events",
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <PageBanner
        src="/bay-gather-home-page-03.jpg"
        alt="Shared plates from a Bay & Gather event"
      />
      <section className="py-20 text-center">
        <Container>
          <Eyebrow>Sample menus</Eyebrow>
          <h1 className="text-4xl sm:text-5xl text-bay-blue mt-3 mb-4">
            Food, done properly
          </h1>
          <p className="max-w-xl mx-auto text-stone">
            The below is a starting point — every menu is confirmed with you
            directly and adjusted for the season, the occasion and your
            guests.
          </p>
        </Container>
      </section>

      {MENUS.map((menu, i) => (
        <section
          key={menu.id}
          id={menu.id}
          className={i % 2 === 1 ? "py-16 bg-white/60" : "py-16"}
        >
          <Container className="max-w-3xl">
            <h2 className="text-3xl text-bay-blue mb-2">{menu.name}</h2>
            <p className="text-stone mb-6">{menu.intro}</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {menu.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-stone/20 pb-3 text-near-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <section className="py-20 text-center">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="text-3xl text-bay-blue">
            Ready to talk menus?
          </h2>
          <p className="max-w-md text-stone">
            Get in touch with your event details and we&apos;ll put together
            options that suit.
          </p>
          <Button href="/contact">Enquire now</Button>
        </Container>
      </section>
    </>
  );
}
