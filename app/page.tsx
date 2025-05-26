import About from "@/components/about-me";
import Hero from "@/components/hero";
import Social from "@/components/social";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />
      <About />
      <Social />
      <Contact />
    </main>
  );
}
