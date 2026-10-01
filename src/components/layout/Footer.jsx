import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const cleanPhone = CONTACT.phone.replace(/[^\d+]/g, "");

  return (
    <footer id="contact" className="relative w-full px-6 py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto">
        {/* 1. TIÊU ĐỀ SECTION ĐỒNG BỘ DARK THEME */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-sm text-xs font-mono text-emerald-300 mb-3 shadow-sm">
            <span>// 03. CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {CONTACT.title || "Contact Me"}
          </h2>
          <p className="mt-2 text-sm text-neutral-300 font-mono">
            Open for software quality assurance, automation engineering, and
            fullstack discussions.
          </p>
        </motion.div>

        {/* 2. KHỐI KÍNH MỜ CHỨA TOÀN BỘ NỘI DUNG LIÊN HỆ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-3xl bg-neutral-950/65 backdrop-blur-md border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-10 border-b border-white/10">
            {/* Cột trái: Tên hiệu, Quote & Địa chỉ */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-neutral-950 font-mono text-xs font-bold">
                    DB
                  </span>
                  <span className="text-xl font-bold tracking-tight text-white">
                    Danny Bui
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    /&gt;
                  </span>
                </div>

                <blockquote className="mt-3 text-sm italic leading-relaxed text-neutral-300 border-l-2 border-emerald-500 pl-4 whitespace-pre-line">
                  {CONTACT.quote ||
                    '"Keep going. Everything you need will come to you at the perfect time."'}
                </blockquote>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 pt-2">
                <FiMapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{CONTACT.address}</span>
              </div>
            </div>

            {/* Cột phải: 4 Nút Kênh liên hệ trực tiếp dạng thẻ kính */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-1">
                Direct Channels
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {/* Nút Email */}
                <a
                  href={CONTACT.email}
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-neutral-900/80 hover:bg-neutral-800 hover:border-emerald-500/50 transition duration-200"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FiMail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate text-neutral-200 font-medium">
                      {CONTACT.email.replace("mailto:", "")}
                    </span>
                  </div>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>

                {/* Nút Điện thoại */}
                <a
                  href={`tel:${cleanPhone}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-neutral-900/80 hover:bg-neutral-800 hover:border-emerald-500/50 transition duration-200"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FiPhone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate text-neutral-200 font-medium">
                      {CONTACT.phone}
                    </span>
                  </div>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>

                {/* Nút GitHub */}
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-neutral-900/80 hover:bg-neutral-800 hover:border-emerald-500/50 transition duration-200"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FaGithub className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate text-neutral-200 font-medium">
                      GitHub Profile
                    </span>
                  </div>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>

                {/* Nút LinkedIn */}
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-neutral-900/80 hover:bg-neutral-800 hover:border-emerald-500/50 transition duration-200"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FaLinkedin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate text-neutral-200 font-medium">
                      LinkedIn Connection
                    </span>
                  </div>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* 3. DÒNG COPYRIGHT BÊN DƯỚI CÙNG KHỐI KÍNH */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
            <p>© {currentYear} Danny Bui. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Based in {CONTACT.address}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
