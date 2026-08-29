# Aptus Group — aptusgroup.net

Marketing and lead-generation site for Aptus Group: a Nairobi trade desk
coordinating **gold sourcing from Kenya for international buyers**, built on the
group's existing freight, customs clearing, warehousing and safe-deposit
vaulting operation.

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

---

## Editorial rules this codebase enforces

The gold trade in East Africa has a documented fraud problem, and the site's
commercial strategy is to be the counterparty that is easiest to verify. That
imposes rules on content, not just on design:

1. **No invented credentials.** No certifications, licence numbers, transaction
   volumes, client names, partnerships, accreditations or years-in-business
   appear anywhere unless the business has supplied evidence.
2. **Unverified facts are visible, not hidden.** `UNVERIFIED_FACTS` in
   `src/lib/site.ts` is the register of claims awaiting sign-off; it is rendered
   publicly on `/compliance`, and the `<Verify>` component marks in-page gaps.
   Remove an entry only when documentary evidence exists.
3. **No below-market pricing language**, no fake urgency, no fake scarcity, no
   fabricated testimonials, no misleading schema.
4. **Structured data must describe visible content.** No ratings, offers or
   credentials that are not on the page.

If you are adding content, the test is: *could a Hong Kong commodities buyer
check this independently and find it stands up?*

---

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in a mail transport
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
npm run lint
```

Node 20+ required. The first build fetches Inter and Newsreader from Google
Fonts via `next/font` and self-hosts them in the output, so the build machine
needs outbound access to `fonts.googleapis.com`; the deployed site makes no
third-party font request.

---

## Architecture

```
src/
  app/
    layout.tsx              Fonts, base metadata, header/footer, Organization + WebSite JSON-LD
    page.tsx                Homepage
    globals.css             Design tokens and component layer (Tailwind v4 @theme)
    robots.ts               Generated robots.txt
    sitemap.ts              Generated sitemap.xml — KEEP IN STEP WITH NEW ROUTES
    not-found.tsx           404 with onward links
    api/inquiry/route.ts    Buyer enquiry endpoint
    <route>/page.tsx        One directory per indexable page
    resources/[slug]/       Statically generated buyer guides
  components/
    layout/                 SiteHeader, SiteFooter, MobileNav, StickyContactBar
    ui/                     primitives, PageHero, CtaSection, Blocks, Ornament, Reveal, icons
    forms/                  BuyerInquiryForm
    seo/                    JsonLd
  lib/
    site.ts                 Company facts, contact channels, nav, unverified-fact register
    seo.ts                  Metadata builder and schema.org helpers
    analytics.ts            Conversion event taxonomy
    inquiry.ts              Enquiry shape, shared validation, email formatting
    content/                Buyer guides as typed content, rendered by <Blocks>
```

### Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/gold-sourcing` | What the desk does, and what it does not |
| `/gold-supply` | Forms, fineness, pricing basis |
| `/process` | Six-step process, with a `HowTo` graph |
| `/compliance` | KYC/AML, OECD framework, export file, unverified-fact register |
| `/kenya`, `/nairobi`, `/africa` | Market authority pages |
| `/international-buyers`, `/hong-kong-buyers` | Buyer-segment pages |
| `/about`, `/logistics` | Company and the freight/vaulting operation |
| `/contact` | Buyer enquiry form and direct channels |
| `/resources`, `/resources/[slug]` | Ten original buyer guides |
| `/faq`, `/privacy`, `/terms` | Support pages |

Adding a route means adding it to **both** `src/app/sitemap.ts` and, if it
belongs in navigation, `primaryNav` in `src/lib/site.ts`.

---

## Design system

Tokens live in `@theme` in `src/app/globals.css` and are derived from the logo
(`public/images/logo.jpeg`): metallic gold `#E3BA5C` on near-black `#0B0B0C`.

- **Gold is an accent.** Charcoal and warm bone (`--color-ink-50`) carry the interface.
- **Type:** Newsreader (serif) for display, Inter for UI and body.
- **Motion:** one `Reveal` component using `IntersectionObserver` — roughly 500
  bytes of client JS in place of an animation library — and CSS transitions.
  Everything is disabled under `prefers-reduced-motion`.
- **No stock photography.** The site deliberately ships no photographs of gold,
  vaults or trade floors the company cannot evidence as its own. Hero and
  section imagery is the drawn `<Ornament>` SVG. **Replace it with first-party
  photography when it is available** — of the Nairobi office, the vault and the
  team. That is the single highest-value asset the site is still missing.

---

## Buyer enquiry endpoint

`POST /api/inquiry`. Validation is shared with the client via
`src/lib/inquiry.ts`; the server is the authority.

Protections: honeypot field, minimum time-on-form, per-IP rate limit
(5 per 10 minutes, in-process — move to a shared store if deployed to more than
one instance), and field length caps.

Delivery is environment-gated — see `.env.example`. With no transport
configured the endpoint logs the enquiry and the UI tells the visitor to use
WhatsApp or email, so nothing is silently lost.

---

## Analytics

`src/lib/analytics.ts` pushes a defined event vocabulary to `window.dataLayer`,
so any tag manager can consume it without this codebase depending on a vendor.
No personally identifying data is included in any payload. Events:
`inquiry_form_viewed`, `inquiry_form_started`, `inquiry_step_completed`,
`inquiry_submitted`, `inquiry_failed`, `whatsapp_clicked`, `phone_clicked`,
`email_clicked`, `primary_cta_clicked`, `resource_opened`.

---

## SEO migration

`next.config.ts` holds a permanent-redirect table mapping the old single-page
site's URL shapes to the new architecture.

**Before go-live:** export the top pages from Google Search Console and Bing
Webmaster Tools for both `aptusgroup.net` and `aptusgroup.com`, and extend that
table with anything receiving impressions that is not already covered. Confirm
which host is canonical and 301 the other to it — `SITE_URL` in
`src/lib/site.ts` currently declares `https://aptusgroup.net`.

---

## Outstanding before launch

- [ ] Fill the `UNVERIFIED_FACTS` register in `src/lib/site.ts` and remove the
      corresponding `<Verify>` markers from the pages.
- [ ] Have `/privacy` and `/terms` reviewed by counsel.
- [ ] Configure a mail transport and send a live test enquiry.
- [ ] Supply first-party photography to replace the drawn ornament.
- [ ] Confirm the canonical host and add the Search Console redirect data.
- [ ] Confirm the WhatsApp number is monitored by the trade desk, and that it is
      a WhatsApp Business account if that is the intention.
- [ ] Delete the leftover `_to_delete/` directory (the removed legacy components
      could not be unlinked from the environment they were removed in; they
      remain in git history on `main`).
