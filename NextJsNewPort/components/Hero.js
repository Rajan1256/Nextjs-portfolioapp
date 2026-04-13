import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDownTrayIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

const phrases = [
  "I build AI-powered systems.",
  "I craft real-time experiences.",
  "I design scalable cloud APIs.",
  "I ship products that feel futuristic.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let i = 0;
    setText("");
    const interval = setInterval(() => {
      setText(current.slice(0, i + 1));
      i++;
      if (i === current.length) clearInterval(interval);
    }, 50);
    const timeout = setTimeout(() => {
      setPhraseIndex((p) => (p + 1) % phrases.length);
    }, current.length * 50 + 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [phraseIndex]);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,124,244,0.2),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.15),transparent_25%)]" />
      <div className="container mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-7/12">
            <motion.p
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Rajan Ghariya • Senior Full Stack Software Engineer
            </motion.p>
            <motion.h1
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Building scalable, secure <span className="text-primary">AI</span> & real-time systems.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-white/70 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              7+ years building high-performance web and AI-driven applications across Laravel, Python, React/Next.js,
              WebSockets, and AWS. Experienced with prompt-driven AI agents, real-time audio streaming, and CI/CD-led delivery.
            </motion.p>
            <motion.div
              className="mt-8 text-xl text-white/80 font-semibold h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {text}
              <span className="border-l-2 border-primary ml-1 animate-pulse" />
            </motion.div>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-surface shadow-neon hover:shadow-glass transition"
              >
                View Projects
                <PaperAirplaneIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white hover:border-primary hover:text-primary"
              >
                Contact Me
              </Link>
              <Link
                href="/Rajan_Ghariya_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:border-secondary hover:text-secondary"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download Resume
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-5/12">
            <motion.div
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-glass"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/60">Tech Stack</p>
                  <span className="text-xs rounded-full bg-primary/20 text-primary px-3 py-1">Realtime</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Laravel / Lumen",
                    "React.js / Next.js",
                    "Python (async)",
                    "AI Agents",
                    "Plivo WebSockets",
                    "AWS (EC2/S3)",
                    "CI/CD",
                    "MySQL / PostgreSQL",
                  ].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Currently crafting AI-first experiences & scalable APIs.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
