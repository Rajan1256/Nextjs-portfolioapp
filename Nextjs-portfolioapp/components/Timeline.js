import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const items = [
  {
    role: "Full Stack Software Engineer",
    company: "Aarav Info Solutions Pvt Ltd • Ahmedabad, India",
    years: "Aug 2025 – Present",
    impact:
      "Designed AI-driven voice agent systems in Python; real-time audio chunk streaming with Plivo WebSockets; React dashboards for live call data; integrated OpenAI prompt-based workflows.",
  },
  {
    role: "Senior Software Engineer",
    company: "Differenz System Pvt Ltd • Surat, India",
    years: "Dec 2021 – Jul 2025",
    impact:
      "Built and maintained PHP/Laravel applications; shipped features end-to-end; peer reviews and performance optimization across products.",
  },
  {
    role: "Full Stack Software Engineer",
    company: "+Onex India Pvt Ltd",
    years: "Aug 2021 – Dec 2021",
    impact:
      "Developed and maintained Laravel + React web applications, integrated third-party APIs, mentored juniors, and improved team code quality.",
  },
  {
    role: "Senior Software Engineer",
    company: "Webapprise System Pvt Ltd",
    years: "Aug 2021 – Dec 2021",
    impact:
      "Managed hosting/domains and deployments; ensured accessibility and performance; contributed to documentation and optimization.",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="px-6 py-20 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="A track record of delivering production systems."
          kicker="Leading builds across AI, realtime UX, and cloud platforms."
        />

        <div className="relative border-l border-white/10 pl-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.company}
              className="relative mb-10 rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="absolute -left-[14px] top-6 h-3 w-3 rounded-full bg-primary shadow-neon" />
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{item.years}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.role}</h3>
              <p className="text-white/70">{item.company}</p>
              <p className="mt-3 text-white/80 text-sm">{item.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
