"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, FileText, Github, Linkedin, MapPin } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
      };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 sm:pt-40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
            <motion.div variants={item} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-fg-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {profile.title}
                <span className="text-fg-subtle">·</span>
                <MapPin size={12} className="text-fg-subtle" />
                {profile.location}
              </span>
            </motion.div>

            <motion.div variants={item} className="mt-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-soft">
                <BadgeCheck size={14} className="text-accent" />
                {profile.credential}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-fg sm:text-5xl"
            >
              {profile.headline}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="interactive group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-muted"
              >
                What I&apos;ve Been Up To 👨‍💻
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium text-fg hover:bg-surface-hover"
              >
                <FileText size={16} />
                Resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium text-fg hover:bg-surface-hover"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium text-fg hover:bg-surface-hover"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl"
                aria-hidden
              />
              <div className="glass relative overflow-hidden rounded-3xl p-1.5">
                <Image
                  src={profile.avatar}
                  alt={`Portrait of ${profile.fullName}`}
                  width={300}
                  height={360}
                  priority
                  className="h-56 w-48 rounded-[1.35rem] object-cover sm:h-72 sm:w-60"
                />
              </div>
              <span className="glass absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-fg-soft">
                <BadgeCheck size={13} className="text-accent" />
                AWS Certified
              </span>
            </div>
          </motion.div>
        </div>

        <motion.dl
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={item} className="glass lift rounded-2xl p-5">
              <dt className="text-2xl font-semibold text-fg sm:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-fg-muted">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
