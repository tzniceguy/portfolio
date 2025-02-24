import About from "@/components/about-me";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />
      <About />
      <Showcase />
    </main>
  );
}
