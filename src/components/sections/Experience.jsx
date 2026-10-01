import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiFolder,
  FiExternalLink,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";
import { EXP_JOBS, PROJECTS } from "../../data/content";
import { ASSETS } from "../../constants/assets";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      {/* 1. SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-18"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-sm text-xs font-mono text-emerald-300 mb-3 shadow-sm">
          <span>// 02. EXPERIENCE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Career & Projects
        </h2>
        <p className="mt-2 text-sm text-neutral-300 font-mono">
          Professional engineering track record and featured software builds.
        </p>
      </motion.div>

      {/* 2. SUB-SECTION: JOB EXPERIENCE */}
      <div className="mb-20">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-6">
          <FiBriefcase className="w-3.5 h-3.5" />
          <span>01 / Job Experience</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {EXP_JOBS.map((job, idx) => (
            <motion.div
              key={`${job.name}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/65 backdrop-blur-md shadow-2xl hover:border-emerald-500/40 transition duration-300"
            >
              <div>
                {/* Logo Header Container (Giữ nền trắng bo tròn bên trong để logo hiển thị chuẩn màu gốc) */}
                <div className="w-full h-36 bg-white flex items-center justify-center p-6 border-b border-white/10">
                  {job.logoKey && ASSETS[job.logoKey] ? (
                    <img
                      src={ASSETS[job.logoKey]}
                      alt={`${job.name} logo`}
                      className="max-h-full max-w-[85%] object-contain"
                    />
                  ) : (
                    <div className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-bold">
                      {job.name}
                    </div>
                  )}
                </div>

                {/* Nội dung card */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-neutral-300 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md border border-white/10 bg-neutral-900/80 font-medium">
                      <FiCalendar className="w-3 h-3 text-emerald-400" />
                      {job.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md border border-white/10 bg-neutral-900/80">
                      <FiUsers className="w-3 h-3 text-emerald-400" />
                      Team: {job.team_size}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {job.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-0.5 mb-3">
                    {job.name}
                  </p>

                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">
                    {job.description}
                  </p>
                </div>
              </div>

              {/* Stack tags */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/10">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md border border-white/10 bg-neutral-900 text-neutral-200 text-[11px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. SUB-SECTION: PERSONAL PROJECTS */}
      <div>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-6">
          <FiFolder className="w-3.5 h-3.5" />
          <span>02 / Personal Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/65 backdrop-blur-md shadow-2xl hover:border-emerald-500/40 transition duration-300"
            >
              <div>
                <div className="relative aspect-video w-full bg-neutral-900 border-b border-white/10 overflow-hidden flex items-center justify-center p-3">
                  {project.video ? (
                    <iframe
                      src={
                        project.video
                          .replace("youtu.be/", "www.youtube.com/embed/")
                          .split("?")[0]
                      }
                      title={project.title}
                      className="w-full h-full border-0 rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={ASSETS[project.image] || ASSETS.fpt}
                      alt={project.title}
                      className="max-h-full max-w-[70%] object-contain"
                    />
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                    <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-neutral-900/80 font-mono text-[11px] text-neutral-300">
                      <FiUsers className="w-3 h-3 text-emerald-400" />{" "}
                      {project.members}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technicalUsed
                      .split(",")
                      .slice(0, 6)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md border border-white/10 bg-neutral-900 text-neutral-200 text-[11px] font-mono font-medium"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    {project.technicalUsed.split(",").length > 6 && (
                      <span className="px-1.5 py-0.5 text-neutral-400 font-mono text-[11px]">
                        +{project.technicalUsed.split(",").length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {project.link && (
                <div className="px-6 pb-6 pt-0">
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>{project.link.text}</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
