import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please complete all fields." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus({ type: "error", text: "Enter a valid email." });
      return;
    }
    setStatus({ type: "success", text: "Thanks! I’ll get back within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 py-20 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something bold."
          kicker="Reach out for AI products, realtime experiences, or technical leadership."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-lg">
            <p className="text-white/80">
              Email: <a href="mailto:rajanghariya@gmail.com" className="text-primary">rajanghariya@gmail.com</a>
            </p>
            <p className="text-white/80 mt-2">Phone: <a href="tel:+917285898514" className="text-primary">+91 72858 98514</a></p>
            <p className="text-white/80 mt-2">LinkedIn: <a href="https://linkedin.com/in/rajan-ghariya" className="text-primary">/in/rajan-ghariya</a></p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["AI Agent Systems", "Realtime audio streaming", "React/Next dashboards", "Laravel & Python APIs"].map((chip) => (
                <span key={chip} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white/70">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-glass backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">How can I help?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none"
                  placeholder="Project goals, timelines, or roles."
                />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-surface shadow-neon"
              >
                Send Message
              </motion.button>
              {status && (
                <p className={`text-sm ${status.type === "error" ? "text-red-400" : "text-emerald-400"}`}>
                  {status.text}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
