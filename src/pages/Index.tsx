import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
