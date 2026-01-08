import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";
import PricingCards from "../components/PricingCards";
import CTA from "../components/CTA";
import DashboardPreview from "../components/DashboardPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <DashboardPreview/>
      <FeaturesSection />
      <Testimonials />
      <PricingCards />
      <CTA />
    </>
  );
}
