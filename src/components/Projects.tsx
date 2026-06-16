import { ArrowUpRight, Github, Layers, Lightbulb, Target, TrendingUp, Workflow } from "lucide-react";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Things I've built"
      title="Featured Projects"
      description="A closer look at a few data systems I've built — what I was trying to solve, how I put them together, and what I took away."
    >
      <div className="space-y-8">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article className="glass card-hover overflow-hidden rounded-3xl">
              <div className="border-b border-line p-7 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-fg sm:text-2xl">{project.name}</h3>
                    </div>
                    <p className="mt-1 text-sm text-accent-soft">{project.tagline}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                      {project.period}
                    </span>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="interactive inline-flex items-center gap-1 rounded-lg border border-line-strong bg-surface px-3 py-1.5 text-xs font-medium text-fg hover:bg-surface-hover"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    ) : null}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live site`}
                        className="interactive inline-flex items-center gap-1 rounded-lg border border-line-strong bg-surface px-3 py-1.5 text-xs font-medium text-fg hover:bg-surface-hover"
                      >
                        <ArrowUpRight size={14} />
                        Visit
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg-soft">
                  {project.overview}
                </p>
              </div>

              <div className="grid gap-px bg-line sm:grid-cols-2">
                <div className="bg-bg-secondary p-7 sm:p-8">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <Target size={15} className="text-accent-soft" />
                    Problem
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.problem}</p>

                  <h4 className="mt-6 flex items-center gap-2 text-sm font-semibold text-fg">
                    <Lightbulb size={15} className="text-accent-soft" />
                    Solution
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.solution}</p>
                </div>

                <div className="bg-bg-secondary p-7 sm:p-8">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <Workflow size={15} className="text-accent-soft" />
                    Architecture
                  </h4>
                  <ol className="mt-2 space-y-1.5">
                    {project.architecture.map((step, idx) => (
                      <li key={step} className="flex gap-2 text-sm leading-relaxed text-fg-muted">
                        <span className="font-mono text-xs text-accent-soft">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="grid gap-px bg-line sm:grid-cols-2">
                <div className="bg-bg-secondary p-7 sm:p-8">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <TrendingUp size={15} className="text-accent-soft" />
                    Impact
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {project.impact.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-fg-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-secondary p-7 sm:p-8">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <Layers size={15} className="text-accent-soft" />
                    Key learning
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.learnings}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-7 sm:p-8">
                {project.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
