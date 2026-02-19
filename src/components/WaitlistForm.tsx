import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [feature, setFeature] = useState("");
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-24 px-4">
        <div className="max-w-md mx-auto text-center space-y-6 animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">You're in! 🎉</h2>
          <p className="text-muted-foreground">
            We'll email you when Pro launches. Keep building awesome things.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 px-4" ref={ref}>
      <div
        className={`max-w-md mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Reserve your spot
          </h2>
          <p className="text-muted-foreground">
            Join the waitlist and lock in $3/month forever.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="dev@example.com"
              className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow appearance-none"
            >
              <option value="">Select your role</option>
              <option value="developer">Developer</option>
              <option value="student">Student</option>
              <option value="founder">Founder</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="feature" className="text-sm font-medium">
              What feature excites you most? <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="feature"
              type="text"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
              placeholder="e.g. Bulk mode, API access..."
              className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full text-base py-6 mt-2"
          >
            Reserve My $3 Spot
          </Button>

          <p className="text-center text-xs text-muted-foreground pt-1">
            Limited to first 50 users
          </p>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
