import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="font-mono text-sm text-muted-foreground tracking-wider">
            devutils<span className="text-primary">.local</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          DevUtilsLocal Pro –{" "}
          <span className="text-gradient">Power Tools</span> for Real Developers
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Save history, bulk process data, sync across devices, and unlock API access.
        </p>

        {/* Early access badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-pulse-glow">
          <Flame className="w-4 h-4" />
          Early Access: First 50 users get Pro for $3/month
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            variant="hero"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => scrollTo("waitlist")}
          >
            Join Early Access – $3/month
          </Button>
          <Button
            variant="hero-outline"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => scrollTo("pricing")}
          >
            See What's Included
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
