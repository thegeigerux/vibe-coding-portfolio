export const skills = [
  "Frontend systems",
  "Accessible interfaces",
  "Performance-minded design",
  "Motion & interaction",
  "Design-to-code execution",
  "Scalable components"
];

export const projectTags = ["Vibe Coding", "UX Design", "Web Design"];

export const aboutTimeline = [
  {
    year: "Now",
    title: "Frontend engineer focused on feel",
    description:
      "Designing interfaces that balance strong visual identity, accessibility, and production-grade implementation."
  },
  {
    year: "Recent",
    title: "Shipping portfolio, product, and marketing builds",
    description:
      "Working across interactive landing pages, product surfaces, and reusable UI systems with a performance-first mindset."
  },
  {
    year: "Foundation",
    title: "Growing through design-to-code execution",
    description:
      "Developing taste in layout, motion, and typography while learning how to translate visual intent into maintainable frontend architecture."
  }
];

export const aboutPrinciples = [
  "Build interfaces that feel distinctive before they feel flashy.",
  "Keep accessibility and performance in the room from the first layout pass.",
  "Use motion to clarify hierarchy and state, not to decorate weak structure.",
  "Prefer systems that stay editable, scalable, and understandable after launch."
];

export const testimonials = [
  {
    quote:
      "James brought a rare mix of visual instinct and implementation discipline. The final build felt sharper, faster, and far more premium than what we started with.",
    name: "Maya Chen",
    role: "Founder, Signal Studio"
  },
  {
    quote:
      "What stood out most was his ability to translate messy ideas into a frontend system that felt clear immediately. We shipped faster because the structure finally made sense.",
    name: "Jordan Ellis",
    role: "Product Lead, Northstar"
  },
  {
    quote:
      "He cares about the little things that most teams miss: motion pacing, hierarchy, accessibility, and how the whole experience feels under real use, not just in mocks.",
    name: "Sofia Ramirez",
    role: "Creative Director, Pulse Labs"
  }
];

export const projects = [
  {
    slug: "signal-studio",
    title: "Signal Studio",
    year: "2026",
    role: "Lead Frontend Engineer",
    tag: "Web Design",
    summary:
      "A cinematic launch site for a product studio with animated storytelling, modular CMS blocks, and measurable conversion lifts.",
    description:
      "Signal Studio is a marketing-forward build designed around strong narrative pacing, editorial layouts, and fast-loading visuals that stay resilient under real traffic.",
    stack: ["Next.js", "Tailwind", "Motion", "Sanity"],
    outcome: "42% lift in qualified demo requests after launch.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Designed modular hero, proof, and CTA blocks to let the team ship campaign pages quickly.",
      "Balanced dramatic motion with strong reduced-motion fallbacks and semantic structure.",
      "Optimized image delivery and layout stability to keep the experience fast on mobile."
    ]
  },
  {
    slug: "northstar-dashboard",
    title: "Northstar Dashboard",
    year: "2025",
    role: "UI Engineer",
    tag: "UX Design",
    summary:
      "An analytics workspace translating dense product signals into a calmer, more legible decision-making interface.",
    description:
      "Northstar Dashboard focused on turning complex metrics into clear patterns using strong typography, meaningful spacing, and an interaction model that reduced friction for repeat tasks.",
    stack: ["React", "Next.js", "Tailwind", "Charts"],
    outcome: "Reduced weekly reporting time for internal teams by 31%.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Built reusable dashboard primitives for cards, filters, tables, and chart annotations.",
      "Improved keyboard support for navigation-heavy workflows across the reporting surface.",
      "Shipped lightweight transitions that clarified changes without slowing the operator down."
    ]
  },
  {
    slug: "atlas-commerce",
    title: "Atlas Commerce",
    year: "2024",
    role: "Frontend Developer",
    tag: "Web Design",
    summary:
      "A premium storefront refresh centered on product photography, tactile motion, and performance-first buying flows.",
    description:
      "Atlas Commerce brought a more premium feel to ecommerce browsing through tighter layout rhythm, deliberate animation, and a simplified route from product discovery to checkout.",
    stack: ["Next.js", "Shopify", "Tailwind", "Vercel"],
    outcome: "Improved mobile conversion and lowered product-page bounce rate.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Created a component system that aligned merchandising flexibility with visual consistency.",
      "Used responsive media and lazy loading to preserve the feel of rich imagery without the weight.",
      "Refined key purchase moments with stronger hierarchy and trust cues."
    ]
  },
  {
    slug: "pulse-labs",
    title: "Pulse Labs",
    year: "2024",
    role: "Creative Technologist",
    tag: "Vibe Coding",
    summary:
      "An experimental portfolio for a research team blending parallax motion, editorial typography, and lightweight WebGL accents.",
    description:
      "Pulse Labs leaned into experimentation while maintaining accessibility and compositional control, giving the brand a more memorable digital voice without sacrificing usability.",
    stack: ["Next.js", "Three.js", "Tailwind", "MDX"],
    outcome: "Helped the team win larger exploratory client engagements.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Layered subtle parallax and scroll pacing to create depth without hijacking the user.",
      "Kept content readable through careful contrast, spacing, and semantic heading structure.",
      "Structured the build so marketing content stayed editable and easy to expand."
    ]
  },
  {
    slug: "rally-mobile",
    title: "Rally Mobile",
    year: "2023",
    role: "Product Engineer",
    tag: "UX Design",
    summary:
      "A mobile-first campaign and onboarding experience for a coaching app, built around trust, clarity, and fast first paint.",
    description:
      "Rally Mobile was designed to meet users quickly with confident messaging, clear next actions, and a layout system tuned for handheld use before expanding gracefully to desktop.",
    stack: ["Next.js", "Tailwind", "API Routes", "A11y"],
    outcome: "Raised onboarding completion by 18% after redesign.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Introduced a mobile-first content model that kept the desktop experience from feeling stretched.",
      "Strengthened form clarity and accessibility, especially around validation feedback.",
      "Focused on early-render performance to support acquisition campaigns."
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
