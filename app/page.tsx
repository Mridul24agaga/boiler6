import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import { LogoTicker } from "@/components/logoticker";
import  Features  from "@/components/Features"
import { InfiniteMovingCardsDemo } from "@/components/Testimonial";
import Cta from "@/components/cta"
export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <Hero />
      <LogoTicker />
      <Features />
      <Pricing />
      <InfiniteMovingCardsDemo/>
      <Faq />
      <Cta />

    </main>
  );
}
