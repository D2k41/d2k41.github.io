export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      {/* glows */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.65 0.19 260 / 0.5), transparent 60%), radial-gradient(circle at 70% 70%, oklch(0.88 0.24 155 / 0.35), transparent 60%)",
        }}
      />
      {/* ring */}
      <div className="absolute inset-6 rounded-full border border-border" />
      <div className="absolute inset-16 rounded-full border border-border/70" />

      {/* rotating polyhedron */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative size-56 sm:size-72 animate-float-slow">
          <svg
            viewBox="0 0 200 200"
            className="size-full drop-shadow-[0_0_30px_oklch(0.65_0.19_260/0.6)]"
            role="img"
            aria-label="Abstract Unity-inspired geometric composition"
          >
            <defs>
              <linearGradient id="gradA" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="oklch(0.65 0.19 260)" />
                <stop offset="1" stopColor="oklch(0.88 0.24 155)" />
              </linearGradient>
            </defs>
            {/* hexagon */}
            <polygon
              points="100,15 175,57 175,143 100,185 25,143 25,57"
              fill="none"
              stroke="url(#gradA)"
              strokeWidth="1.5"
            />
            <polygon
              points="100,45 148,72 148,128 100,155 52,128 52,72"
              fill="none"
              stroke="oklch(1 0 0 / 0.3)"
              strokeWidth="1"
            />
            {/* inner triangles (Unity vibe) */}
            <polygon points="100,60 140,130 60,130" fill="none" stroke="url(#gradA)" strokeWidth="1.2" />
            <polygon points="100,140 60,70 140,70" fill="none" stroke="oklch(0.88 0.24 155 / 0.7)" strokeWidth="1" />
            <circle cx="100" cy="100" r="4" fill="oklch(0.88 0.24 155)" />
          </svg>
        </div>
      </div>

      {/* floating chips */}
      <FloatChip className="left-2 top-8" label="C#" color="primary" />
      <FloatChip className="right-4 top-16" label="Unity 6" color="neon" delay={1.2} />
      <FloatChip className="left-6 bottom-16" label="WebGL" color="neon" delay={0.6} />
      <FloatChip className="right-2 bottom-8" label="Addressables" color="primary" delay={1.8} />

      {/* particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute size-1 rounded-full bg-neon/70"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            opacity: 0.5,
            animation: `float-slow ${5 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function FloatChip({
  className,
  label,
  color,
  delay = 0,
}: {
  className: string;
  label: string;
  color: "primary" | "neon";
  delay?: number;
}) {
  return (
    <div
      className={`absolute ${className} rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1.5 text-xs font-medium shadow-lg`}
      style={{ animation: `float-slow ${6 + delay}s ease-in-out ${delay}s infinite` }}
    >
      <span className={color === "primary" ? "text-primary" : "text-neon"}>●</span>{" "}
      <span className="text-foreground">{label}</span>
    </div>
  );
}
