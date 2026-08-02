import { motion } from 'framer-motion'
import { useResponsive } from '../../hooks/useResponsive'
import { ASSETS } from '../../constants/assets'
import { EDUCATION, SKILLS } from '../../data/content'
import SkillCard from '../common/SkillCard'

export default function About() {
  const { isDesktop, isTablet, isMobile } = useResponsive()

  return (
    <div className={isMobile ? '' : 'mx-[10%]'}>
      <div className="h-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={`w-full rounded-2xl bg-white p-4 shadow-[0_1px_5px_rgba(0,0,0,0.2)] ${
          isDesktop ? 'mx-15' : ''
        }`}
      >
        {isMobile ? (
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-ink">{EDUCATION.degree}</h3>
            <p className="mt-2 italic text-ink">{EDUCATION.school}</p>
            <p className="mt-2 italic text-ink">{EDUCATION.years}</p>
            <img src={ASSETS.fpt} alt="FPT University logo" className="mx-auto mt-4 h-[15vh] object-cover" />
          </div>
        ) : isTablet ? (
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold text-ink">{EDUCATION.degree}</h3>
            <p className="mt-2 text-ink">{EDUCATION.school}</p>
            <p className="mt-2 text-ink">{EDUCATION.years}</p>
            <img src={ASSETS.fpt} alt="FPT University logo" className="mx-auto mt-4 h-[15vh] object-cover" />
          </div>
        ) : (
          <div className="mx-20 flex items-center justify-evenly gap-8">
            <div className="flex flex-[2] flex-col items-start">
              <h3 className="text-2xl font-bold text-ink">{EDUCATION.degree}</h3>
              <p className="mt-2 text-ink">{EDUCATION.school}</p>
              <p className="mt-2 text-ink">{EDUCATION.years}</p>
            </div>
            <img src={ASSETS.fpt} alt="FPT University logo" className="h-[15vh] flex-1 object-contain" />
          </div>
        )}
      </motion.div>

      <div className="h-15" />

      <h2 className="text-center text-2xl font-bold text-ink">What I Can Do?</h2>
      <div className="h-4" />

      <div
        className={
          isMobile
            ? 'flex flex-col gap-4'
            : isTablet
            ? 'grid grid-cols-2 gap-4 [&>*:nth-child(3)]:col-span-2'
            : 'mx-15 grid grid-cols-3 gap-15'
        }
      >
        {SKILLS.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>

      <div className="h-8" />
    </div>
  )
}
