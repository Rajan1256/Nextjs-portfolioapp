import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#ai", label: "AI Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/5 bg-surface/70">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#top" className="text-white font-semibold text-lg">
          RG<span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary transition">
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-surface font-semibold shadow-neon"
          >
            Let’s Talk
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          ☰
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-surface/95"
          >
            <div className="flex flex-col px-6 py-4 gap-3 text-white/80">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-1">
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-surface font-semibold text-center"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
