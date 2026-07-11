const palette = [
  "from-navy-700 to-navy-900",
  "from-navy-800 to-navy-950",
  "from-[#1a3a6b] to-navy-900",
];

function initials(name: string) {
  const parts = name.split(/\s|-/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function BrandLogo({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const grad = palette[name.length % palette.length];
  const dim = size === "lg" ? "h-20 w-20 text-2xl" : "h-14 w-14 text-lg";
  return (
    <div
      className={`grid ${dim} place-items-center rounded-2xl bg-gradient-to-br ${grad} font-display font-medium tracking-tight text-white ring-1 ring-white/10`}
      aria-label={`${name} logo`}
    >
      {initials(name)}
    </div>
  );
}
