import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import AIWork from "../components/AIWork";
import GitHubRepos from "../components/GitHubRepos";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home({ repos }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIWork />
      <Timeline />
      <GitHubRepos repos={repos} />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://api.github.com/users/rajanghariya/repos?sort=updated&per_page=3",
    );
    if (!res.ok) throw new Error("GitHub fetch failed");
    const data = await res.json();
    return {
      props: {
        repos: data,
      },
      revalidate: 3600,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        repos: [],
      },
    };
  }
}
