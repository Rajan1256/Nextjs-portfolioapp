import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    title: "Prompt-Driven AI Agent System",
    desc: "AI voice agents fully controlled by OpenAI Prompt IDs; dynamic personas, call flows, and dispositions without code changes.",
    tech: ["Python", "OpenAI", "Plivo WebSockets", "Async IO", "Analytics"],
    link: "#",
    timeline: "Aug 2025 – Present",
  },
  {
    title: "Kia South Africa Retailer Web App",
    desc: "Next.js vehicle configurator with real-time pricing, Directus CMS, and integrated APIs for models, dealers, and promotions.",
    tech: ["Next.js", "Directus CMS", "API Integrations", "React"],
    link: "#",
    timeline: "Oct 2024 – Mar 2025",
  },
  {
    title: "Football Betting App (Footypicks)",
    desc: "Live match data, secure auth, prediction leaderboards, and scoring logic across major leagues with documented APIs.",
    tech: ["Laravel / PHP", "JWT / Passport", "Swagger", "REST APIs"],
    link: "#",
    timeline: "Aug 2022 – Dec 2023",
  },
  {
    title: "Medical Mobile & Web App (USDoctor)",
    desc: "REST APIs for auth, video consults with Agora, patient records, and dynamic dashboards for providers and patients.",
    tech: ["Laravel / PHP", "MySQL", "Agora", "jQuery/AJAX"],
    link: "#",
    timeline: "Jan 2023 – Dec 2023",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work that blends AI, realtime, and polish."
          kicker="Every project pairs robust architecture with motion-rich, responsive UX."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-glass overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {project.timeline && <p className="text-xs text-primary mt-1">{project.timeline}</p>}
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{project.desc}</p>
                </div>
                <ArrowUpRightIcon className="h-5 w-5 text-white/70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
