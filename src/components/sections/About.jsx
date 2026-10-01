import { motion } from "framer-motion";
import { ASSETS } from "../../constants/assets";
import { EDUCATION, ABOUT } from "../../data/content";

const TECHNICAL_SKILLS = [
  "Playwright",
  "Selenium",
  "Java",
  ".NET / ASP.NET",
  "RESTful API",
  "GraphQL",
  "Flutter",
  "Dart",
  "MSSQL",
  "MySQL",
  "Git",
  "Tortoise",
  "Postman",
];

const CORE_SKILLS = [
  "Teamwork",
  "Problem Solving",
  "Presentation",
  "Adaptability",
  "Communication",
  "Reading & comprehending documentation",
  "Bug Lifecycle & Defect Analysis",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Centered Minimal Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-18"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-sm text-xs font-mono text-emerald-300 mb-3 shadow-sm">
          <span>// 01. ABOUT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          About Me
        </h2>
      </motion.div>

      {/* Main Container Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl bg-black/25 backdrop-blur-md border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
      >
        {/* Left Column: Education */}
        <div className="lg:col-span-5 flex items-start gap-5 pl-1">
          <div className="w-0.75 self-stretch bg-emerald-500 rounded-full" />

          <div className="flex flex-col justify-between py-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {EDUCATION.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-neutral-300">
                {EDUCATION.school} | {EDUCATION.years}
              </p>
            </div>

            <div className="mt-8 pt-4">
              <div className="inline-flex p-3 rounded-xl bg-white/90 shadow-inner">
                <img
                  src={ASSETS.fpt}
                  alt="FPT University"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skill Pills */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          {/* Technical Skills */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3.5">
              Technical Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {TECHNICAL_SKILLS.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-neutral-900/80 text-neutral-200 text-xs sm:text-sm font-mono font-medium shadow-sm hover:border-emerald-500/50 hover:bg-neutral-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3.5">
              Core Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {CORE_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-neutral-900/50 text-neutral-300 text-xs sm:text-sm font-medium hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="pt-4 border-t border-white/10">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3">
              Languages
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {ABOUT.Vietnamese}
              </span>
              <span className="text-neutral-600">/</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {ABOUT.English}
              </span>
              <span className="text-neutral-600">/</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {ABOUT.Chinese}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
