# James Geiger's Portfolio

A modern Next.js portfolio built with a dark glassmorphism aesthetic, accessibility-minded color contrast, responsive layouts, dynamic project pages, a dedicated About page, testimonials, and a contact form API route.

## Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS 4
- Turbopack for local development
- Lucide React icons
- Inline SVG social and utility icons

## Features

- **Hero Section**: Personal introduction with a simplified headline, teal name accent, softened headshot fade, and mobile-tuned layout adjustments
- **Fixed Header**: Glassmorphism navigation pinned to the top of the page with roomier desktop spacing, theme toggle, and mobile hamburger menu
- **Responsive Layout**: Mobile-first sections tuned for phone preview and desktop polish
- **About Section**: Skills grid and supporting brand/story content
- **Dedicated About Page**: Expanded bio, timeline, principles, and deeper personal context at `/about`
- **Projects**: Responsive gallery with stacked mobile cards and dynamic project detail pages at `/projects/[slug]`
- **Testimonials**: Homepage social proof section between Projects and Contact
- **Contact Form**: API route at `app/api/contact/route.js`
- **Dark/Light Mode**: Theme toggle with persisted preference
- **Glassmorphism UI**: Shared darker button treatments, card, panel, and icon styles throughout
- **Accessible Color System**: Dark and light theme accent/muted colors tuned for stronger AAA-oriented contrast
- **Ambient Motion**: Lightweight drifting background glows and subtle parallax effects
- **Footer Socials**: GitHub, LinkedIn, Instagram, and Substack links with hover/focus labels
- **Mobile Browser Chrome Matching**: Theme metadata and root backgrounds tuned for better mobile Safari color blending

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview on your phone over local Wi-Fi:

```bash
npm run dev -- --hostname 0.0.0.0
```

Then open `http://YOUR_LOCAL_IP:3000` on the same network.

Build for production:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Project Structure

```text
app/
  about/page.jsx
  api/contact/route.js
  projects/[slug]/page.jsx
  globals.css
  layout.jsx
  page.jsx
components/
  Header.jsx
  Hero.jsx
  About.jsx
  Projects.jsx
  ProjectCard.jsx
  Testimonials.jsx
  ContactForm.jsx
  Footer.jsx
  ThemeToggle.jsx
lib/
  projects.js
```

## Where To Customize

- Update project content, testimonials, skills, and about-page data in `lib/projects.js`
- Adjust global theme variables and shared UI styles in `app/globals.css`
- Edit homepage composition in `app/page.jsx`
- Update header branding, fixed positioning, and navigation in `components/Header.jsx`
- Replace social/profile links, hover labels, and footer icons in `components/Footer.jsx`
- Refine hero content, image crop, and mobile headline behavior in `components/Hero.jsx`
- Adjust ambient glow motion, theme variables, and shared button behavior in `app/globals.css`
- Tweak project gallery layout in `components/Projects.jsx`

## Notes

- The footer year updates automatically with `new Date().getFullYear()`
- The footer includes live social links for GitHub, LinkedIn, Instagram, and Substack
- The contact route is currently a validated stub ready for email or CRM wiring
- Local development uses Turbopack to avoid the instability we hit with the Webpack dev server
- The Next.js dev indicator is disabled in `next.config.js` for cleaner design review on local and phone previews
- Ambient background motion respects `prefers-reduced-motion`
