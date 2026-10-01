import { motion } from "framer-motion";
import { FiCode, FiMail, FiDownload, FiExternalLink } from "react-icons/fi";
import { ASSETS } from "../../constants/assets";
import { HERO } from "../../data/content";
import Button from "../common/Button";

export default function Hero() {
  const handleDownloadCV = (e) => {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = ASSETS.cv;
    a.download = "Danny_resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* 左侧文字与介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start justify-center order-2 lg:order-1 p-6 sm:p-8 rounded-3xl bg-neutral-950/60 backdrop-blur-md border border-white/10 shadow-2xl"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-sm text-xs font-mono text-emerald-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="text-sm font-medium tracking-wider text-neutral-200">
              {HERO.chineseGreeting}
            </span>
            <span className="text-neutral-500">/</span>
            <span className="uppercase tracking-widest text-neutral-400">
              {HERO.hello}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            {HERO.greeting}
          </h1>

          <p className="mt-3 text-lg md:text-xl font-semibold text-neutral-200">
            {HERO.role}
          </p>
          <p className="mt-1 text-sm md:text-base font-medium text-emerald-400 font-mono">
            {HERO.chineseRole}
          </p>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-300 text-justify">
            {HERO.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              icon={FiCode}
              label="GitHub"
              href={HERO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-950 hover:bg-neutral-200 border-none"
            />
            <Button
              icon={FiMail}
              label="Send an Email"
              href={HERO.email}
              className="bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
            />

            {/* Split button: Resume */}
            <div className="inline-flex items-stretch rounded-lg border border-neutral-700 bg-neutral-900/90 text-white shadow-sm overflow-hidden h-10 hover:border-neutral-500 transition-colors">
              <a
                href="https://canva.link/6s455qxl14e5umo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                <FiExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                <span>View Resume</span>
              </a>

              <div className="w-px bg-neutral-700" />

              <button
                type="button"
                onClick={handleDownloadCV}
                title="Download Resume"
                className="inline-flex items-center justify-center px-3 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <FiDownload className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-90 md:max-w-95 lg:max-w-full">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/60 backdrop-blur-md shadow-2xl group">
              <img
                src={ASSETS.dannbui3}
                alt="Portrait of Danny Bui"
                className="h-full w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.02]"
              />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-neutral-900/80 backdrop-blur-md px-3.5 py-2 border border-white/10 text-white">
                <span className="font-mono text-xs tracking-wider font-medium">
                  Danny Bui
                </span>
                <span className="font-mono text-[11px] text-neutral-300">
                  Fullstack Test Engineer
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
