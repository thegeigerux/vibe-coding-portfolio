import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="overflow-x-clip text-[var(--color-text)]">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
