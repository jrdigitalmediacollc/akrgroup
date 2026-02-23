import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MortgageCalculator from "@/components/MortgageCalculator";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MortgageCalculator />
        <Services />
        <WhyChooseUs />
      </main>
    </>
  );
}
