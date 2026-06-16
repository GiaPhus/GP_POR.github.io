import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/portfolio";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/gia-phu",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GiaPhus",
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" aria-hidden />
          <div className="relative">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
              Say hello
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Let&apos;s talk data.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
              I&apos;m always happy to chat about data engineering, cloud, or any of the projects
              here. If you&apos;re hiring or just curious, my inbox is open.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group glass lift flex items-center gap-3 rounded-2xl p-5 text-left"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-accent-soft">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-fg-subtle">{c.label}</span>
                      <span className="block truncate text-sm font-medium text-fg">{c.value}</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
