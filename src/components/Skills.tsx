import {
  Cloud,
  Database,
  GitBranch,
  LineChart,
  Code2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  "Cloud (AWS)": Cloud,
  "Data Engineering": Workflow,
  Databases: Database,
  Programming: Code2,
  "Analytics & BI": LineChart,
  "DevOps & Data Modeling": GitBranch,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title="Skills & Technologies"
      description="The tools I reach for when building and running data pipelines."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.category] ?? Database;
          return (
            <Reveal key={group.category} delay={i * 0.04}>
              <div className="glass lift h-full rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-accent-soft">
                    <Icon size={17} />
                  </span>
                  <h3 className="text-sm font-semibold text-fg">{group.category}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-fg-soft"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
