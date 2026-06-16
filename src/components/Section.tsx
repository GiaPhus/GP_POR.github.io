import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-fg-muted">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
