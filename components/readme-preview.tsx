"use client"

import { motion } from "motion/react"

const RAW = "https://raw.githubusercontent.com/tusharsaharan/tusharsaharan/main/assets"

const badge = (label: string, logo: string) =>
  `https://img.shields.io/badge/${label}-1C2F42?style=flat-square&logo=${logo}&logoColor=A9C7DD&labelColor=0D1620`

const links = [
  ["Portfolio", "vercel"],
  ["LinkedIn", "linkedin"],
  ["LeetCode", "leetcode"],
  ["Codeforces", "codeforces"],
  ["Email", "gmail"],
]

const stack: [string, string][][] = [
  [
    ["TypeScript", "typescript"],
    ["JavaScript", "javascript"],
    ["Python", "python"],
    ["C++", "cplusplus"],
    ["SQL", "postgresql"],
  ],
  [
    ["React", "react"],
    ["Next.js", "nextdotjs"],
    ["TanStack", "reactquery"],
    ["Tailwind", "tailwindcss"],
    ["Three.js", "threedotjs"],
    ["Framer%20Motion", "framer"],
  ],
  [
    ["Node.js", "nodedotjs"],
    ["Express", "express"],
    ["FastAPI", "fastapi"],
    ["PostgreSQL", "postgresql"],
    ["MongoDB", "mongodb"],
    ["DynamoDB", "amazondynamodb"],
  ],
  [
    ["Gemini", "googlegemini"],
    ["Bedrock", "amazonaws"],
    ["scikit--learn", "scikitlearn"],
    ["Playwright", "playwright"],
    ["Vitest", "vitest"],
    ["Docker", "docker"],
    ["Git", "git"],
  ],
]

const projects = [
  {
    name: "Jobly",
    tagline: "AI recruitment platform",
    detail: "TanStack Start · R3F · Gemini resume parsing · weighted ATS scoring",
  },
  {
    name: "NeedSpeak",
    tagline: "intent-to-cart pipeline",
    detail: "Bedrock Nova Pro · hybrid BM25 + vector search · realtime SplitCart",
  },
  {
    name: "Civic Pulse",
    tagline: "civic reporting, live",
    detail: "Socket.IO · DBSCAN hotspots via FastAPI · JWT-secured reports",
  },
  {
    name: "Resume Parser",
    tagline: "parsing engine",
    detail: "Gemini Flash Lite · PDF extraction · skill normalization · job matching",
  },
]

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Divider() {
  return (
    <div className="my-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/alpine-divider.svg" alt="" className="w-full" />
    </div>
  )
}

export function ReadmePreview() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col px-5 py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.985, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/alpine-header.svg"
          alt="Tushar Saharan — Full-Stack Developer and AI Engineer"
          className="w-full rounded-2xl"
        />
      </motion.div>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
          I build full-stack products and put AI where it actually earns its place. Currently deep in{" "}
          <span className="text-snow">agentic AI</span>, retrieval, and interfaces that feel alive.
        </p>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {links.map(([label, logo]) => (
            <motion.a
              key={label}
              href="#"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-flex"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={badge(label, logo)} alt={label} className="h-5" />
            </motion.a>
          ))}
        </div>
      </Reveal>

      <Divider />

      <Reveal>
        <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-ice uppercase">Toolkit</h2>
      </Reveal>

      <div className="mt-6 flex flex-col gap-3">
        {stack.map((row, ri) => (
          <Reveal key={ri} delay={ri * 0.08}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {row.map(([label, logo]) => (
                <motion.img
                  key={label}
                  src={badge(label, logo)}
                  alt={label.replace("%20", " ")}
                  className="h-5"
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Divider />

      <Reveal>
        <h2 className="text-center text-sm font-semibold tracking-[0.3em] text-ice uppercase">Selected Work</h2>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <motion.a
              href="#"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-colors hover:border-ice/40"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-base font-semibold text-snow">{p.name}</span>
                <span className="text-xs text-muted-foreground">· {p.tagline}</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{p.detail}</p>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Divider />

      <Reveal>
        <p className="text-center text-xs text-muted-foreground">
          Open to collaborating on AI-native products. Reach out anytime.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/alpine-footer.svg" alt="" className="w-full rounded-2xl" />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 text-center text-[11px] leading-relaxed text-muted-foreground/70">
          This page previews the animated SVGs. Commit{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-snow">README.md</code> and{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-snow">assets/</code> to{" "}
          <span className="text-ice">tusharsaharan/tusharsaharan</span> — the README pulls them from {RAW}.
        </p>
      </Reveal>
    </main>
  )
}
