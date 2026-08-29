import Link from "next/link";
import { Container, Section, SectionHeading, ButtonLink, Arrow } from "@/components/ui/primitives";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const suggestions = [
  { label: "Gold sourcing from Kenya", href: "/gold-sourcing" },
  { label: "How our process works", href: "/process" },
  { label: "Compliance and documentation", href: "/compliance" },
  { label: "Buyer resource centre", href: "/resources" },
  { label: "Contact the trade desk", href: "/contact" },
];

export default function NotFound() {
  return (
    <Section tone="dark">
      <Container size="narrow">
        <SectionHeading
          level={1}
          tone="dark"
          eyebrow="404"
          title="That page is not here"
          lede="The link may be out of date, or the page may have moved during our site rebuild. These are the pages buyers use most."
        />
        <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="flex items-center justify-between gap-4 py-4 font-serif text-lg text-ink-100 transition-colors hover:text-gold-300"
              >
                {s.label}
                <Arrow className="text-gold-500" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/" variant="on-dark">
            Back to the homepage
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
