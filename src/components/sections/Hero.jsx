import { motion } from 'framer-motion'
import { FiCode, FiMail, FiDownload } from 'react-icons/fi'
import { useResponsive } from '../../hooks/useResponsive'
import { ASSETS } from '../../constants/assets'
import { HERO } from '../../data/content'
import Button from '../common/Button'

export default function Hero() {
  const { isDesktop, isTablet } = useResponsive()

  const avatarHeight = isDesktop ? undefined : isTablet ? 500 : 300

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start justify-center"
    >
      <h1
        className={`whitespace-pre-line font-bold text-ink ${
          isDesktop ? 'text-5xl' : isTablet ? 'text-4xl' : 'text-3xl'
        }`}
      >
        {HERO.greeting}
      </h1>
      <p className="mt-4 text-2xl font-bold text-ink">{HERO.role}</p>
      <p className="mt-4 text-justify text-lg text-ink">{HERO.bio}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button icon={FiCode} label="GitHub" href={HERO.github} />
        <Button icon={FiMail} label="Send an Email" href={HERO.email} />
        <Button
          icon={FiDownload}
          label="Download CV"
          outlined
          href={ASSETS.cv}
          onClick={(e) => {
            e.preventDefault()
            const a = document.createElement('a')
            a.href = ASSETS.cv
            a.download = 'Ducbh_CV.pdf'
            a.click()
          }}
        />
      </div>
    </motion.div>
  )

  const avatar = (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex items-center justify-center"
    >
      <img
        src={ASSETS.avatar}
        alt="Duc, Bui Huu portrait"
        className="max-w-[90%] object-cover"
        style={avatarHeight ? { maxHeight: avatarHeight } : { maxHeight: '90vh' }}
      />
    </motion.div>
  )

  if (isDesktop) {
    return (
      <div className="flex items-center gap-8">
        <div className="w-[50px] shrink-0" />
        <div className="flex-[6]">{content}</div>
        <div className="flex-[4]">{avatar}</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {avatar}
      <div className="h-8" />
      {content}
    </div>
  )
}
