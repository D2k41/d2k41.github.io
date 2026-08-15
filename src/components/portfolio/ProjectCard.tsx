import { ExternalLink, Gamepad2, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "./data";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  const accentClass =
    project.accent === "green"
      ? "from-neon/25 via-neon/5"
      : project.accent === "mix"
        ? "from-primary/25 via-neon/10"
        : "from-primary/25 via-primary/5";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const hasVideo = !!project.video;
  const embedSrc =
    project.video?.kind === "youtube"
      ? `https://www.youtube.com/embed/${project.video.id}?autoplay=1&mute=1&rel=0`
      : project.video?.kind === "drive"
        ? `https://drive.google.com/file/d/${project.video.id}/preview?autoplay=1`
        : null;

  return (
    <article className="card-surface card-hover group flex flex-col overflow-hidden">
      <button
        type="button"
        onClick={() => hasVideo && setOpen(true)}
        className={`relative aspect-video overflow-hidden text-left ${hasVideo ? "cursor-pointer" : "cursor-default"}`}
        aria-label={hasVideo ? `Play ${project.title} demo` : project.title}
        tabIndex={hasVideo ? 0 : -1}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${accentClass} to-transparent`} />
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0 grid place-items-center">
              <Gamepad2 className="size-10 text-foreground/80" aria-hidden />
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        {hasVideo && (
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-14 place-items-center rounded-full bg-background/70 backdrop-blur ring-1 ring-primary/40 transition-transform duration-300 group-hover:scale-110">
              <Play className="size-6 translate-x-[1px] text-primary" aria-hidden />
            </span>
          </div>
        )}
        <div className="absolute bottom-3 left-3 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 text-[10px] font-medium text-neon ring-1 ring-neon/30">
          {project.platform}
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-panel/70 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        {(hasVideo || project.url) && (
          <div className="mt-auto pt-2">
            {hasVideo ? (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-md bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-primary/30 transition-colors hover:bg-primary/25"
              >
                <Play className="size-3.5" aria-hidden /> {project.linkLabel ?? "Watch Demo"}
              </button>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-primary/30 transition-colors hover:bg-primary/25"
              >
                <ExternalLink className="size-3.5" aria-hidden /> {project.linkLabel ?? "View Project"}
              </a>
            )}
          </div>
        )}
      </div>

      {open && embedSrc && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-background/85 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} demo video`}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-panel shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-sm font-medium text-foreground">{project.title}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-background/60 hover:text-foreground"
                aria-label="Close video"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={embedSrc}
                title={`${project.title} demo`}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>,
        document.body,
      )}
    </article>
  );
}
