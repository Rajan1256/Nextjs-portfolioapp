import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const skillMap = {
  Backend: ["PHP (Laravel/Lumen)", "Laravel Livewire", "Filament", "CodeIgniter", "Node.js", "Python"],
  Frontend: ["React.js", "Next.js", "HTML/CSS", "Bootstrap", "JavaScript", "jQuery"],
  Tools: ["AWS (EC2/S3)", "Git & Bitbucket", "Directus", "Jira/Asana", "CI/CD", "Plivo & WebSockets", "MySQL", "PostgreSQL"],
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Full-stack range with AI emphasis."
          kicker="From API design to motion-led interfaces, I deliver production-ready systems end-to-end."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {Object.entries(skillMap).map(([title, items], idx) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">{title}</h4>
                <RocketLaunchIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
