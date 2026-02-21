import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MortgageCalculator from "@/components/MortgageCalculator";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MortgageCalculator />
      </main>
    </>
  );
}
