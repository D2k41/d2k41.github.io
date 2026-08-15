import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Download,
  ArrowUp,
  Sparkles,
  Cpu,
  Layers,
  Palette,
  Wrench,
  Users,
  Code2,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { HeroVisual } from "@/components/portfolio/HeroVisual";
import { Reveal } from "@/components/portfolio/Reveal";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects, experience, skillGroups, contact } from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const skillIcons: Record<string, typeof Code2> = {
  Languages: Code2,
  "Game Development": Sparkles,
  Systems: Cpu,
  Graphics: Palette,
  Tools: Wrench,
  "Soft Skills": Users,
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center pt-24 pb-16"
          aria-label="Introduction"
        >
          <div
            aria-hidden
            className="absolute inset-0 grid-bg opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, oklch(0.65 0.19 260 / 0.55), transparent 65%)",
            }}
          />

          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-neon opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-neon" />
                  </span>
                  Available for new opportunities
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02]">
                  Denis <span className="text-gradient-brand">Kiš</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 text-xl sm:text-2xl font-medium text-muted-foreground">
                  Unity Game Developer
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Unity Game Developer with{" "}
                  <span className="text-foreground font-medium">7+ years</span> of professional
                  experience developing mobile, WebGL, Telegram Mini Apps, and cross-platform
                  games. Passionate about polished gameplay systems, performant architecture, and
                  memorable player experiences.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:glow-primary"
                  >
                    View My Work
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-panel/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-neon/40 hover:text-neon"
                  >
                    Get In Touch
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={220} className="relative">
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative py-24" aria-labelledby="about-title">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionKicker>About</SectionKicker>
              <h2 id="about-title" className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Building games that ship, scale, and feel great to play.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                I'm a Unity Game Developer with 5+ years of professional experience across
                <span className="text-foreground"> mobile</span>,{" "}
                <span className="text-foreground">WebGL</span>, and{" "}
                <span className="text-foreground">Telegram Mini Apps</span>. My work spans gameplay
                programming, UI systems, multiplayer, Addressables-driven content pipelines, and
                performance optimization on constrained devices.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I write clean, testable C# and collaborate closely with designers, artists and
                backend engineers to turn ambitious ideas into polished, cross-platform releases —
                often integrating Firebase, REST APIs and live-ops tooling along the way.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  "C# & Unity 6",
                  "Mobile & WebGL",
                  "Telegram Mini Apps",
                  "Addressables",
                  "Multiplayer",
                  "Firebase",
                  "Perf. Optimization",
                  "UI Systems",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-border bg-panel/60 px-3 py-2.5 text-center text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative py-24" aria-labelledby="projects-title">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionKicker>Featured Projects</SectionKicker>
              <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                <h2
                  id="projects-title"
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  Selected work across mobile, WebGL & Telegram.
                </h2>
                <p className="max-w-md text-sm text-muted-foreground">
                  A snapshot of shipped titles, live-ops games and internal tools I've built or
                  contributed to as a Unity developer.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 80}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="relative py-24" aria-labelledby="experience-title">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionKicker>Experience</SectionKicker>
              <h2
                id="experience-title"
                className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
              >
                Seven years across five studios.
              </h2>
            </Reveal>

            <ol className="relative mt-14 space-y-10 border-l border-border pl-6 sm:pl-10">
              {experience.map((e, i) => (
                <Reveal as="li" key={e.company} delay={i * 60}>
                  <span
                    className="absolute -left-[7px] mt-2 size-3.5 rounded-full bg-background ring-2 ring-primary sm:-left-[7px]"
                    aria-hidden
                  />
                  <div className="card-surface card-hover p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {e.company}{" "}
                        <span className="font-normal text-muted-foreground">· {e.role}</span>
                      </h3>
                      <span className="text-xs uppercase tracking-widest text-neon">
                        {e.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {e.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="relative py-24" aria-labelledby="skills-title">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionKicker>Technical Skills</SectionKicker>
              <h2
                id="skills-title"
                className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
              >
                The stack behind the games.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, i) => {
                const Icon = skillIcons[group.title] ?? Layers;
                return (
                  <Reveal key={group.title} delay={(i % 3) * 70}>
                    <div className="card-surface card-hover h-full p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <h3 className="text-base font-semibold">{group.title}</h3>
                      </div>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {group.items.map((s) => (
                          <li
                            key={s}
                            className="rounded-md border border-border bg-panel/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-neon hover:border-neon/40"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS / STATS */}
        <section className="relative py-24" aria-label="Resume highlights">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionKicker>Resume Highlights</SectionKicker>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Shipped, scaled, delivered.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "7+", v: "Years Experience" },
                { k: "5", v: "Professional Studios" },
                { k: "10+", v: "Published Projects" },
                { k: "15+", v: "Prototypes Developed" },
              ].map((s, i) => (
                <Reveal key={s.v} delay={i * 60}>
                  <div className="card-surface p-6 text-center">
                    <div className="text-4xl sm:text-5xl font-black text-gradient-brand">
                      {s.k}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                      {s.v}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {["Android", "iOS", "WebGL", "Telegram"].map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-xs font-medium text-neon"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative py-28" aria-labelledby="contact-title">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <SectionKicker>Contact</SectionKicker>
              <h2
                id="contact-title"
                className="mt-3 text-4xl sm:text-5xl font-black tracking-tight"
              >
                Let's build something <span className="text-gradient-brand">great</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Open to full-time roles, contracts and interesting collaborations with game
                studios worldwide.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:glow-primary"
                >
                  <Mail className="size-4" aria-hidden /> Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-panel/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-neon/40 hover:text-neon"
                >
                  <Download className="size-4" aria-hidden /> Download Resume
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Mail className="size-4" aria-hidden /> {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Linkedin className="size-4" aria-hidden /> LinkedIn
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Denis Kiš. Crafted with Unity, C# and caffeine.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-neon hover:border-neon/40"
            >
              <ArrowUp className="size-3.5" aria-hidden /> Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-neon">
      <span className="h-px w-8 bg-neon/50" aria-hidden />
      {children}
    </div>
  );
}
