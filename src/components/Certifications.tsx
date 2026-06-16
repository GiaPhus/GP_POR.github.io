import { Award } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Learning"
      title="Certifications"
      description="The fundamentals I've picked up along the way — across SQL, programming, data engineering, and visualization."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.04}>
            <div className="glass lift flex h-full flex-col justify-between rounded-2xl p-6">
              <Award size={18} className="text-accent-soft" />
              <div className="mt-6">
                <h3 className="text-sm font-semibold leading-snug text-fg">{cert.name}</h3>
                <p className="mt-1 text-xs text-fg-muted">{cert.issuer}</p>
                {cert.date && <p className="mt-1 text-xs text-fg-muted">{cert.date}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
