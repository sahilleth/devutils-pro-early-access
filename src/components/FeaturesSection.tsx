import { History, Layers, Cloud, Code2, Shield } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const features = [
  {
    icon: History,
    title: "History & Snapshots",
    description: "Save your previous tool inputs and results securely. Never lose your work again with automatic snapshots.",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Layers,
    title: "Bulk Mode",
    description: "Run operations on large datasets instantly. Generate 1000 UUIDs, batch hash, and more.",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Access your tool history from any device seamlessly.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Code2,
    title: "Developer API",
    description: "Use DevUtilsLocal tools programmatically via REST endpoints.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted end-to-end. We never sell or share your information. Everything runs locally by default.",
    span: "md:col-span-2 md:row-span-1",
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Pro features that <span className="text-gradient">supercharge</span> your workflow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to go from casual use to power user.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:bg-card transition-all duration-500 overflow-hidden ${feature.span} flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 100 + 200}ms` : "0ms",
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_hsl(152_60%_45%/0.06),_transparent_70%)]" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
