import { History, Layers, Cloud, Code2, Shield } from "lucide-react";

const features = [
  {
    icon: History,
    title: "History & Snapshots",
    description: "Save your previous tool inputs and results securely.",
  },
  {
    icon: Layers,
    title: "Bulk Mode",
    description: "Run operations on large datasets instantly.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Access your tool history from any device.",
  },
  {
    icon: Code2,
    title: "Developer API",
    description: "Use DevUtilsLocal tools programmatically.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Pro features that <span className="text-gradient">supercharge</span> your workflow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to go from casual use to power user.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card/50 p-6 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
