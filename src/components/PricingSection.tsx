import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "Everything you need to get started",
    features: [
      { text: "Unlimited local usage", included: true },
      { text: "All tools run in browser", included: true },
      { text: "No account required", included: true },
      { text: "Privacy-first", included: true },
      { text: "Cloud storage", included: false },
      { text: "Tool history", included: false },
      { text: "Bulk operations", included: false },
      { text: "API access", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    earlyPrice: "$3",
    period: "/month",
    description: "For power users and teams",
    badge: "Most Popular",
    features: [
      { text: "Everything in Free", included: true },
      { text: "Save tool history", included: true },
      { text: "Bulk operations", included: true },
      { text: "Cloud sync across devices", included: true },
      { text: "API access", included: true },
      { text: "Export data", included: true },
      { text: "Priority feature requests", included: true },
      { text: "Early access to new tools", included: true },
    ],
    highlighted: true,
  },
];

const PricingSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free. Upgrade when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/40 bg-card glow-border"
                  : "border-border bg-card/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  {plan.earlyPrice ? (
                    <>
                      <span className="text-4xl font-bold text-primary">{plan.earlyPrice}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">{plan.price}/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">{plan.price}</span>
                  )}
                </div>
                {plan.earlyPrice && (
                  <p className="text-xs text-primary mt-2">Early access — first 50 users only</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-primary shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.highlighted ? (
                <button
                  onClick={() => scrollTo("waitlist")}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 glow-primary"
                >
                  Reserve My $3 Spot
                </button>
              ) : (
                <button className="w-full py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors">
                  Get Started Free
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          No ads. No tracking. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
