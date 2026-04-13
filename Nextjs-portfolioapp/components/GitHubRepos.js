import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function GitHubRepos({ repos = [] }) {
  if (!repos.length) return null;
  return (
    <section id="github" className="px-6 py-20 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="GitHub"
          title="Latest repos"
          kicker="A peek at what I’m experimenting with."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glass hover:border-primary/50 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{repo.name}</h3>
                <ArrowUpRightIcon className="h-4 w-4 text-white/60" />
              </div>
              <p className="mt-2 text-sm text-white/70 line-clamp-2">{repo.description || "Side project"}</p>
              <p className="mt-3 text-xs text-white/50">Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
