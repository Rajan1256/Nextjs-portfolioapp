import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function About() {
  const highlights = [
    {
      title: "AI Agent Systems",
      text: "Prompt-driven agent behaviors, OpenAI function calling, and analytics on call outcomes.",
    },
    {
      title: "Realtime Audio & Data",
      text: "Plivo WebSocket streaming, async Python services, and React dashboards for live insights.",
    },
    {
      title: "Cloud & Delivery",
      text: "AWS (EC2, S3), Git-based workflows, CI/CD, security-first APIs, and observability.",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-20 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="About"
          title="Engineering craft with product sense."
          kicker="Full-stack leader delivering scalable, secure, and high-performance web & AI experiences."
        />

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/80 leading-relaxed text-lg">
              Senior Full Stack Software Engineer with 7+ years building scalable, secure, high-performance web and
              AI-driven applications. Experienced in Laravel/Lumen, Python async services, React/Next.js dashboards,
              real-time audio streaming with Plivo WebSockets, and prompt-driven AI agent architectures. I thrive on
              aligning technical solutions with business outcomes through Agile delivery and CI/CD.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["AI-driven", "Realtime", "Cloud-ready", "Secure by default"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="text-white/70 text-sm mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
