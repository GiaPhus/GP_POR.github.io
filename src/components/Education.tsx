import { GraduationCap } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/ui/Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Background"
      title="Education"
      description="Where I picked up the fundamentals behind the work I do."
    >
      <Reveal>
        <div className="glass card-hover rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-accent-soft">
              <GraduationCap size={18} />
            </span>
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold text-fg">{education.school}</h3>
                <span className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                  {education.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-accent-soft">{education.degree}</p>
              <p className="mt-2 text-sm text-fg-muted">
                Relevant coursework: {education.coursework}.
              </p>
              <p className="mt-1 text-xs text-fg-subtle">English: {education.english}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
