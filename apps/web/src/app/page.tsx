import Hero from "@/components/Hero";
import MortgageCalculator from "@/components/MortgageCalculator";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReadyToStart from "@/components/ReadyToStart";

export default function Home() {
  return (
    <main>
      <Hero />
      <MortgageCalculator />
      <Services />
      <WhyChooseUs />
      <ReadyToStart />
    </main>
  );
}
