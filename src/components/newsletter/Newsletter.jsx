import { useState } from "react";
import { motion } from "framer-motion";
import { introduction, site } from "../../data/portfolio";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { trackEvent } from "../../utils/analytics";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const submitViaMailto = () => {
    const mailSubject = encodeURIComponent(formData.subject || `Contact from Portfolio: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    trackEvent("contact_submit", { source: "contact_form_mailto_fallback" });
    window.location.href = `mailto:${introduction.ctaEmail}?subject=${mailSubject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!WEB3FORMS_ACCESS_KEY?.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        submitViaMailto();
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }, 400);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY.trim(),
          subject: formData.subject.trim() || `Portfolio contact: ${formData.name}`,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Could not send message. Try email below.");
      }
      trackEvent("contact_submit", { source: "web3forms" });
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pb-16">
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div
          className="cyber-grid-bg h-full w-full"
          style={{ perspective: "1000px", transform: "rotateX(60deg) scale(2)", transformOrigin: "top" }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Contact</span>
            </div>

            <h2 className="text-3xl md:text-[44px] font-bold text-white leading-[1.1] tracking-tight">
              Let&apos;s <span className="text-[var(--accent)]">Build Something</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-[var(--accent)] ml-1"
              >
                |
              </motion.span>
              <br /> Incredible
            </h2>
          </div>

          <div>
            <a
              href={`mailto:${introduction.ctaEmail}`}
              className="text-xl md:text-3xl font-bold text-white hover:text-[var(--accent)] transition-all underline underline-offset-8 decoration-white/20 hover:decoration-[var(--accent)]"
            >
              {introduction.ctaEmail}
            </a>
            <p className="text-[var(--text-muted)] mt-6 text-xs font-medium uppercase tracking-widest opacity-40">
              {site.locationLine}
            </p>
          </div>

          <SocialMedia />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--accent-glow)_0%,transparent_70%)] opacity-30 blur-3xl pointer-events-none" />

            <div className="liquid-glass rounded-[3rem] px-8 py-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[100px] -mr-48 -mt-48" />

              {!WEB3FORMS_ACCESS_KEY?.trim() && import.meta.env.DEV && (
                <p className="relative z-10 mb-4 text-sm text-amber-200/90 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3">
                  Dev: Add <code className="text-xs">VITE_WEB3FORMS_ACCESS_KEY</code> in{" "}
                  <code className="text-xs">.env.local</code> for free email delivery via{" "}
                  <a href="https://web3forms.com" className="underline" target="_blank" rel="noreferrer">
                    Web3Forms
                  </a>
                  . Until then, submit opens your mail app.
                </p>
              )}

              <form 
                onSubmit={handleSubmit} 
                className="relative z-10 space-y-6"
                data-netlify="true"
                name="contact"
              >
                {/* Hidden input for Netlify forms */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[var(--accent)] transition-all text-base text-white placeholder:text-white/50"
                  />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[var(--accent)] transition-all text-base text-white placeholder:text-white/50"
                  />
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Your subject"
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[var(--accent)] transition-all text-base text-white placeholder:text-white/50"
                  />
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    required
                    rows={1}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message..."
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[var(--accent)] transition-all text-base text-white placeholder:text-white/50 resize-none overflow-hidden"
                    onInput={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                  />
                </div>

                {submitError ? (
                  <p className="text-sm text-red-300 pt-1" role="alert">
                    {submitError}
                  </p>
                ) : null}

                {submitted && WEB3FORMS_ACCESS_KEY?.trim() ? (
                  <p className="text-sm text-[var(--accent)] pt-1">Thanks — your message was sent. I&apos;ll reply soon.</p>
                ) : null}

                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || (submitted && !!WEB3FORMS_ACCESS_KEY?.trim())}
                    className={`bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold py-3.5 px-10 rounded-2xl text-base transition-all duration-300 shadow-[0_15px_40px_rgba(34,197,94,0.3)] hover:shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting
                      ? WEB3FORMS_ACCESS_KEY?.trim()
                        ? "Sending…"
                        : "Opening Mail…"
                      : submitted && !WEB3FORMS_ACCESS_KEY?.trim()
                        ? "Check your mail app"
                        : submitted
                          ? "Sent"
                          : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
