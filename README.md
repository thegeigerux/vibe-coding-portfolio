# James Geiger's Portfolio

A modern Next.js portfolio built with a dark glassmorphism aesthetic, neon magenta/teal accents, responsive layouts, dynamic project pages, and a contact form API route.

## Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS 4
- Turbopack for local development
- Lucide React icons

## Features

- **Hero Section**: Personal introduction with gradient text fade effects, headshot photo, and bouncing scroll indicator
- **Responsive Layout**: Photo-first layout on mobile, side-by-side on desktop
- **Tech Stack Marquee**: Scrolling tech badges (Accessibility, Design Thinking, Modern/Sleek UI's, Customer Focused) with seamless infinite loop
- **About Section**: Skills grid with glassmorphism cards and tech stack marquee
- **Projects**: Dynamic project detail pages at `/projects/[slug]`
- **Contact Form**: API route at `app/api/contact/route.js`
- **Dark/Light Mode**: Theme toggle with persisted preference
- **Glassmorphism UI**: Shared button, card, and panel treatments throughout
- **Parallax Effects**: Subtle scroll-based animations

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
- Update header branding and navigation in `components/Header.jsx`
- Replace social/profile links in `components/Footer.jsx`

## Notes

- The footer year updates automatically with `new Date().getFullYear()`
- The contact route is currently a validated stub ready for email or CRM wiring
- Local development uses Turbopack to avoid the instability we hit with the Webpack dev server
