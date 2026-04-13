export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6 border-t border-white/5">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-white/60 gap-3">
        <p>© {new Date().getFullYear()} Rajan Ghariya.</p>
        <div className="flex gap-4">
          <a href="https://github.com" className="hover:text-primary">GitHub</a>
          <a href="https://www.linkedin.com" className="hover:text-primary">LinkedIn</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
}
