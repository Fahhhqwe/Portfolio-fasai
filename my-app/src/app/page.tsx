"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =========================
   Mock Data
========================= */
const projects = [
  {
    title: "Spendly – Expense Tracker",
    description:
      "Full-stack expense tracking app with Supabase, Express, and modern dashboard UI.",
    images: [
      "/projects/spendly/1.png",
      "/projects/spendly/2.png",
      "/projects/spendly/3.png",
      "/projects/spendly/4.png",
    ],
    tech: ["Next.js", "Supabase", "Express", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with Framer Motion animations and clean minimal design.",
    images: [
      "/projects/portfolio/1.png",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
      "/projects/portfolio/4.png",
    ],
    tech: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    title: "Admin Dashboard",
    description:
      "Responsive admin dashboard with charts, authentication, and role-based access.",
    images: [
      "/projects/dashboard/1.png",
      "/projects/dashboard/2.png",
      "/projects/dashboard/3.png",
      "/projects/dashboard/4.png",
    ],
    tech: ["Next.js", "Recharts", "Tailwind"],
  },
  {
    title: "API Backend Service",
    description:
      "RESTful API service with Express, JWT authentication, and PostgreSQL.",
    images: [
      "/projects/api/1.png",
      "/projects/api/2.png",
      "/projects/api/3.png",
      "/projects/api/4.png",
    ],
    tech: ["Node.js", "Express", "PostgreSQL"],
  },
];

/* =========================
   Components
========================= */
function Section({ title, children }: { title: string; children: any }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-semibold text-slate-800"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function ProjectCard({ project }: any) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;

  const prev = () => setIndex((i: number) => (i - 1 + total) % total);
  const next = () => setIndex((i: number) => (i + 1) % total);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl bg-white shadow-sm"
    >
      {/* Carousel */}
      <div className="relative aspect-video bg-slate-100">
        <Image
          src={project.images[index]}
          alt={project.title}
          fill
          className="object-cover"
        />

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {project.images.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-indigo-600" : "bg-slate-300"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-slate-800">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-slate-600">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   Page
========================= */
export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-700">
      {/* ================= HERO ================= */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-slate-800">
            Hi, I’m Fah 👋
          </h1>
          <p className="mb-8 max-w-xl text-lg text-slate-600">
            Full-stack developer who loves building clean, scalable, and
            delightful web experiences.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Full-stack Developer",
              "Next.js & React",
              "API & Database",
              "Clean UI / UX",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-700"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full bg-slate-200">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <Section title="About Me">
        <p className="max-w-3xl text-lg leading-relaxed">
          I’m a passionate full-stack developer with experience in building
          modern web applications using React, Next.js, and backend services
          like Supabase and Express. I focus on clean architecture, good UX, and
          maintainable code.
        </p>
      </Section>

      {/* ================= SKILLS ================= */}
      <Section title="Skills">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["Frontend", "Backend", "Tools"].map((cat) => (
            <div
              key={cat}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h4 className="mb-4 font-semibold text-indigo-600">{cat}</h4>
              <ul className="space-y-2 text-sm">
                {cat === "Frontend" && (
                  <>
                    <li>React / Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </>
                )}
                {cat === "Backend" && (
                  <>
                    <li>Node.js / Express</li>
                    <li>Supabase</li>
                    <li>REST API</li>
                  </>
                )}
                {cat === "Tools" && (
                  <>
                    <li>Git & GitHub</li>
                    <li>Railway / Vercel</li>
                    <li>Figma</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= PROJECTS ================= */}
      <Section title="Projects">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      {/* ================= CONTACT ================= */}
      <Section title="Contact">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <form className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
            <input
              className="w-full rounded-lg border border-slate-200 p-3"
              placeholder="Your name"
            />
            <input
              className="w-full rounded-lg border border-slate-200 p-3"
              placeholder="Your email"
            />
            <textarea
              className="w-full rounded-lg border border-slate-200 p-3"
              placeholder="Message"
              rows={4}
            />
            <button
              type="button"
              className="w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center gap-4">
            <a className="flex items-center gap-3" href="#">
              <Github /> GitHub
            </a>
            <a className="flex items-center gap-3" href="#">
              <Linkedin /> LinkedIn
            </a>
            <a className="flex items-center gap-3" href="#">
              <Mail /> Email
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
