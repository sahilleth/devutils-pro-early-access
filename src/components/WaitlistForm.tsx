import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { supabase } from "@/lib/supabase";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [feature, setFeature] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    const { error } = await supabase.from("waitlist").insert([
      {
        email,
        role,
        feature,
      },
    ]);

    if (error) {
      if (error.message.includes("duplicate")) {
        setError("You're already on the waitlist 😉");
      } else {
        setError("Something went wrong. Try again.");
      }
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
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
            We'll email you when Pro launches.
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
            <label className="text-sm font-medium">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="dev@example.com"
              className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm"
            >
              <option value="">Select your role</option>
              <option value="developer">Developer</option>
              <option value="student">Student</option>
              <option value="founder">Founder</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              What feature excites you most? (optional)
            </label>
            <input
              type="text"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
              placeholder="Bulk mode, API access..."
              className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full text-base py-6 mt-2"
            disabled={loading}
          >
            {loading ? "Reserving..." : "Reserve My $3 Spot"}
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
