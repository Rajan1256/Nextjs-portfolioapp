import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const innovations = [
  {
    title: "Agentic Retrieval Mesh",
    detail: "Composable agent graph that routes tasks across tools, RAG, and evaluators with observability hooks.",
  },
  {
    title: "Realtime Insight Fabric",
    detail: "WebSocket layer that blends streaming analytics with UI animations for sub-150ms feedback loops.",
  },
  {
    title: "Adaptive Cost Controller",
    detail: "Token-aware scheduling for LLM workloads that reduced monthly spend by 22% at steady throughput.",
  },
];

export default function AIWork() {
  return (
    <section id="ai" className="px-6 py-20 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="AI Work"
          title="Innovation at the intersection of agents and UX."
          kicker="Pairing reliability, latency, and delight for AI-first products."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {innovations.map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
