@AGENTS.md

# Client Site Generation Workflow

This is not a template to copy-paste. It is an AI-driven workflow to generate a premium, custom website for one specific client. Every site produced must be distinct, conversion-optimised, and impossible to guess was built from a shared scaffold.

---

## Step 0: Read before touching any code

1. Read `brand/brief.md` — client name, industry, target customer, tone, goal
2. Read every file in `inspiration/` — screenshots or URLs of sites the client likes
3. Note what they have in common: layout rhythm, motion style, colour temperature, typography weight

---

## Step 1: Design System — query ui-ux-pro-max

Run this before writing a single component:

```bash
python3 "/Users/ennolensch/AI Stuff/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py" "local business landing page [INDUSTRY]" --domain landing --stack nextjs
python3 "/Users/ennolensch/AI Stuff/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py" "[INDUSTRY] trust conversion" --domain color --stack nextjs
python3 "/Users/ennolensch/AI Stuff/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py" "[INDUSTRY] premium" --domain typography --stack nextjs
python3 "/Users/ennolensch/AI Stuff/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py" "[INDUSTRY] website" --domain style --stack nextjs
```

From the output, define in `brand/design-system.md`:
- Primary + accent colour (with hex)
- Font pairing (heading + body, Google Fonts)
- UI style label (e.g. "warm minimalism", "editorial luxury", "confident craft")
- Motion character (e.g. "smooth and weighty", "fast and precise", "soft and inviting")

Apply these tokens to `tailwind.config.ts` before building anything.

---

## Step 2: Component Generation — use 21.dev MCP

For every section, use `mcp__magic__21st_magic_component_builder` to generate the initial component. Do NOT write components from scratch.

**Prompt pattern:**
```
Build a [SECTION] component for a [INDUSTRY] business in Hannover, Germany.
Style: [style label from design-system.md].
Colours: primary [HEX], accent [HEX].
Font: [heading font] / [body font].
Key content: [what goes in this section from brief.md].
Must include: [specific conversion element — CTA, trust signal, etc.].
Stack: Next.js 14 App Router, Tailwind CSS v4, TypeScript.
```

After generation, use `mcp__magic__21st_magic_component_refiner` to tighten quality.
Use `mcp__magic__21st_magic_component_inspiration` when you need to explore alternative layouts for a section.

---

## Step 3: Motion — Framer Motion rules

Every section gets entrance animation. Rules:

```ts
// Standard pattern — scroll-triggered fade+slide
import { motion, useInView } from "framer-motion"
// useInView ref on section wrapper, once: true
// variants: hidden { opacity: 0, y: 24 } → visible { opacity: 1, y: 0 }
// transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }

// Stagger children (cards, services, testimonials)
// parent variants with staggerChildren: 0.08

// Hero: faster entrance, slight scale: hidden { scale: 0.97 } → visible { scale: 1 }

// CTA button: whileHover={{ scale: 1.03 }}, whileTap={{ scale: 0.97 }}
// transition: { type: "spring", stiffness: 400, damping: 25 }
```

Motion must feel earned — not decorative. Every animation should communicate something: "this section is appearing for you", "this button responds to you".

**Banned**: bounce, spin, infinite loops, `animate` without scroll trigger on below-fold sections.

---

## Step 4: Impeccable Quality Pass

After each major section is built, run:

```
/impeccable audit     — find design weaknesses
/impeccable animate   — verify motion quality and prescription
/impeccable colorize  — check palette coherence and contrast
/impeccable polish    — final pass before delivery
```

Register for all client sites: **brand**

Fix every issue flagged before moving to next section. Do not accumulate debt.

---

## Step 5: German Legal Compliance (NON-NEGOTIABLE — zero tolerance for errors)

Every German commercial website is subject to these laws. Missing or incomplete = legally actionable (Abmahnung, fines up to €50,000). Complete ALL before launch, no exceptions.

### §5 TMG — Impressum (mandatory for all commercial sites)

File: `app/impressum/page.tsx` — fill ALL `[PLACEHOLDER]` fields:
- Full legal name of the business owner
- Full street address (no PO box)
- Phone number (reachable during business hours)
- Email address
- Steuernummer OR USt-IdNr (at least one required)
- For regulated professions (Arzt, Anwalt, Steuerberater): add chamber + licence info

**Validation**: Use https://www.e-recht24.de/impressum-generator.html to cross-check completeness.

### DSGVO — Datenschutzerklärung (mandatory)

File: `app/datenschutz/page.tsx`:
- Must name every tool that processes personal data: contact form provider, hosting (Vercel), Google Maps, any analytics
- Must name the supervisory authority (Niedersachsen: LfD Niedersachsen)
- Must list all data subject rights (Art. 15–21 DSGVO)
- Must be kept up to date — update whenever a new tool is added

**Full generation**: https://www.datenschutz-generator.de — use this and paste into the page. The skeleton in the file is a starting point only.

### ePrivacy — Cookie Consent

**Default (no analytics)**: Template ships with NO tracking cookies. No consent banner needed. State this clearly in Datenschutz.

