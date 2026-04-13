export default function SectionHeader({ eyebrow, title, kicker }) {
  return (
    <div className="mb-10">
      <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">{title}</h2>
      {kicker && <p className="text-white/70 max-w-2xl">{kicker}</p>}
    </div>
  );
}
