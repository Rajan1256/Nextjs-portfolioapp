import Head from "next/head";
import Cursor from "./Cursor";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Rajan Ghariya | Senior Full Stack Engineer</title>
        <meta
          name="description"
          content="Portfolio of Rajan Ghariya, Senior Full Stack Engineer specializing in AI-driven applications, real-time systems, and scalable APIs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen relative overflow-hidden bg-gray-50 text-slate-900 dark:bg-surface dark:text-white transition-colors">
        <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl bg-gradient-to-br from-primary/40 via-accent/20 to-secondary/30" />
        <ThemeToggle />
        <Cursor />
        <main className="relative">{children}</main>
      </div>
    </>
  );
}
