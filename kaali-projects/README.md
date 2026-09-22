# Kaali Projects — React Website

A React + JavaScript rebuild of the Kaali Projects site, structured around the
sections and information architecture in the original design brief.

## Stack

- React 18 + React Router 6
- Vite (dev server / bundler)
- Plain CSS with a small design-token system (`src/index.css`) — no
  CSS framework, so it's easy to swap in Tailwind/Sass later if you want.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Folder structure

```
src/
├── main.jsx              # React root, router provider
├── App.jsx                # Layout + route outlet
├── index.css               # Design tokens, resets, global utilities
│
├── router/
│   └── AppRouter.jsx        # All route definitions
│
├── data/                    # Content, separated from markup.
│   ├── navLinks.js            # Nav + social links
│   ├── stats.js                # Homepage stat bar (81+ Clients, etc.)
│   ├── valueCards.js           # Explore / Craft / Inspire cards
│   ├── whyChooseUs.js          # "Why Choose Us" differentiators
│   ├── services.js             # Services grid content
│   ├── projects.js             # Featured work / portfolio
│   ├── testimonials.js         # Client testimonials
│   └── brands.js               # "Trusted by" logo strip
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx           # Sticky nav, mobile menu, socials
│   │   ├── Footer.jsx           # About/Connect/Quick Links + contact
│   │   └── Layout.jsx           # Wraps every page with Navbar + Footer
│   │
│   ├── ui/                      # Small, reusable, presentation-only
│   │   ├── Button.jsx
│   │   └── SectionHeading.jsx
│   │
│   ├── sections/                # One component per homepage section
│   │   ├── Hero.jsx
│   │   ├── StatsBar.jsx
│   │   ├── ValuePropCards.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ServicesShowcase.jsx
│   │   ├── Testimonials.jsx
│   │   ├── TrustedBrands.jsx
│   │   ├── ContactCTA.jsx
│   │   └── SocialCTA.jsx
│   │
│   ├── services/ServiceCard.jsx
│   ├── projects/ProjectCard.jsx
│   └── contact/ContactForm.jsx   # Shared by ContactCTA and the Contact page
│
└── pages/                    # One file per route, composed from sections
    ├── Home.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Projects.jsx
    ├── ProjectDetail.jsx
    └── Contact.jsx
```

## How a page maps to the brief

| Brief section                          | Component(s)                          |
|-----------------------------------------|----------------------------------------|
| Hero Section                            | `sections/Hero.jsx`                    |
| Trust bar / key numbers                 | `sections/StatsBar.jsx`                |
| Company introduction                    | `sections/ValuePropCards.jsx`          |
| Why Choose Us                           | `sections/WhyChooseUs.jsx`             |
| Services Section                        | `sections/ServicesShowcase.jsx`, `pages/Services.jsx` |
| Featured Projects / Project Detail      | `pages/Projects.jsx`, `pages/ProjectDetail.jsx`, `projects/ProjectCard.jsx` |
| Trust / Credibility                     | `sections/TrustedBrands.jsx`, `sections/Testimonials.jsx` |
| Strong CTA Section                      | `sections/ContactCTA.jsx`, `sections/SocialCTA.jsx` |
| Contact Page                            | `pages/Contact.jsx`, `contact/ContactForm.jsx` |

## Content & data

All copy, stats, testimonials, and brand names live in `src/data/*.js` rather
than being hard-coded into JSX. Update those files — not the components — when
content changes. Real stats, testimonials and client logos should only be
added once the business has confirmed them; placeholders are marked in
comments inside each data file.

## Images

Replace the placeholder paths in `src/data/projects.js` and `src/data/brands.js`
with real assets placed in `public/assets/images/`. Vite serves anything in
`public/` from the site root, so a file at `public/assets/images/logo.svg` is
referenced as `/assets/images/logo.svg`.

## Design tokens

Colors, type scale, spacing and radii are centralized as CSS custom
properties in `src/index.css` (`:root`). Adjust `--color-primary`,
`--font-display`, etc. there and the change propagates across every
component.

## Next steps to extend

- Add a CMS or JSON/API fetch layer to replace the static `src/data` files.
- Add scroll-reveal animation via `IntersectionObserver` in a shared hook
  (e.g. `src/hooks/useReveal.js`) if you want the subtle entrance motion
  seen in the reference design — apply it sparingly, not on every section.
- Wire `ContactForm.jsx`'s `handleSubmit` to a real backend or a form
  service (Formspree, Resend, etc.) instead of the simulated delay.
