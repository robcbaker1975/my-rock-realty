import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const interestOptions = [
  "Buyer programs",
  "Selling my home",
  "Relocating",
  "Out-of-state referral",
  "Land / investment",
  "Workshop info",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    interests: [] as string[],
    message: "",
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Thank you! Rob will be in touch soon.");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    contactMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      type: formData.type || undefined,
      interests: formData.interests,
      message: formData.message || undefined,
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-12 sm:py-20 md:py-28 bg-charcoal">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-gold" />
            </div>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Message Received
            </h2>
            <p className="text-cream/70 text-lg">
              Thanks for reaching out. Rob will review your message and get back to
              you shortly.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-28 bg-charcoal">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span
              className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get in Touch
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Make a{" "}
              <span className="text-gold">Smart Move?</span>
            </h2>
            <p className="text-cream/70 text-[15px] sm:text-lg leading-relaxed mb-5 sm:mb-8">
              Whether you're buying, selling, relocating, or looking for a trusted agent referral — fill out the form and Rob will be in touch.
            </p>

            <div className="space-y-4 text-cream/60 text-sm">
              <p>
                <strong className="text-cream/80">Rob Baker</strong>
                <br />
                Founder & Owner, My Rock Realty
              </p>
              <p>
                <strong className="text-cream/80">Serving:</strong> Colorado buyers,
                sellers, land clients, and relocations
              </p>
              <p>
                <strong className="text-cream/80">Referrals:</strong> Trusted agent
                network in all 50 states
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5"
            >
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-cream/60 text-sm mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 sm:py-3 bg-white/5 border border-white/15 rounded-lg sm:rounded text-white text-base placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-cream/60 text-sm mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 sm:py-3 bg-white/5 border border-white/15 rounded-lg sm:rounded text-white text-base placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              {/* Phone & Type */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-cream/60 text-sm mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 sm:py-3 bg-white/5 border border-white/15 rounded-lg sm:rounded text-white text-base placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-cream/60 text-sm mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    I'm interested in...
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3.5 sm:py-3 bg-white/5 border border-white/15 rounded-lg sm:rounded text-white text-base focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-charcoal">Select one</option>
                    <option value="buying" className="bg-charcoal">Buying a Home</option>
                    <option value="selling" className="bg-charcoal">Selling a Home</option>
                    <option value="relocating" className="bg-charcoal">Relocating</option>
                    <option value="referral" className="bg-charcoal">Agent Referral</option>
                    <option value="land" className="bg-charcoal">Land / Investment</option>
                    <option value="workshop" className="bg-charcoal">Workshop Info</option>
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-cream/60 text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Select any that apply:
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-2">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-3.5 py-2.5 sm:py-2 text-xs sm:text-xs rounded-lg sm:rounded border transition-all ${
                        formData.interests.includes(interest)
                          ? "bg-gold/20 border-gold/50 text-gold"
                          : "bg-white/5 border-white/15 text-cream/60 hover:border-gold/30"
                      }`}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-cream/60 text-sm mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                    className="w-full px-4 py-3.5 sm:py-3 bg-white/5 border border-white/15 rounded-lg sm:rounded text-white text-base placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell Rob about your goals, timeline, or questions..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-bold text-base rounded-lg sm:rounded transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