**If analytics are added** (Google Analytics, Matomo, Hotjar, etc.):
- Cookie consent banner MUST load before any cookie is set
- Recommended library: `cookie-consent` npm or Cookiebot
- Opt-in required — pre-ticked checkboxes are illegal
- Consent must be revocable at any time (link in footer)

### HTTPS / SSL

Vercel provides SSL automatically for all deployments. Verify:
- Custom domain has SSL active (padlock in browser)
- HTTP redirects to HTTPS (Vercel does this by default)
- No mixed content warnings (all assets loaded over HTTPS)

### Accessibility — BITV 2.0 / WCAG 2.1 AA

Not a hard legal requirement for private businesses, but required for public sector and strongly recommended. Lighthouse Accessibility ≥ 90 is the gate. Key rules:
- All images have descriptive `alt` text
- Colour contrast ratio ≥ 4.5:1 for normal text
- All interactive elements keyboard-navigable
- Language declared: `lang="de"` on `<html>`

### Contact Form — DSGVO compliance

- Form must NOT submit data without user seeing the Datenschutz link
- Add checkbox: "Ich habe die [Datenschutzerklärung](/datenschutz) gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu." (required field)
- Data must not be stored longer than necessary
- If using Formspree/Resend/etc.: name the processor in Datenschutz

---

## Step 6: Conversion Fundamentals (non-negotiable)

These must exist in every build regardless of style direction:

- **CTA above fold, mobile** — primary action button visible without scrolling on 375px width
- **Click-to-call** — `tel:` link, not just text. Styled as primary CTA on mobile.
- **WhatsApp link** — `https://wa.me/49[PHONE]` — secondary CTA alongside call button
- **Trust signals** — at minimum: Google stars (even if static placeholder), one proof element (years, clients, certifications)
- **Google Maps** — lazy-loaded iframe. Never block LCP with it.
- **Impressum page** — `/impressum` — legally required in Germany (§5 TMG)
- **Datenschutz page** — `/datenschutz` — DSGVO-required
- **Lighthouse gate** — site MUST score ≥ 90 Performance, Accessibility, Best Practices before delivery. Run: `npm run lighthouse`

---

## Step 6: Per-Client Customisation Points

Everything that changes between clients is defined in `brand/brief.md`. The build must reference it, not hardcode values.

```
brand/
├── brief.md          ← fill this first (client details, copy, goal)
├── design-system.md  ← generated in Step 1
├── assets/           ← client logo, photos (drop here)
└── content.md        ← all final copy, structured by section
```

Tailwind colour tokens in `tailwind.config.ts`:
```ts
// Change only these two per client:
'--color-primary': '#[HEX]',
'--color-accent': '#[HEX]',
```

---

## Step 8: Delivery Checklist

Before sending preview URL to client:

**Design & Content**
- [ ] All copy from `brand/content.md` is live (no lorem ipsum, no `[PLACEHOLDER]` tokens)
- [ ] Client logo in header
- [ ] Real phone number in click-to-call (`tel:` link)
- [ ] WhatsApp link works (`wa.me/49...`)
- [ ] Google Maps shows correct address and loads
- [ ] Contact form submits successfully (test end-to-end)
- [ ] All images use `next/image` with descriptive `alt` text
- [ ] No console errors

**Performance**
- [ ] Lighthouse: Performance ≥ 90
- [ ] Lighthouse: Accessibility ≥ 90
- [ ] Lighthouse: Best Practices ≥ 90
- [ ] Page interactive < 3s on mobile (verify in Lighthouse)
- [ ] CTA button visible above fold on 375px width (no scroll)
- [ ] Tested on iPhone Safari
- [ ] Tested on Android Chrome

**German Legal — MUST BE 100% COMPLETE**
- [ ] Impressum live at `/impressum` — all §5 TMG fields filled (name, address, phone, email, Steuernummer)
- [ ] Impressum linked from footer on every page
- [ ] Datenschutz live at `/datenschutz` — names Vercel as host, names contact form processor, lists all data subject rights
- [ ] Datenschutz linked from footer on every page
- [ ] Contact form has DSGVO consent checkbox (required, not pre-ticked)
- [ ] HTTPS active on custom domain (padlock visible, no HTTP access)
- [ ] No tracking cookies set without consent (or consent banner implemented)
- [ ] Cross-checked Impressum via e-recht24.de generator
- [ ] Cross-checked Datenschutz via datenschutz-generator.de

---

## Installed tools

- `framer-motion` v12 — motion
- `@lhci/cli` — Lighthouse CI (`npm run lighthouse`)
- `tailwindcss` v4 — styling
- `next` v16 — framework

## External tools (MCP, available in Claude Code)

- `mcp__magic__21st_magic_component_builder` — generate components
- `mcp__magic__21st_magic_component_refiner` — refine components
- `mcp__magic__21st_magic_component_inspiration` — explore layout alternatives

## Skills (available in Claude Code, invoke via Skill tool)

- `ui-ux-pro-max` — design system queries (python3 CLI, see Step 1)
- `impeccable` — design quality enforcement (see Step 4)
