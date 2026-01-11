"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, Mail, Code2, Database, Layers } from "lucide-react";

const projects = [
  {
    title: "Automate Object Detection System - AODS",
    description: "AI-powered CCTV system for real-time detection of abnormal events, with instant alerts and a monitoring dashboard.",
    images: [
      "/projects/aods/cameras.png",
      "/projects/aods/alerts.png",
      "/projects/aods/dashboardaods.png",
      "/projects/aods/reportaods.png"
    ],
    tech: ["Next.js", "PostgreSQL", "Node.js / Express", "Tailwind CSS"],
  },
  {
    title: "Spendly – Expense Tracker",
    description: "A simple full-stack web app to manage income and expenses, featuring a clean and intuitive dashboard.",
    images: [
      "/projects/spendly/homespendly.png",
      "/projects/spendly/expenses.png",
      "/projects/spendly/dashboard.png",
      "/projects/spendly/addexpenses.png"
    ],
    tech: ["Next.js", "Supabase", "Node.js / Express", "Tailwind CSS"],
  },
  {
    title: "Bookstore – Online Bookstore",
    description: "A web app for browsing books, managing a shopping cart, and making purchases online, built with Next.js and Supabase.",
    images: [
      "/projects/bookstore/home.png",
      "/projects/bookstore/allbooks.png",
      "/projects/bookstore/viewbooks.png",
      "/projects/bookstore/addtocart.png"
    ],
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "TTT Developer Performance",
    description: "An internal system to evaluate developer performance, featuring automated dashboards and detailed analytics, built with Laravel.",
    images: [
      "/projects/ttt-dp/dashboard.png",
      "/projects/ttt-dp/teamperformance.png",
      "/projects/ttt-dp/reports.png",
      "/projects/ttt-dp/card.png"
    ],
    tech: ["Laravel", "ApexCharts.js", "Tailwind CSS"],
  },
];

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
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm shadow-2xl hover:border-violet-500/50 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <img
          src={project.images[index]}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg bg-black/60 p-2.5 text-white backdrop-blur-sm hover:bg-violet-600 transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-black/60 p-2.5 text-white backdrop-blur-sm hover:bg-violet-600 transition-all"
        >
          <ChevronRight size={18} />
        </button>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {project.images.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-violet-500" : "w-1.5 bg-zinc-600"
                }`}
            />
          ))}
        </div>
      </div>
      <div className="p-7">
        <h3 className="mb-3 text-xl font-bold text-zinc-100">{project.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="rounded-md bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 text-xs font-medium text-violet-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden opacity-30">
        <div
          className="absolute -left-48 top-0 h-96 w-96 animate-pulse rounded-full bg-violet-600/30 blur-3xl"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute right-0 top-1/4 h-80 w-80 animate-pulse rounded-full bg-fuchsia-600/20 blur-3xl"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 h-72 w-72 animate-pulse rounded-full bg-indigo-600/20 blur-3xl"
          style={{ animationDuration: "6s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                Available for opportunities
              </div>
              <h1 className="mb-6 text-6xl md:text-7xl font-black tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
                  Hi, I'm
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  Fah
                </span>
              </h1>
              <p className="mb-8 text-xl text-zinc-400 leading-relaxed max-w-xl">
                I am a full-stack developer passionate about building modern web applications. I love exploring new technologies and turning innovative ideas into reality.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React/Next.js", "Node.js", "PostgreSQL", "APIs & Backend"].map(item => (
                  <span
                    key={item}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-sm hover:border-zinc-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow/gradient behind profile */}
                <div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-3xl opacity-40 animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
                {/* Circular profile */}
                <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-2xl">
                  <img src="/profile.png" alt="Profile" className="h-full w-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 p-12 backdrop-blur-sm shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              <h2 className="text-4xl font-bold text-zinc-100">About Me</h2>
            </div>
            <p className="max-w-3xl text-lg text-zinc-400 leading-relaxed">
              I am a third-year Software Engineering student, curious and eager to learn new things. I explore full-stack development by building projects using React, Next.js, and backend technologies. Every project is an opportunity to enhance my skills and create meaningful solutions.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              <h2 className="text-4xl font-bold text-zinc-100">Tech Stack</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Frontend", icon: Code2, skills: ["React / Next.js", "Tailwind CSS", "Framer Motion"], bg: "bg-violet-500/10", text: "text-violet-400", dot: "bg-violet-500" },
              { title: "Backend", icon: Database, skills: ["Node.js / Express", "Laravel", "PostgreSQL / MySQL", "Supabase"], bg: "bg-fuchsia-500/10", text: "text-fuchsia-400", dot: "bg-fuchsia-500" },
              { title: "Tools & Others", icon: Layers, skills: ["Git & GitHub", "Railway / Vercel", "Docker", "Playwright", "Postman"], bg: "bg-indigo-500/10", text: "text-indigo-400", dot: "bg-indigo-500" }
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300"
                >
                  <div className={`mb-6 inline-flex rounded-xl ${cat.bg} p-3 ${cat.text}`}>
                    <Icon size={28} />
                  </div>
                  <h4 className="mb-5 text-2xl font-bold text-zinc-100">{cat.title}</h4>
                  <ul className="space-y-3 text-zinc-400">
                    {cat.skills.map(skill => (
                      <li key={skill} className="flex items-center gap-3 text-sm">
                        <div className={`h-1.5 w-1.5 rounded-full ${cat.dot}`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              <h2 className="text-4xl font-bold text-zinc-100">Featured Projects</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {projects.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 p-16 text-center backdrop-blur-sm shadow-2xl"
          >
            <h2 className="mb-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Let's Connect
            </h2>
            <p className="mb-10 text-lg text-zinc-400 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, networking, or simply a friendly chat!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:fasaiswy502@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-sm hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
              >
                <Mail size={20} className="group-hover:text-violet-400 transition-colors" />
                <span>fasaiswy502@gmail.com</span>
              </a>

              <a
                href="https://github.com/Fahhhqwe"
                target="_blank"
                className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-sm hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
              >
                <Github size={20} className="group-hover:text-violet-400 transition-colors" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800/50 py-10 text-center text-sm text-zinc-600">
          <p>© 2026 Fah. Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </main>
  );
}
