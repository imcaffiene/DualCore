import Hero from "@/features/Hero";
import Services from "@/features/Services";
import Work from "@/features/Work";
import Contact from "@/features/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch">
      <Hero />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
