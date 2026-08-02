import { motion } from 'framer-motion'
import { FiSettings, FiCode, FiSmartphone } from 'react-icons/fi'

const ICONS = {
  settings: FiSettings,
  code: FiCode,
  mobile: FiSmartphone,
}

export default function SkillCard({ icon, title, description, technology, tools }) {
  const Icon = ICONS[icon] ?? FiSettings

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
    >
      <Icon size={40} className="text-ink" />
      <h3 className="mt-4 text-xl font-bold text-ink">{title}</h3>
      <hr className="my-2 w-full border-divider" />
      <p className="text-justify text-base text-ink">{description}</p>
      <p className="mt-4 text-justify text-base text-ink">
        <span className="font-bold">Technologies: </span>
        {technology}
      </p>
      <p className="mt-4 text-justify text-base text-ink">
        <span className="font-bold">Tools: </span>
        {tools}
      </p>
    </motion.div>
  )
}
