import { Briefcase } from "lucide-react";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Where I've worked"
      title="Experience"
      description="A few roles where I got to build real data pipelines, work alongside data teams, and pick up how things run in practice."
    >
      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-line-strong via-line to-transparent sm:left-[9px]"
          aria-hidden
        />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.05}>
              <div className="relative pl-10 sm:pl-14">
                <span
                  className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent/50 bg-bg sm:h-5 sm:w-5"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
                </span>

                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-accent-soft" />
                      <h3 className="text-lg font-semibold text-fg">{exp.company}</h3>
                      {exp.current ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Present
                        </span>
                      ) : null}
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-soft">{exp.role}</p>
                  <p className="text-xs text-fg-subtle">{exp.location}</p>

                  {exp.summary ? (
                    <p className="mt-4 text-sm leading-relaxed text-fg-soft">{exp.summary}</p>
                  ) : null}

                  {exp.achievements ? (
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex gap-2 text-sm leading-relaxed text-fg-soft">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
